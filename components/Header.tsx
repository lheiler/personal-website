"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
    { name: "Home", href: "/" },
    { name: "Research", href: "#research" },
    { name: "Engineering", href: "#engineering" },
    { name: "Creative", href: "#creative" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
                            LH
                        </Link>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors",
                                    pathname === item.href ? "text-gray-900" : ""
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <Link href="/contact" className="text-sm font-medium text-neutral-900 bg-neutral-100 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
