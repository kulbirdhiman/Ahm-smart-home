import React, { useState, useEffect } from "react";
import Image from "next/image";
import IconProfile from "./IconProfile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // ✅ Auto-close mobile menu when resizing back to desktop
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) {
            setMenuOpen(false);
        }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="w-full px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
            <Image
                src="/Ahm_logo.png"
                height={120}
                width={120}
                alt="logo"
                className="w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px] h-auto"
            />
            </div>

            {/* Desktop Menu (md and up) */}
            <div className="hidden md:flex space-x-6 font-medium text-base lg:text-lg">
            <a
                href="#"
                className="hover:text-sky-400 hover:scale-110 transition-transform"
            >
                Home
            </a>
            <a
                href="#"
                className="hover:text-sky-400 hover:scale-110 transition-transform"
            >
                About
            </a>
            <a
                href="#"
                className="hover:text-sky-400 hover:scale-110 transition-transform"
            >
                Shop
            </a>
            <a
                href="#"
                className="hover:text-sky-400 hover:scale-110 transition-transform"
            >
                Contact
            </a>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4 relative">
            {/* Profile Icon (only desktop) */}
            <div className="hidden md:block">
                <IconProfile />
            </div>

            {/* Hamburger (mobile only) */}
            <button
                className="md:hidden text-gray-300 hover:text-sky-400 transition-transform transform hover:rotate-90"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="absolute right-0 top-12 w-[180px] sm:w-[200px] bg-[#2A2625] rounded-xl p-4 flex flex-col text-left text-sm sm:text-base font-medium shadow-lg animate-slideDown md:hidden">
                <a
                    href="#"
                    className="hover:text-sky-400 hover:scale-105 transition-transform"
                >
                    🏠 Home
                </a>
                <a
                    href="#"
                    className="hover:text-sky-400 hover:scale-105 transition-transform"
                >
                    ℹ️ About
                </a>
                <a
                    href="#"
                    className="hover:text-sky-400 hover:scale-105 transition-transform"
                >
                    🛍️ Shop
                </a>
                <a
                    href="#"
                    className="hover:text-sky-400 hover:scale-105 transition-transform"
                >
                    📞 Contact
                </a>
                <a
                    href="#"
                    className="hover:text-sky-400 hover:scale-105 transition-transform"
                >
                    👤 Profile
                </a>
                </div>
            )}
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
