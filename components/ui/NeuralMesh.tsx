"use client";
import React, { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    ox: number; // Original X
    oy: number; // Original Y
    vx: number;
    vy: number;
}

export const NeuralMesh = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const nodes = useRef<Node[]>([]);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Brain shape definition
        const isInsideBrain = (x: number, y: number, cx: number, cy: number) => {
            // Normalized distance from center (Ellipsoid)
            const normalizedX = (x - cx) / (canvas.width * 0.45); // Width scale (increased)
            const normalizedY = (y - cy) / (canvas.height * 0.35); // Height scale (increased)
            const d = Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY);
            return d < 1;
        };

        const resize = () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            initNodes();
        };

        const initNodes = () => {
            // Increased density to account for larger area
            const nodeCount = Math.floor((canvas.width * canvas.height) / 4500);
            nodes.current = [];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let i = 0; i < nodeCount; i++) {
                let valid = false;
                let x = 0, y = 0;
                let safety = 0;

                while (!valid && safety < 100) {
                    x = (Math.random() - 0.5) * canvas.width * 0.9;
                    y = (Math.random() - 0.5) * canvas.height * 0.7;

                    if (isInsideBrain(centerX + x, centerY + y, centerX, centerY)) {
                        valid = true;
                    }
                    safety++;
                }

                const finalX = centerX + x;
                const finalY = centerY + y;

                nodes.current.push({
                    x: finalX,
                    y: finalY,
                    ox: finalX,
                    oy: finalY,
                    vx: 0,
                    vy: 0,
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const connectionDistance = 110;
            const mouseDistance = 50;
            const friction = 0.92; // High friction = no bounce (overdamped)
            const returnStrength = 0.001; // Extremely weak return force (10x slower)

            nodes.current.forEach((node, i) => {
                // 1. Return to Origin (Drift back desire)
                // Force is proportional to distance, but kept weak
                const dxOrigin = node.ox - node.x;
                const dyOrigin = node.oy - node.y;

                node.vx += dxOrigin * returnStrength;
                node.vy += dyOrigin * returnStrength;

                // 2. Mouse Interaction
                const dxMouse = mouse.current.x - node.x;
                const dyMouse = mouse.current.y - node.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouseDistance) {
                    const force = (mouseDistance - distMouse) / mouseDistance;
                    const angle = Math.atan2(dyMouse, dxMouse);
                    const repulsionStrength = 0.3; // Gentle push

                    node.vx -= Math.cos(angle) * force * repulsionStrength;
                    node.vy -= Math.sin(angle) * force * repulsionStrength;
                }

                // 3. Drift / Brownian Motion (Subtle aliveness)
                node.vx += (Math.random() - 0.5) * 0.02;
                node.vy += (Math.random() - 0.5) * 0.02;

                // 4. Update Physics
                node.vx *= friction;
                node.vy *= friction;
                node.x += node.vx;
                node.y += node.vy;

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
                ctx.fill();

                // Draw Connections
                for (let j = i + 1; j < nodes.current.length; j++) {
                    const nodeB = nodes.current[j];
                    const dx = node.x - nodeB.x;
                    const dy = node.y - nodeB.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = 1 - (dist / connectionDistance);
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.25})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};
