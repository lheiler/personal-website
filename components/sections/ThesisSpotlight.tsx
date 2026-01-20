"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Cpu, Database, X, FileText, Download, ExternalLink } from "lucide-react";

export function ThesisSpotlight() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-24 bg-white border-y border-neutral-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                    >
                        {/* Content Side */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                                    Master Thesis Spotlight // Imperial College
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-900 mb-8 leading-[0.9]">
                                Evaluating Computational Brain Models as Dimensionality Reduction Methods for EEG.
                            </h2>

                            <p className="text-xl text-neutral-500 font-light leading-relaxed max-w-2xl mb-12">
                                A deep dive into <strong className="text-neutral-900 border-b-2 border-blue-100">computational neurodynamics</strong> and <strong className="text-neutral-900 border-b-2 border-blue-100">machine learning</strong>. Benchmarking mechanistic vs. data-driven models to compress neural signals with higher precision and interpretability. Supervised by <a href="https://pmediano.gitlab.io/" target="_blank" rel="noopener noreferrer" className="text-neutral-900 border-b border-neutral-300 hover:border-blue-500 transition-colors">Dr. Pedro Mediano</a> and <a href="https://profiles.imperial.ac.uk/gregory.scott99" target="_blank" rel="noopener noreferrer" className="text-neutral-900 border-b border-neutral-300 hover:border-blue-500 transition-colors">Dr. Gregory Scott</a>.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-t border-neutral-100">
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-lg bg-neutral-50 flex items-center justify-center">
                                        <Brain className="w-5 h-5 text-neutral-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-neutral-900 mb-1 uppercase tracking-tight">Focus</h4>
                                        <p className="text-xs text-neutral-500 font-mono">Computational Neurodynamics & ML Systems</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-lg bg-neutral-50 flex items-center justify-center">
                                        <Database className="w-5 h-5 text-neutral-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-neutral-900 mb-1 uppercase tracking-tight">Findings</h4>
                                        <p className="text-xs text-neutral-500 font-mono">Hybrid models have the potential to combine the interpretability of mechanistic models with the performance of data-driven models.</p>
                                    </div>
                                </div>
                            </div>

                            <motion.a
                                href="https://github.com/lheiler/msc_thesis"
                                target="_blank"
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center gap-4 text-xs font-mono font-bold tracking-widest uppercase text-neutral-900 mt-8 group"
                            >
                                Explore Github Repository
                                <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-blue-500 transition-colors" />
                            </motion.a>
                        </div>

                        {/* Visual Side / Document Representation */}
                        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center">
                            {/* Background stack effect */}
                            <div className="absolute inset-0 bg-neutral-100/50 rounded-2xl rotate-3 scale-95 origin-bottom-right translate-x-4" />
                            <div className="absolute inset-0 bg-neutral-50 rounded-2xl -rotate-2 scale-98 origin-bottom-left -translate-x-2" />

                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 0 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                onClick={() => setIsOpen(true)}
                                className="relative w-full h-full border border-neutral-200 rounded-xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden group/doc cursor-zoom-in"
                            >
                                <img
                                    src="/thesis_front.png"
                                    alt="Master Thesis Title Page"
                                    className="w-full h-full object-contain p-4 bg-white"
                                />

                                {/* Ambient Lighting Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none" />

                                {/* Interactive Badge */}
                                <div className="absolute bottom-8 left-8 right-8 p-4 bg-white/90 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg flex justify-between items-center transform translate-y-4 opacity-0 group-hover/doc:translate-y-0 group-hover/doc:opacity-100 transition-all duration-500 scale-95 group-hover/doc:scale-100">
                                    <div className="flex flex-col">
                                        <span className="font-mono text-[10px] text-blue-600 font-bold tracking-widest uppercase mb-1">Interactive Reader</span>
                                        <span className="text-[9px] font-mono text-neutral-400 uppercase">Click to read the full thesis</span>
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center group-hover/doc:bg-blue-600 transition-colors duration-300">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Reader Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
                    >
                        {/* Close Trigger (Background) */}
                        <div
                            className="absolute inset-0"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl h-full bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:px-8 border-b border-white/5 bg-neutral-900/50 backdrop-blur-md">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm tracking-tight uppercase">Master_Thesis_Lorenz_Heiler</h3>
                                        <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Imperial College London // 2025</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="/final_report.pdf"
                                        download
                                        className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-all"
                                        title="Download PDF"
                                    >
                                        <Download className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-all"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* PDF Viewer Container */}
                            <div className="flex-1 bg-neutral-800 relative">
                                <iframe
                                    src="/final_report.pdf#toolbar=1&navpanes=0"
                                    className="w-full h-full border-none"
                                    title="Thesis Reader"
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 md:px-8 bg-neutral-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-white/5">
                                <div className="flex items-center gap-6">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-mono text-neutral-500 uppercase">Status</span>
                                        <span className="text-xs font-bold text-green-400 uppercase flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                            Online_Archive
                                        </span>
                                    </div>
                                    <div className="h-8 w-px bg-white/5 hidden md:block" />
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-mono text-neutral-500 uppercase">Pages</span>
                                        <span className="text-xs font-bold text-white uppercase">78 Pages</span>
                                    </div>
                                </div>

                                <a
                                    href="https://github.com/lheiler/msc_thesis"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400 hover:text-blue-400 transition-colors"
                                >
                                    Source Code
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
