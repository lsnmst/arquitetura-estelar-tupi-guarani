export function generateStarBackgroundSVG(stars, width, height, raOffset = 0) {

    function hmsToDeg(hms) {
        if (!hms) return null;
        const [h, m, s] = hms.split(":").map(Number);
        return (h + m / 60 + s / 3600) * 15;
    }

    function dmsToDeg(dms) {
        const clean = dms.replace("−", "-");
        const [d, m, s] = clean.split(":").map(Number);
        const sign = d < 0 ? -1 : 1;
        return d + sign * (m / 60 + s / 3600);
    }

    function project(raDeg, decDeg) {
        const x = ((raDeg + raOffset) % 360) / 360 * width;
        const y = ((90 - decDeg) / 180) * height;
        return [x, y];
    }

    const circles = stars.map(s => {
        const ra = hmsToDeg(s.RA_hms);
        const dec = dmsToDeg(s.Dec_dms);
        if (ra == null || dec == null) return "";

        const [x, y] = project(ra, dec);
        return `<circle cx="${x}" cy="${y}" r="1" fill="#9ea7e5" />`;
    }).join("");

    return `
    <svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
        <rect width="100%" height="100%" fill="#020414"/>
        ${circles}
    </svg>
    `;
}