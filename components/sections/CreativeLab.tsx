"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Music, Globe, Video, Sparkles } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "COLLECTIVE",
        category: "Audio-Visual",
        description: "CO-FOUNDING EXPERIMENTAL AV. SOUND MEETS ARCHITECTURE.",
        year: "2024",
        image: "/projects/collective.jpg"
    },
    {
        id: 2,
        title: "GLOBAL_SCOPE",
        category: "Research",
        description: "MAPPING NEURAL PATHWAYS. VANCOUVER / HONG KONG / ZURICH.",
        year: "2023-25",
        image: "/projects/research.jpg"
    },
    {
        id: 3,
        title: "PRODUCTION",
        category: "Creative",
        description: "ABLETON LIVE / STRUCTURAL FILMMAKING. BRUTALIST RHYTHMS.",
        year: "ONGOING",
        image: "/projects/production.jpg"
    },
    {
        id: 4,
        title: "FORESIGHT",
        category: "Vision",
        description: "PREDICTIVE MODELLING. LOGIC MEETS INTUITION.",
        year: "2026",
        image: "/projects/foresight.jpg"
    }
];

export function CreativeLab() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <motion.section
            ref={targetRef}
            className="relative h-[300vh] bg-black text-white"
            id="music"
            data-header-theme="dark"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Background "MUSIC" text - integrated as industrial backdrop */}
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-30 pointer-events-none select-none overflow-hidden text-neutral-500">
                    <h2 className="text-[32vw] font-black tracking-tighter leading-none whitespace-nowrap">
                        MUSIC
                    </h2>
                </div>

                <motion.div style={{ x }} className="relative z-10 flex gap-12 pl-[100vw] items-center h-full">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href="#"
                            className="relative w-[85vw] md:w-[600px] h-[75vh] flex-shrink-0 flex flex-col p-8 md:p-12 border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/80 transition-all duration-300 group cursor-pointer"
                        >
                            {/* Card Header: Metadata */}
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-white/40">
                                    {project.id.toString().padStart(2, '0')} // {project.category}
                                </span>
                                <span className="font-mono text-xs font-bold text-white/40">
                                    PROJ_{project.year}
                                </span>
                            </div>

                            {/* Card Middle: Image Placeholder Container */}
                            <div className="flex-1 w-full bg-neutral-800 mb-8 overflow-hidden relative border border-white/5">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <span className="font-mono text-[8px] uppercase tracking-widest text-white transform -rotate-45">
                                        INDUSTRIAL_PLACEHOLDER_{project.id}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur-md rounded border border-white/10">
                                    <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                </div>
                            </div>

                            {/* Card Footer: Typography */}
                            <div className="mt-auto">
                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-widest leading-relaxed max-w-sm border-l-2 border-white/10 pl-4">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}

                    {/* END removed */}
                </motion.div>
            </div>
        </motion.section>
    );
}
