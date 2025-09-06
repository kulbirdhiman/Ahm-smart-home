"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingBag, Heart, User } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Store", "Mac", "iPad", "iPhone", "Watch", "Accessories", "Support"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-white font-bold text-xl">AHM</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-200 text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 text-gray-200">
          <button className="hover:text-white transition">
            <Heart className="w-5 h-5" />
          </button>
          <button className="hover:text-white transition">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="hover:text-white transition">
            <User className="w-5 h-5" />
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-gray-200 flex flex-col space-y-4 px-6 py-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
