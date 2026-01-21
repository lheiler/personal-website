"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Music, Globe, Video, Sparkles, Play, X } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "GRADIENT COLLECTIVE",
        category: "Audio-Visual",
        description: "CO-FOUNDING EXPERIMENTAL AV COLLECTIVE. SOUND MEETS EXPERIENCES.",
        year: "2023",
        image: "/gradient.png",
        link: "https://www.instagram.com/gradient__collective/"
    },
    {
        id: 2,
        title: "DJ SET @ PROVITREFF",
        category: "Performance",
        description: "SYNTHPOP. HYPERPOP. SEXTRANCE. RECORDED LIVE.",
        year: "2024",
        image: "https://img.youtube.com/vi/fEw_0xKQesQ/maxresdefault.jpg",
        link: "https://youtu.be/fEw_0xKQesQ?si=Nh8rJ-1jWbzPs_Ts",
        embedUrl: "https://www.youtube.com/embed/fEw_0xKQesQ"
    },
    {
        id: 3,
        title: "SILVV3RR",
        category: "Music Production",
        description: "SENSE< // \nFINDING MY OWN SOUND.",
        year: "2024",
        image: "/silvv3rr.jpg",
        link: "https://soundcloud.com/silvv3rr"
    },
    {
        id: 4,
        title: "𝕷𝖎𝖈𝖍𝖙",
        category: "Alter Ego",
        description: "HOPEFUL NOISE. EXPERIMENTAL SOUNDSCAPES.",
        year: "2026",
        image: "/licht.jpg",
        link: "https://soundcloud.com/licht01"
    }
];

export function CreativeLab() {
    const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

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
                        <div
                            key={project.id}
                            className="relative w-[85vw] md:w-[600px] h-[75vh] flex-shrink-0 flex flex-col p-8 md:p-12 border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/80 transition-all duration-300 group"
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

                            {/* Card Middle: Image/Video Container */}
                            <div className="w-full aspect-video bg-neutral-900 mb-8 overflow-hidden relative border border-white/5">
                                {activeVideoId === project.id && project.embedUrl ? (
                                    <div className="absolute inset-0 z-20">
                                        <iframe
                                            src={`${project.embedUrl}?autoplay=1`}
                                            title={project.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                        <button
                                            onClick={() => setActiveVideoId(null)}
                                            className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10 transition-colors z-30"
                                        >
                                            <X className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                                <span className="font-mono text-[8px] uppercase tracking-widest text-white transform -rotate-45">
                                                    INDUSTRIAL_PLACEHOLDER_{project.id}
                                                </span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                        {/* Interaction Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.embedUrl ? (
                                                <button
                                                    onClick={() => setActiveVideoId(project.id)}
                                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                                                >
                                                    <Play className="w-4 h-4 fill-current" />
                                                    Watch Preview
                                                </button>
                                            ) : (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                                                >
                                                    View Project
                                                </a>
                                            )}
                                        </div>

                                        <div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur-md rounded border border-white/10">
                                            <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Card Footer: Typography */}
                            <div className="mt-auto">
                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs md:text-sm text-neutral-500 uppercase tracking-widest leading-relaxed max-w-sm border-l-2 border-white/10 pl-4 whitespace-pre-wrap">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* END removed */}
                </motion.div>
            </div>
        </motion.section>
    );
}
