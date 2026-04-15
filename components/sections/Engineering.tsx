"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";


export function Engineering() {
    return (
        <section id="experience" className="py-24 bg-neutral-50">
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
                            description="Game Design. Quantum Computing. Principles of Cybersecurity."
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
                            icon={<Code2 className="h-5 w-5 text-neutral-500" />}
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
                            description="Data management/backup. Compatibility checks for new software. SharePoint Administration."
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
                            icon={<Code2 className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="NLP Internship at Katie"
                            description="Research on chunking algorithms. Development of a full data-pipeline for model performance including data collection, data preprocessing and evaluation."
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
                            icon={<Code2 className="h-5 w-5 text-neutral-500" />}
                            className="md:col-span-2"
                        />
                    </BentoGrid>
                </motion.div>

            </div>
        </section>
    );
}
