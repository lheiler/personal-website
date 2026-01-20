"use client";
import React from "react";
import { ArrowDown } from "lucide-react";

export function ContactManifesto() {
    return (
        <section className="relative bg-white py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">

                {/* Left Column: Context */}
                <div className="flex-1 space-y-12">
                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-4">
                            Currently
                        </span>
                        <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed max-w-md">
                            Currently working on transitioning my <strong className="font-medium text-neutral-900">Master's thesis</strong> at Imperial College into a formal publication.
                        </p>
                    </div>

                    <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-4">
                            Open For
                        </span>
                        <ul className="text-lg text-neutral-600 space-y-2 font-light">
                            <li>Large-Scale AI Implementation</li>
                            <li>R&D (AI/ML & Comp Neuro)</li>
                            <li>Computational Medicine & Neurotech</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Actions */}
                <div className="flex-1 w-full flex flex-col items-start md:items-end text-left md:text-right space-y-12">

                    {/* CV Download - Editorial Button Style */}
                    <a
                        href="/cv_lorenz_heiler.pdf"
                        target="_blank"
                        className="group flex items-center gap-3 text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
                    >
                        <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white transition-all duration-300">
                            <ArrowDown className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest">
                            Download Résumé (PDF)
                        </span>
                    </a>

                    {/* Massive Email Anchor */}
                    <div className="w-full">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-6 md:text-right">
                            Initiate Contact
                        </span>
                        <a
                            href="mailto:lheiler@me.com"
                            className="block text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-900 hover:text-red-500 transition-colors duration-300 break-words leading-[0.85]"
                        >
                            lheiler@me.com
                        </a>
                    </div>

                    <div className="pt-12 md:pt-24 w-full flex flex-col md:flex-row justify-between items-center md:items-end border-t border-neutral-100 mt-12 gap-6">
                        <span className="font-mono text-[10px] text-neutral-400">
                            © {new Date().getFullYear()} Lorenz Heiler. All rights reserved.
                        </span>
                        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                            <a
                                href="https://www.linkedin.com/in/lorenz-heiler-907877216/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-4 decoration-1 transition-all"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/lheiler"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-4 decoration-1 transition-all"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
