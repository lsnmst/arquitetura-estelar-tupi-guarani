# calculator-azmin-azmax-constellation.py
import pandas as pd
from astropy.time import Time
from astropy.coordinates import SkyCoord, EarthLocation, AltAz
import astropy.units as u
import numpy as np

# -------------------------------------------------
# CONFIGURAZIONE
# -------------------------------------------------
CSV_FILE = "effemeridi.csv"
LATITUDE = -15.263    # latitudine (positivo nord, negativo sud)
LONGITUDE = -39.145   # longitudine (positivo est, negativo ovest)
ALTITUDE = 0          # altezza sul livello del mare in metri

location = EarthLocation(lat=LATITUDE*u.deg, lon=LONGITUDE*u.deg, height=ALTITUDE*u.m)

# -------------------------------------------------
# FUNZIONE PER CONVERTIRE LA DATA
# -------------------------------------------------
def convert_to_iso(date_str):
    day, month, year = date_str.split("/")
    return f"{year}-{month}-{day} 00:00:00"

# -------------------------------------------------
# FUNZIONE PER CALCOLARE IL VERO ARCO AZIMUTALE
# -------------------------------------------------
def azimuth_arc(az_deg_array):
    """
    Calcola il minimo e massimo azimut considerando il wrap-around a 360°.
    Restituisce un arco coerente, anche se le stelle passano da 359° a 0°.
    """
    az = np.array(az_deg_array) % 360
    az_sorted = np.sort(az)
    diffs = np.diff(np.append(az_sorted, az_sorted[0]+360))
    max_gap_idx = np.argmax(diffs)

    az_min = az_sorted[(max_gap_idx + 1) % len(az_sorted)]
    az_max = az_sorted[max_gap_idx]
    if az_max < az_min:
        az_max += 360
    return az_min, az_max

# -------------------------------------------------
# LETTURA CSV
# -------------------------------------------------
df = pd.read_csv(CSV_FILE)

# -------------------------------------------------
# CALCOLO ARCO PER COSTELLAZIONE
# -------------------------------------------------
results = []

for date, group_date in df.groupby("date"):
    date_iso = convert_to_iso(date)
    times = Time(date_iso) + np.linspace(0, 24, 144)*u.hour  # 144 punti in 24h

    for constellation, group_const in group_date.groupby("constellation"):
        az_all = []

        for _, row in group_const.iterrows():
            coord = SkyCoord(ra=row["RA_hms"], dec=row["Dec_dms"], unit=(u.hourangle, u.deg))
            altaz = coord.transform_to(AltAz(obstime=times, location=location))
            az_visible = altaz.az[altaz.alt > 0]  # solo stelle sopra l'orizzonte

            az_all.extend(az_visible.deg)

        if az_all:
            az_min, az_max = azimuth_arc(az_all)
            results.append({
                "constellation": constellation,
                "stars": list(group_const["star"]),
                "date": date_iso.split(" ")[0],
                "azMin": az_min,
                "azMax": az_max
            })

# -------------------------------------------------
# SALVATAGGIO SU CSV
# -------------------------------------------------
df_results = pd.DataFrame(results)
df_results.to_csv("azmin_azmax_constellation.csv", index=False)

print("Calcolo completato! File salvato come azmin_azmax_constellation.csv")