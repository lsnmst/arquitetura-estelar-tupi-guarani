// /lib/solar.js

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

function toJulian(date) {
    return date / 86400000 + 2440587.5;
}

export function getSunRaDec(date) {
    const jd = toJulian(date);
    const n = jd - 2451545.0;

    const L = (280.460 + 0.9856474 * n) % 360;
    const g = (357.528 + 0.9856003 * n) % 360;

    const lambda =
        L +
        1.915 * Math.sin(g * DEG2RAD) +
        0.020 * Math.sin(2 * g * DEG2RAD);

    const epsilon = 23.439 - 0.0000004 * n;

    const ra =
        Math.atan2(
            Math.cos(epsilon * DEG2RAD) * Math.sin(lambda * DEG2RAD),
            Math.cos(lambda * DEG2RAD)
        ) * RAD2DEG;

    const dec =
        Math.asin(
            Math.sin(epsilon * DEG2RAD) * Math.sin(lambda * DEG2RAD)
        ) * RAD2DEG;

    return { ra: (ra + 360) % 360, dec };
}

function getGMST(date) {
    const jd = toJulian(date);
    const T = (jd - 2451545.0) / 36525.0;

    let gmst =
        280.46061837 +
        360.98564736629 * (jd - 2451545) +
        0.000387933 * T * T -
        (T * T * T) / 38710000;

    return (gmst % 360 + 360) % 360;
}

export function raDecToAltAz(ra, dec, date, lat, lon) {
    const gmst = getGMST(date);
    const lst = (gmst + lon) % 360;

    const ha = (lst - ra + 360) % 360;

    const haRad = ha * DEG2RAD;
    const decRad = dec * DEG2RAD;
    const latRad = lat * DEG2RAD;

    const alt = Math.asin(
        Math.sin(decRad) * Math.sin(latRad) +
        Math.cos(decRad) * Math.cos(latRad) * Math.cos(haRad)
    );

    const az = Math.atan2(
        -Math.sin(haRad),
        Math.tan(decRad) * Math.cos(latRad) -
        Math.sin(latRad) * Math.cos(haRad)
    );

    return {
        altitude: alt,
        azimuth: az
    };
}

export function altAzToCartesian(alt, az, radius = 50) {
    const x = radius * Math.cos(alt) * Math.sin(az);
    const y = radius * Math.sin(alt);
    const z = radius * Math.cos(alt) * Math.cos(az);
    return { x, y, z };
}