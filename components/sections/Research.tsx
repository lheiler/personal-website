"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Research() {
    return (
        <section id="research" className="py-24 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-4"
                >
                    <div className="flex flex-col">
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">01 / Research</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mt-2">
                            Academic Work
                        </h2>
                    </div>
                    <p className="font-mono text-xs text-neutral-400 mt-4 md:mt-0 uppercase tracking-widest">
                        2023 — Present
                    </p>
                </motion.div>

                <div className="flex flex-col space-y-4">
                    {/* Master's Thesis */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-t border-neutral-200 hover:bg-white hover:shadow-sm transition-all p-4 rounded-lg cursor-pointer items-start"
                    >
                        <div className="md:col-span-2 font-mono text-xs text-neutral-400 uppercase tracking-wider pt-2">
                            Imperial College
                        </div>
                        <div className="md:col-span-8">
                            <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                Evaluating Computational Brain Models
                            </h3>
                            <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
                                Benchmarking mechanistic vs. data-driven methods for EEG dimensionality reduction. Exploring hybrid deep learning approaches.
                            </p>
                        </div>
                        <div className="md:col-span-2 flex justify-end pt-2">
                            <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-blue-600 group-hover:rotate-45 transition-all duration-300" />
                        </div>
                    </motion.div>

                    {/* Bachelor's Thesis */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-t border-neutral-200 hover:bg-white hover:shadow-sm transition-all p-4 rounded-lg cursor-pointer items-start"
                    >
                        <div className="md:col-span-2 font-mono text-xs text-neutral-400 uppercase tracking-wider pt-2">
                            ETH Zürich
                        </div>
                        <div className="md:col-span-8">
                            <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                Image to Image Alignment with 3D Priors
                            </h3>
                            <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
                                3D face reconstruction and illumination matching under Prof. Markus Gross. Improving alignment accuracy in challenging conditions.
                            </p>
                        </div>
                        <div className="md:col-span-2 flex justify-end pt-2">
                            <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-blue-600 group-hover:rotate-45 transition-all duration-300" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
