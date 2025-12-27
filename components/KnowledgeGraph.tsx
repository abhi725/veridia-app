"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

interface Node {
    id: string;
    label: string;
    x: number;
    y: number;
    active: boolean;
}

interface Edge {
    source: string;
    target: string;
}

export default function KnowledgeGraph() {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    useEffect(() => {
        // Sample knowledge base nodes
        const sampleNodes: Node[] = [
            { id: 'n1', label: 'SOC 2', x: 150, y: 100, active: true },
            { id: 'n2', label: 'GDPR', x: 250, y: 150, active: false },
            { id: 'n3', label: 'Compliance', x: 150, y: 200, active: true },
            { id: 'n4', label: 'Security', x: 50, y: 150, active: false },
            { id: 'n5', label: 'Reports', x: 150, y: 50, active: true },
        ];

        const sampleEdges: Edge[] = [
            { source: 'n1', target: 'n3' },
            { source: 'n2', target: 'n3' },
            { source: 'n4', target: 'n1' },
            { source: 'n5', target: 'n1' },
            { source: 'n4', target: 'n3' },
        ];

        setNodes(sampleNodes);
        setEdges(sampleEdges);

        // Animate active nodes
        const interval = setInterval(() => {
            setNodes(prev => prev.map(node => ({
                ...node,
                active: Math.random() > 0.5
            })));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const getNodePosition = (id: string) => {
        const node = nodes.find(n => n.id === id);
        return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
    };

    return (
        <div className="w-full h-full relative bg-slate-50/50 rounded-lg overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 300 250">
                {/* Edges */}
                {edges.map((edge, index) => {
                    const source = getNodePosition(edge.source);
                    const target = getNodePosition(edge.target);
                    return (
                        <line
                            key={`edge-${index}`}
                            x1={source.x}
                            y1={source.y}
                            x2={target.x}
                            y2={target.y}
                            stroke="#cbd5e1"
                            strokeWidth={2}
                            opacity={0.4}
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node) => (
                    <g key={node.id}>
                        {/* Pulsing ring for active nodes */}
                        {node.active && (
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r={25}
                                fill="none"
                                stroke="#fc7b03"
                                strokeWidth={2}
                                opacity={0.3}
                                className="animate-ping"
                            />
                        )}
                        {/* Node circle */}
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r={20}
                            fill={node.active ? '#fc7b03' : '#e2e8f0'}
                            stroke={node.active ? '#e06d02' : '#cbd5e1'}
                            strokeWidth={2}
                            className="transition-all duration-500"
                        />
                        {/* Node label */}
                        <text
                            x={node.x}
                            y={node.y + 35}
                            textAnchor="middle"
                            fontSize={11}
                            fontWeight={500}
                            fill={node.active ? '#fc7b03' : '#64748b'}
                            className="transition-colors duration-500"
                        >
                            {node.label}
                        </text>
                    </g>
                ))}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                <div className="w-2 h-2 rounded-full bg-veridia-orange animate-pulse" />
                <span className="text-slate-600">Active Query</span>
            </div>
        </div>
    );
}
