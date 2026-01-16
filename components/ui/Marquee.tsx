"use client";
import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({ text }: { text: string }) => {
    return (
        <div className="w-full overflow-hidden py-4 bg-neutral-900">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                }}
            >
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className="text-neutral-400/80 font-mono text-xs uppercase tracking-widest mr-16"
                    >
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
