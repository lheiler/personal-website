"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { Terminal, Code2, Bot, Cpu } from "lucide-react";
import { motion } from "framer-motion";

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
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">02 / Engineering</span>
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
                            title="NLP at Katie"
                            description="Pipeline optimization & chunking algorithms for large-scale enterprise data."
                            header={<div className="h-full w-full bg-blue-50/50 flex items-center justify-center font-bold font-mono text-blue-200 text-6xl">NLP</div>}
                            icon={<Terminal className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                        <BentoGridItem
                            title="Core Stack"
                            description="Python, C++, Java, OCaml."
                            header={<div className="h-full w-full bg-neutral-900 flex items-center justify-center"><Code2 className="h-10 w-10 text-white" /></div>}
                            icon={<Code2 className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="AI Sys"
                            description="PyTorch, Custom Architectures."
                            header={<div className="h-full w-full bg-white border border-neutral-100 flex items-center justify-center"><Cpu className="h-10 w-10 text-neutral-900" /></div>}
                            icon={<Cpu className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Robotics"
                            description="Computer Vision & Robot Learning."
                            header={<div className="h-full w-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center"><Bot className="h-10 w-10 text-neutral-900" /></div>}
                            icon={<Bot className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                    </BentoGrid>
                </motion.div>
            </div>
        </section>
    );
}
