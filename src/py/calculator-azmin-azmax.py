# calculator-azmin-azmax-constellation-18-6.py

import pandas as pd
from astropy.time import Time
from astropy.coordinates import SkyCoord, EarthLocation, AltAz
import astropy.units as u
import numpy as np

# -------------------------------------------------
# CONFIGURAZIONE
# -------------------------------------------------
CSV_FILE = "effemeridi.csv"
LATITUDE = -15.263
LONGITUDE = -39.145
ALTITUDE = 0

location = EarthLocation(
    lat=LATITUDE * u.deg,
    lon=LONGITUDE * u.deg,
    height=ALTITUDE * u.m
)

# -------------------------------------------------
# CONVERSIONE DATA
# -------------------------------------------------
def convert_to_iso(date_str):
    day, month, year = date_str.split("/")
    return f"{year}-{month}-{day}"

# -------------------------------------------------
# ARCO AZIMUTALE CORRETTO (wrap 0/360)
# -------------------------------------------------
def azimuth_arc(az_deg_array):
    az = np.array(az_deg_array) % 360
    az_sorted = np.sort(az)

    # differenze circolari
    diffs = np.diff(np.append(az_sorted, az_sorted[0] + 360))
    max_gap_idx = np.argmax(diffs)

    # l’arco reale è tutto tranne il gap massimo
    az_min = az_sorted[(max_gap_idx + 1) % len(az_sorted)]
    az_max = az_sorted[max_gap_idx]

    if az_max < az_min:
        az_max += 360

    return az_min, az_max

# -------------------------------------------------
# LETTURA CSV
# -------------------------------------------------
df = pd.read_csv(CSV_FILE)

results = []

# -------------------------------------------------
# CALCOLO PER COSTELLAZIONE (18:00 → 06:00)
# -------------------------------------------------
for date, group_date in df.groupby("date"):

    iso_date = convert_to_iso(date)

    # 18:00 del giorno
    start_time = Time(iso_date + " 18:00:00")

    # 12 ore → fino alle 06:00
    times = start_time + np.linspace(0, 12, 120) * u.hour

    for constellation, group_const in group_date.groupby("constellation"):

        az_all = []

        for _, row in group_const.iterrows():

            coord = SkyCoord(
                ra=row["RA_hms"],
                dec=row["Dec_dms"],
                unit=(u.hourangle, u.deg)
            )

            altaz = coord.transform_to(
                AltAz(obstime=times, location=location)
            )

            # solo stelle sopra orizzonte
            az_visible = altaz.az[altaz.alt > 0]

            az_all.extend(az_visible.deg)

        if len(az_all) > 0:

            az_min, az_max = azimuth_arc(az_all)

            results.append({
                "constellation": constellation,
                "stars": list(group_const["star"]),
                "date": iso_date,
                "azMin": float(az_min),
                "azMax": float(az_max)
            })

# -------------------------------------------------
# SALVATAGGIO
# -------------------------------------------------
df_results = pd.DataFrame(results)
df_results.to_csv("azmin_azmax_constellation_18_6.csv", index=False)

print("Calcolo completato → azmin_azmax_constellation_18_6.csv")