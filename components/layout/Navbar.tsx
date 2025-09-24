"use client";

import React, { useState } from "react";
import { Menu, X, ShoppingBag, Heart, User } from "lucide-react";
import Link from "next/link";
import { useGetCategoriesQuery } from "@/store/api/categorey";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Fetch categories
  const { data, isLoading } = useGetCategoriesQuery({});
  const categories = data?.data

  return (
    <nav className="top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl">
          AHM
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-200 text-sm">
          {isLoading ? (
            <span className="text-gray-400">Loading...</span>
          ) : (
            categories?.map((cat: any) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="hover:text-white transition"
              >
                {cat.name}
              </Link>
            ))
          )}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 text-gray-200">
          <button aria-label="icons" className="hover:text-white transition">
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="icons" className="hover:text-white transition">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button aria-label="icons" className="hover:text-white transition">
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
          {isLoading ? (
            <span className="text-gray-400">Loading...</span>
          ) : (
            categories?.map((cat: any) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
