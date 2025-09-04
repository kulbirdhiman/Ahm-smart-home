"use client";

import Image from "next/image";
import { useState } from "react";
import BUTTON from "./ButtonComponent"; // Keep your button component

const products = [
  {
    id: 1,
    name: "Smart Remote",
    desc: "Next-gen smart remote with wireless access control.",
    price: "$199",
    image: "/remote.png",
  },
  {
    id: 2,
    name: "Touch Panel",
    desc: "Elegant touch panel for seamless door control.",
    price: "$249",
    image: "/touch.png",
  },
  {
    id: 3,
    name: "Biometric Scanner",
    desc: "High-security biometric access system.",
    price: "$299",
    image: "/3rd.png",
  },
  {
    id: 4,
    name: "Smart Lock",
    desc: "Durable smart lock with encrypted technology.",
    price: "$349",
    image: "/touch.png",
  },
];

const AccessControlShowcase = () => {
  const [selected, setSelected] = useState(products[0]);

  return (
    <section className="w-full bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* -------- LEFT (Product Info + Buttons) -------- */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            {selected.name}
          </h2>
          <p className="text-gray-300 text-lg max-w-lg mx-auto md:mx-0">
            {selected.desc}
          </p>
          <p className="text-sky-400 text-2xl font-bold">{selected.price}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <BUTTON text="View More" Click={() => alert("View more")} />
            <BUTTON text="Shop Now" Click={() => alert("Shop now")} />
          </div>
        </div>

        {/* -------- RIGHT (Main Product Image + Hover Thumbnails) -------- */}
        <div className="flex-1 flex flex-col items-center">
          {/* Main Image */}
          <div className="relative p-6">
            <div className="absolute inset-0 blur-3xl bg-sky-500/20 rounded-full"></div>
            <Image
              src={selected.image}
              alt={selected.name}
              width={400}
              height={400}
              className="relative object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-6 mt-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`w-[80px] h-[100px] flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${
                  selected.id === product.id
                    ? "ring-2 ring-sky-400 scale-105"
                    : "hover:ring-2 hover:ring-sky-300 hover:scale-105"
                }`}
                onMouseEnter={() => setSelected(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessControlShowcase;
