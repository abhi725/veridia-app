"use client";

interface SparklineProps {
    data: number[];
    width?: number;
    height?: number;
    color?: string;
    fillColor?: string;
}

export default function Sparkline({
    data,
    width = 200,
    height = 40,
    color = '#fc7b03',
    fillColor = 'rgba(252, 123, 3, 0.1)'
}: SparklineProps) {
    if (!data || data.length < 2) {
        return <div style={{ width, height }} className="bg-slate-100 rounded" />;
    }

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    // Create SVG path points
    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * (height - 4) - 2;
        return { x, y };
    });

    // Create line path
    const linePath = points.map((point, index) => {
        return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
    }).join(' ');

    // Create area path (for fill)
    const areaPath = `
        M 0 ${height}
        L ${points[0].x} ${points[0].y}
        ${points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')}
        L ${width} ${height}
        Z
    `;

    return (
        <svg width={width} height={height} className="overflow-visible">
            {/* Fill area */}
            <path
                d={areaPath}
                fill={fillColor}
                strokeWidth={0}
            />
            {/* Line */}
            <path
                d={linePath}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Endpoint dot */}
            <circle
                cx={points[points.length - 1].x}
                cy={points[points.length - 1].y}
                r={3}
                fill={color}
            />
        </svg>
    );
}
