"use client";

import React from "react";
import Product from "./Product";
import Image from "next/image";
import { Search, SlidersHorizontal } from "lucide-react";

const Showing = () => {
  return (
    <section className="w-full py-12">
      <div className="flex flex-col lg:flex-row gap-10 px-6 sm:px-12 lg:px-20">
        {/* Sidebar */}
        <aside className="lg:w-64 w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6 h-fit">
          <h2 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5" /> Filters
          </h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-white font-medium text-sm mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Smart Locks", "Cameras", "Sensors", "Accessories"].map(
                (cat, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-white transition"
                  >
                    {cat}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="text-white font-medium text-sm mb-3">Price</h3>
            <input
              type="range"
              min="50"
              max="500"
              className="w-full accent-blue-400"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>$50</span>
              <span>$500</span>
            </div>
          </div>

          {/* Availability Filter */}
          <div>
            <h3 className="text-white font-medium text-sm mb-3">Availability</h3>
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" className="accent-blue-500" /> In Stock
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-300 mt-2">
              <input type="checkbox" className="accent-blue-500" /> On Sale
            </label>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center">
            {/* Search */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 w-full sm:w-80 shadow-md focus-within:ring-2 focus-within:ring-blue-400 transition">
              <Search className="text-white w-5 h-5" />
              <input
                type="text"
                placeholder="Search products"
                className="bg-transparent outline-none text-white placeholder-gray-400 w-full text-sm"
              />
            </div>

            {/* Sort Button */}
            <button
              type="button"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-white text-sm font-medium hover:from-gray-600 hover:to-gray-700 transition shadow-md"
            >
              Sort by price
            </button>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/remote.png"
                    height={300}
                    width={200}
                    alt="Digital Lock"
                    className="object-contain w-32 h-32 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Product Details */}
                <div className="px-4 pb-5 text-center">
                  <h3 className="text-white font-medium text-sm sm:text-base">
                    Digital Lock Face
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Secure Smart Lock
                  </p>
                  <p className="text-lg font-semibold text-white mt-2">$150</p>

                  <button className="mt-4 w-full py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showing;
