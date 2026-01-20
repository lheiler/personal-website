"use client";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { NeuralMesh } from "../ui/NeuralMesh";
import { ThreeDPortrait } from "../ui/ThreeDPortrait";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 pb-12 overflow-hidden">
            <NeuralMesh />
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 border-b border-neutral-200 pb-16">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-[0.3em] block mb-6">
                            Project Portfolio — {new Date().getFullYear()}
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-neutral-900 leading-[0.85] mb-8">
                            Lorenz<br />Heiler.
                        </h1>
                        <p className="text-xl md:text-3xl font-light text-neutral-600 leading-relaxed max-w-xl">
                            Bridging <strong className="font-semibold text-neutral-900">mechanistic neuroscience</strong>, <strong className="font-semibold text-neutral-900">scalable systems</strong>, and exploring <span className="italic text-neutral-500">creative direction</span>.
                        </p>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2 flex justify-end">
                        <div className="w-full max-w-lg aspect-[4/5]">
                            <Suspense fallback={
                                <div className="w-full h-full bg-neutral-100 animate-pulse rounded-2xl border border-neutral-200" />
                            }>
                                <ThreeDPortrait
                                    imageSrc="/profile-picture.jpeg"
                                    depthSrc="/profile-depth.png"
                                />
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                    <div>
                        <span className="block text-neutral-900 mb-1">Status</span>
                        MSc Advanced Computing<br />Imperial College London
                    </div>
                    <div>
                        <span className="block text-neutral-900 mb-1">Focus</span>
                        Machine Learning<br />Comp. Neuroscience
                    </div>
                    <div>
                        <span className="block text-neutral-900 mb-1">Location</span>
                        London, UK / Global
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="self-start mt-12 animate-bounce opacity-50"
            >
                <ArrowDown className="w-5 h-5 text-neutral-400" />
            </motion.div>
        </section>
    );
}
