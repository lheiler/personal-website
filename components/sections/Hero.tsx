"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { NeuralMesh } from "../ui/NeuralMesh";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 pb-12 overflow-hidden">
            <NeuralMesh />
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16 border-b border-neutral-200 pb-16">
                    <div className="order-2 md:order-1">
                        <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
                            Research & Engineering
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-[0.9]">
                            Lorenz<br />Heiler.
                        </h1>
                    </div>
                    <div className="order-1 md:order-2 flex flex-col justify-end h-full">
                        <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed max-w-md ml-auto text-right md:text-left">
                            Bridging <strong className="font-semibold text-neutral-900">mechanistic neuroscience</strong>, <strong className="font-semibold text-neutral-900">scalable systems</strong>, and <span className="italic text-neutral-500">creative direction</span>.
                        </p>
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
