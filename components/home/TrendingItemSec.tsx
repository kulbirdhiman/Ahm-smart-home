"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    image: "/remote.png",
    title: "Digital Lock Face",
    desc: "Smart remote lock with advanced face recognition.",
    price: "$150",
    stock: "15 in stock",
    reviews: "5 Reviews",
    weight: "3.2 kg",
    dimension: "20 × 10 × 8 cm",
  },
  {
    id: 2,
    image: "/touch.png",
    title: "Touch Lock Pro",
    desc: "Fingerprint & touch enabled premium door lock.",
    price: "$199",
    stock: "8 in stock",
    reviews: "12 Reviews",
    weight: "4.1 kg",
    dimension: "25 × 12 × 10 cm",
  },
  {
    id: 3,
    image: "/3rd.png",
    title: "3D Face Lock",
    desc: "3D visual recognition smart door lock system.",
    price: "$249",
    stock: "12 in stock",
    reviews: "9 Reviews",
    weight: "4.3 kg",
    dimension: "27.5 × 13 × 12 cm",
  },
  {
    id: 4,
    image: "/3rd.png",
    title: "Card Theft Lock",
    desc: "Code card enabled theft-proof lock solution.",
    price: "$299",
    stock: "6 in stock",
    reviews: "2 Reviews",
    weight: "5.0 kg",
    dimension: "30 × 15 × 14 cm",
  },
];

const SecondC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProduct = () =>
    setActiveIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () =>
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-4 sm:px-10 py-14">
      <h1 className="text-white text-3xl md:text-5xl font-semibold text-center mb-14 tracking-wide">
        Trending Items
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Side - Product Grid */}
        <div className="grid grid-cols-2 gap-8">
          {products.map((prod) => (
            <div
              key={prod.id}
              onClick={() => setActiveIndex(products.indexOf(prod))}
              className="group relative flex flex-col items-center justify-between bg-black rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl max-w-sm mx-auto"
            >
              {/* Wishlist Icon */}
              <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
                ♡
              </button>

              {/* Product Image */}
              <div className="flex items-center justify-center h-48">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  width={180}
                  height={180}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center text-center mt-6 space-y-2">
                <h3 className="text-white text-base font-semibold">
                  {prod.title}
                </h3>
                <p className="text-gray-400 text-xs">{prod.desc}</p>
                <p className="text-white text-lg font-bold">{prod.price}</p>
              </div>

              {/* Buy Now (appears on hover) */}
              <div className="mt-6 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                <button className="w-full bg-white text-black font-semibold py-2 rounded-xl hover:bg-gray-200 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Sliding Showcase */}
        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={products[activeIndex].id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full text-center"
            >
              <Image
                src={products[activeIndex].image}
                alt={products[activeIndex].title}
                width={500}
                height={500}
                className="w-full h-[320px] object-contain drop-shadow-lg"
              />

              <h2 className="mt-6 text-2xl font-bold text-white tracking-wide">
                {products[activeIndex].title}
              </h2>
              <p className="text-gray-400 mt-2">{products[activeIndex].desc}</p>

              <p className="mt-4 text-xl font-bold text-white">
                {products[activeIndex].price}
              </p>

              <button className="mt-6 w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition">
                Add to Cart
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-6 mt-6">
            <button
              onClick={prevProduct}
              className="px-5 py-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
            >
              ◀
            </button>
            <button
              onClick={nextProduct}
              className="px-5 py-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondC;
