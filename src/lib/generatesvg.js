// src/lib/generatesvg.js
import SunCalc from 'suncalc';

/**
 * Genera SVG della costellazione con arco stellare, arco solare realistico e freccia vento
 */
export function generateConstellationSVG({
    azMin, azMax,             // arco stellare
    date,                     // data della costellazione
    lat = -13.9, lon = -38.8, // Colônia de Una
    windAzMin, windAzMax,
    width = 400, height = 400
}) {
    const r = 150;
    const cx = width / 2;
    const cy = height / 2;

    // Calcolo archi solari realistici
    const times = SunCalc.getTimes(new Date(date), lat, lon);
    const sunriseAz = SunCalc.getPosition(times.sunrise, lat, lon).azimuth * 180 / Math.PI + 180;
    const sunsetAz = SunCalc.getPosition(times.sunset, lat, lon).azimuth * 180 / Math.PI + 180;

    // Conversione polare -> SVG
    function polarToSVG(az, radius) {
        const rad = (az % 360) * Math.PI / 180;
        const x = cx + radius * Math.sin(rad);
        const y = cy - radius * Math.cos(rad);
        return [x, y];
    }

    // Punti cardinali
    const labels = [
        { az: 0, text: "N" },
        { az: 90, text: "L" },
        { az: 180, text: "S" },
        { az: 270, text: "O" },
    ];
    const labelRadius = r + 15;

    const labelsSVG = labels.map(l => {
        const [x, y] = polarToSVG(l.az, labelRadius);
        return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="#9ea7e5" font-size="12" font-family="sans-serif">${l.text}</text>`;
    }).join("\n");


    // Arco stellare
    const [sx1, sy1] = polarToSVG(azMin, r);
    const [sx2, sy2] = polarToSVG(azMax, r);

    // Arco solare
    const [sunx1, suny1] = polarToSVG(sunriseAz, r);
    const [sunx2, suny2] = polarToSVG(sunsetAz, r);

    // Freccia vento (media)
    const [wx1, wy1] = polarToSVG(windAzMin, r + 10);
    const [wx2, wy2] = polarToSVG(windAzMax, r + 10);

    // SVG
    return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Cerchio orizzonte -->
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#9ea7e5" stroke-width="1"/>

    <!-- Casa al centro -->
    <rect x="${cx - 10}" y="${cy - 25}" width="20" height="50" fill="#9ea7e5"/>

    <!-- Arco stellare -->
    <path d="M ${sx1} ${sy1} A ${r} ${r} 0 0 1 ${sx2} ${sy2}" fill="none" stroke="#aac2d2" stroke-width="3"/>

    <!-- Arco solare -->
    <path d="M ${sunx1} ${suny1} A ${r} ${r} 0 0 1 ${sunx2} ${suny2}" fill="none" stroke="#dac650" stroke-width="3" stroke-opacity="0.7"/>

    <!-- Arco vento -->
    <path d="M ${wx1} ${wy1} A ${r + 10} ${r + 10} 0 0 1 ${wx2} ${wy2}" fill="none" stroke="#00aaff" stroke-width="2" stroke-dasharray="5,5" stroke-opacity="0.6"/>

     <!-- Label punti cardinali -->
    ${labelsSVG}

    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#00aaff"/>
        </marker>
    </defs>
</svg>`;
}