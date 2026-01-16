"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { Music, Globe, Video, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CreativeLab() {
    return (
        <section id="creative" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-4"
                >
                    <div className="flex flex-col">
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">03 / Creative Lab</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mt-2">
                            Selected Works
                        </h2>
                    </div>
                    <p className="mt-4 md:mt-0 text-lg font-light text-neutral-500 italic">
                        "Where logic meets intuition."
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <BentoGrid className="max-w-7xl mx-auto">
                        <BentoGridItem
                            title="Collective"
                            description="Co-founder. Audio-visual experiences & music curation."
                            header={<div className="h-full w-full bg-neutral-900 flex items-center justify-center text-white font-bold font-mono text-4xl tracking-tighter">XYZ</div>}
                            icon={<Music className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                        <BentoGridItem
                            title="Global"
                            description="Vancouver / Hong Kong / Zurich."
                            header={<div className="h-full w-full bg-neutral-100 flex items-center justify-center"><Globe className="h-10 w-10 text-neutral-900" /></div>}
                            icon={<Globe className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Production"
                            description="Ableton Live, Filmmaking, Fashion."
                            header={<div className="h-full w-full bg-neutral-100 flex items-center justify-center"><Video className="h-10 w-10 text-neutral-900" /></div>}
                            icon={<Palette className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Vision"
                            description="Foresight at the intersection of science & art."
                            header={<div className="h-full w-full bg-blue-600 flex items-center justify-center"><span className="font-sans font-medium text-2xl text-white p-4 text-center tracking-tight">Inspiration</span></div>}
                            icon={<Sparkles className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                    </BentoGrid>
                </motion.div>
            </div>
        </section>
    );
}
