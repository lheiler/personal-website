"use client";
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const contactMethods = [
    {
        name: "Email",
        value: "lheiler@me.com",
        href: "mailto:lheiler@me.com",
        icon: <Mail className="w-6 h-6" />,
    },
    {
        name: "LinkedIn",
        value: "Lorenz Heiler",
        href: "https://www.linkedin.com/in/lorenzheiler",
        icon: <Linkedin className="w-6 h-6" />,
    },
    {
        name: "GitHub",
        value: "lheiler",
        href: "https://github.com/lheiler",
        icon: <Github className="w-6 h-6" />,
    },
    {
        name: "X / Twitter",
        value: "@lheiler",
        href: "https://x.com/lheiler",
        icon: <Twitter className="w-6 h-6" />,
    },
];

export default function Contact() {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col justify-between">
            <Header />

            <section className="flex-grow flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 border-b border-neutral-200 pb-8"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-4">
                        Get in Touch
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 leading-tight">
                        Contact.
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    <div className="font-light text-xl text-neutral-600 leading-relaxed">
                        <p className="mb-8">
                            Currently open for collaborations in <strong className="font-semibold text-neutral-900">computational neuroscience</strong>, <strong className="font-semibold text-neutral-900">scalable systems</strong>, and <strong className="font-semibold text-neutral-900">creative direction</strong>.
                        </p>
                        <p>
                            Based in London, UK.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index + 0.3 }}
                            >
                                <Link
                                    href={method.href}
                                    target="_blank"
                                    className="group flex items-center justify-between p-6 bg-white border border-neutral-200 hover:border-blue-600 transition-colors rounded-lg"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="text-neutral-500 group-hover:text-blue-600 transition-colors">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <span className="block font-sans font-bold text-neutral-900">{method.name}</span>
                                            <span className="block font-mono text-xs text-neutral-500">{method.value}</span>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-blue-600 group-hover:rotate-45 transition-all duration-300" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
