import React from "react";

const RandomWave = ({ curves = 100, width = 1440, height = 100, fill = "#000000", rotation = false }) => {
    const generatePath = () => {
        let d = `M0,${height / 2} `;
        const step = width / curves;

        for (let i = 0; i < curves; i++) {
            const x1 = i * step + step / 3;
            const y1 = Math.random() * height;
            const x2 = i * step + (2 * step) / 3;
            const y2 = Math.random() * height;
            const x = (i + 1) * step;
            const y = Math.random() * height;
            d += `C${x1},${y1} ${x2},${y2} ${x},${y} `;
        }

        d += `L${width},0 L0,0 Z`;
        return d;
    };

    const path = generatePath();

    return (
        <div>

            <svg
                className="w-full h-24"
                style={{
                    transform: rotation ? "rotate(180deg)" : "none",
                    transition: "0.3s",
                    height: height ? `${height}px` : undefined,
                }}
                viewBox={`0 0 ${width} ${height}`}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path fill={fill} d={path} />
            </svg>
        </div>
    );
};

export default RandomWave;
