import React from "react";

export function Footer() {
    return (
        <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100 bg-gray-50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light font-sand">
                <div className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Lorenz Heiler. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    <a href="mailto:lheiler@me.com" className="hover:text-black transition-colors">
                        lheiler@me.com
                    </a>
                    <a href="#" className="hover:text-black transition-colors">
                        LinkedIn
                    </a>
                    <a href="#" className="hover:text-black transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
