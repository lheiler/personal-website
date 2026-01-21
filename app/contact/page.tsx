"use client";
import React from "react";
import { Header } from "@/components/Header";
import { ContactManifesto } from "@/components/sections/ContactManifesto";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

const SoundcloudIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z" />
    </svg>
);

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
        href: "https://www.linkedin.com/in/lorenz-heiler-907877216/",
        icon: <Linkedin className="w-6 h-6" />,
    },
    {
        name: "GitHub",
        value: "lheiler",
        href: "https://github.com/lheiler",
        icon: <Github className="w-6 h-6" />,
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
                        <p>
                            Always curious, always open. Reach out for collaborations, inquiries, or just to exchange ideas.
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
                                <a
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactManifesto />
        </main>
    );
}
