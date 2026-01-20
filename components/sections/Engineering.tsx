"use client";
import React, { useState, useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { Terminal, Code2, Bot, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const WiredGrid = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-black/98"
        >
            {/* Optimized Schematic Grid Layer - Softer Opacity */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(6,182,212,0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(6,182,212,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Static Crosshair Field - Half Intensity */}
            <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] grid-rows-[repeat(auto-fill,minmax(80px,1fr))] p-4 opacity-15">
                {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="relative flex items-center justify-center">
                        <div className="w-[1px] h-[8px] bg-cyan-500/50 absolute" />
                        <div className="w-[8px] h-[1px] bg-cyan-500/50 absolute" />
                    </div>
                ))}
            </div>

            {/* Principal Sonar Sweep - Decelerated to 8s */}
            <motion.div
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-cyan-500/60 z-30 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
            >
                {/* Sonar Glow Trailing - Softer Gradient */}
                <div className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-t from-cyan-500/10 to-transparent -translate-y-full" />
            </motion.div>

            {/* Ambient Vertical Scanline - Slower (25s) */}
            <motion.div
                animate={{ y: ["-100%", "250%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"
            />

            {/* Horizontal Sweep - Slower (35s) */}
            <motion.div
                animate={{ x: ["-120%", "220%"] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-[500px] bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent skew-x-12 pointer-events-none"
            />
        </div>
    );
};

export function Engineering() {
    return (
        <section id="engineering" className="py-24 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-4"
                >
                    <div className="flex flex-col">
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">02 / Machine Learning / AI</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mt-2">
                            Technical Work
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <BentoGrid className="max-w-7xl mx-auto">
                        <BentoGridItem
                            title="Exchange Semester at HKUST"
                            description="Game Design, Quantum Computing"
                            header={
                                <a
                                    href="https://hkust.edu.hk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full w-full overflow-hidden rounded-xl group/link"
                                >
                                    <img
                                        src="/hong-kong-city-skyline-victoria-peak-cityscape-daytime-3840x2160-3947.jpg"
                                        alt="HKUST Exchange"
                                        className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out group-hover/bento:grayscale-0 group-hover/link:scale-105"
                                    />
                                </a>
                            }
                            icon={<Terminal className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                        <BentoGridItem
                            title="Personal Website Architecture"
                            description="This website. Engineered with Next.js & Framer Motion for high-fidelity interaction."
                            header={
                                <div className="h-full w-full bg-neutral-900 flex flex-col items-center justify-center p-6 border-b border-white/5 group/site">
                                    <Code2 className="h-10 w-10 text-white mb-4 group-hover/site:scale-110 transition-transform" />
                                    <a
                                        href="https://github.com/lheiler/personal-website"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-mono text-blue-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
                                    >
                                        [ View Repository ]
                                    </a>
                                </div>
                            }
                            icon={<Code2 className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="IT specialist at hmb Partners AG"
                            description="data solutions, etc"
                            header={
                                <a
                                    href="https://www.hmb-partners.ch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full w-full overflow-hidden rounded-xl bg-white flex items-center justify-center p-6 border border-neutral-100 group/link"
                                >
                                    <img
                                        src="/hmb_logo.png"
                                        alt="hmb Partners AG"
                                        className="max-h-full max-w-full object-contain grayscale transition-all duration-1000 ease-out group-hover/bento:grayscale-0 group-hover/link:scale-110"
                                    />
                                </a>
                            }
                            icon={<Bot className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="NLP Internship at Katie"
                            description="Pipeline optimization & chunking algorithms for large-scale enterprise data."
                            header={
                                <a
                                    href="https://katie.qa/home"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full w-full overflow-hidden rounded-xl group/link"
                                >
                                    <img
                                        src="/katie_internship.jpg"
                                        alt="NLP Internship"
                                        className="h-full w-full object-cover object-top grayscale transition-all duration-1000 ease-out group-hover/bento:grayscale-0 group-hover/link:scale-105"
                                    />
                                </a>
                            }
                            icon={<Cpu className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                    </BentoGrid>
                </motion.div>

                {/* Technical Capabilities / Control Center */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    data-header-theme="dark"
                    className="mt-24 p-8 rounded-2xl bg-neutral-900 border border-white/5 relative overflow-hidden group"
                >
                    {/* Character Accents / SWAG */}
                    <div className="absolute top-4 left-4 font-mono text-[14px] text-white/20 select-none">+</div>
                    <div className="absolute top-4 right-4 font-mono text-[14px] text-white/20 select-none">+</div>
                    <div className="absolute bottom-4 left-4 font-mono text-[14px] text-white/20 select-none">+</div>
                    <div className="absolute bottom-4 right-4 font-mono text-[14px] text-white/20 select-none">+</div>

                    {/* Animated Terminal Background */}
                    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-20">
                        {/* Sonar / Radar Pulse */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 2.5, opacity: [0, 0.1, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/30 rounded-full"
                        />

                        {/* Dim Neon Surge Animation (Scales) */}
                        <WiredGrid />

                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                            <div>
                                <h3 className="text-2xl font-black text-white tracking-tighter uppercase mb-2">+ Technical Capabilities +</h3>
                                <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.3em]">Layer 01: Skills // Trying to find <em className="italic">The Wired</em></p>
                            </div>
                            <div className="flex gap-4">
                                <div className="px-4 py-2 bg-white/5 rounded border border-white/10 relative">
                                    <div className="absolute -top-[1px] left-4 right-4 h-[1px] bg-blue-500/50" />
                                    <span className="text-[10px] font-mono text-blue-400 block mb-1 uppercase">[ Languages ]</span>
                                    <span className="text-sm font-bold text-white uppercase tracking-tight">Ger_Native  //  Eng_C1-2</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {/* Fluent Languages */}
                            <div>
                                <h4 className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">+ Fluent +</h4>
                                <div className="space-y-4">
                                    {["Java", "C", "C++", "Python", "OCaml"].map((lang) => (
                                        <div key={lang} className="flex items-center justify-between group/lang cursor-default">
                                            <span className="text-white font-bold tracking-tight group-hover/lang:text-blue-400 transition-colors uppercase">
                                                <span className="text-blue-500 mr-2 opacity-50 group-hover:opacity-100 transition-opacity">&gt;</span>
                                                {lang}
                                            </span>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} className="h-1 w-3 bg-blue-500 rounded-full" />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Proficient / Specialized */}
                            <div>
                                <h4 className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">+ Specialized +</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between group/lang cursor-default">
                                        <span className="text-white font-bold tracking-tight group-hover/lang:text-blue-400 transition-colors uppercase">
                                            <span className="text-blue-500 mr-2 opacity-50 group-hover:opacity-100 transition-opacity">&gt;</span>
                                            Swift
                                        </span>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className={`h-1 w-3 ${i < 4 ? 'bg-blue-500' : 'bg-white/10'} rounded-full`} />
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-neutral-500 uppercase mt-2 block">App Development Focus</span>
                                </div>
                            </div>

                            {/* Toolset */}
                            <div>
                                <h4 className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">+ Toolset +</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Unreal Engine", "GitHub", "Ableton Live", "Microsoft Office"].map((tool) => (
                                        <div key={tool} className="px-3 py-1.5 bg-white/5 rounded border border-white/10 text-xs font-mono text-white/60 hover:text-white hover:border-white/30 transition-all cursor-default uppercase">
                                            {tool}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
