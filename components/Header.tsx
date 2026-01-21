"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/#research" },
    { name: "Experience", href: "/#experience" },
    { name: "Music", href: "/#music" },
];

export function Header() {
    const pathname = usePathname();
    const [isDark, setIsDark] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("");

    React.useEffect(() => {
        const darkIntersectingSections = new Set<Element>();

        // Theme Observer
        const themeObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        darkIntersectingSections.add(entry.target);
                    } else {
                        darkIntersectingSections.delete(entry.target);
                    }
                });
                setIsDark(darkIntersectingSections.size > 0);
            },
            {
                rootMargin: "0px 0px -98% 0px", // Extremely tight margin at the very top
                threshold: 0
            }
        );

        // Scroll Spy Observer
        const spyObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0
            }
        );

        // Initial collection and observing
        const darkSections = document.querySelectorAll('[data-header-theme="dark"]');
        darkSections.forEach(section => themeObserver.observe(section));

        const scrollSections = document.querySelectorAll('section[id]');
        scrollSections.forEach(section => spyObserver.observe(section));

        return () => {
            themeObserver.disconnect();
            spyObserver.disconnect();
        };
    }, []);

    const isActive = (href: string) => {
        if (href === "/" && activeSection === "home") return true;
        const id = href.split("#")[1];
        return id === activeSection;
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 border-b",
                isDark
                    ? "bg-black/20 backdrop-blur-xl border-white/10"
                    : "bg-white/80 backdrop-blur-md border-gray-100"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className={cn(
                                "text-xl font-bold tracking-tight transition-colors duration-500",
                                isDark ? "text-white" : "text-gray-900"
                            )}
                        >
                            LH
                        </Link>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-[12px] font-semibold uppercase tracking-[0.25em] transition-all duration-500",
                                    isDark
                                        ? "text-white/40 hover:text-white"
                                        : "text-gray-400 hover:text-gray-900",
                                    isActive(item.href) && (isDark ? "text-white" : "text-gray-900")
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <Link
                                href="/contact"
                                className={cn(
                                    "group relative px-6 py-2 transition-all duration-300",
                                    isDark ? "text-white" : "text-neutral-900"
                                )}
                            >
                                {/* The 'Off-axis' Frame */}
                                <div className={cn(
                                    "absolute inset-0 border transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1",
                                    isDark ? "border-white/20" : "border-neutral-900/20"
                                )} />

                                <div className={cn(
                                    "absolute inset-0 border group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300 flex items-center justify-center",
                                    isDark
                                        ? "border-white bg-transparent"
                                        : "border-neutral-900 bg-white"
                                )} />

                                <div className="relative flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-white">
                                    <span className={cn(
                                        "h-1.5 w-1.5 rounded-full animate-pulse",
                                        isDark ? "bg-white" : "bg-neutral-900"
                                    )} />
                                    [Contact]
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
