"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { id: 1, image: "/remote.png", title: "Digital Lock Face", desc: "Smart remote lock with advanced face recognition.", price: "$150" },
  { id: 2, image: "/touch.png", title: "Touch Lock Pro", desc: "Fingerprint & touch enabled premium door lock.", price: "$199" },
  { id: 3, image: "/3rd.png", title: "3D Face Lock", desc: "3D visual recognition smart door lock system.", price: "$249" },
  { id: 4, image: "/3rd.png", title: "Card Theft Lock", desc: "Code card enabled theft-proof lock solution.", price: "$299" },
];

const TrendingItems = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProduct = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () => setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-4 sm:px-10 py-14">
      <h1 className="text-white text-3xl md:text-5xl font-semibold text-center mb-14 tracking-wide">Trending Items</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Grid */}
        <div className="grid grid-cols-2 gap-8">
          {products.map((prod, index) => (
            <motion.div
              key={prod.id}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`group relative flex flex-col items-center justify-between bg-black rounded-2xl p-6 shadow-lg max-w-sm mx-auto cursor-pointer ${
                activeIndex === index ? "ring-2 ring-sky-400" : ""
              }`}
            >
              {/* Wishlist */}
              <motion.button whileHover={{ scale: 1.3 }} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">♡</motion.button>

              {/* Image */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-center justify-center h-48">
                <Image src={prod.image} alt={prod.title} width={180} height={180} className="object-contain transition-transform duration-500" />
              </motion.div>

              {/* Info */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center text-center mt-6 space-y-2">
                <h3 className="text-white text-base font-semibold">{prod.title}</h3>
                <p className="text-gray-400 text-xs">{prod.desc}</p>
                <p className="text-white text-lg font-bold">{prod.price}</p>
              </motion.div>

              {/* Buy Now */}
              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="mt-6 w-full opacity-0 group-hover:opacity-100 transition duration-500">
                <button className="w-full bg-white text-black font-semibold py-2 rounded-xl hover:bg-gray-200 transition">Buy Now</button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right Showcase */}
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
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
                <Image src={products[activeIndex].image} alt={products[activeIndex].title} width={500} height={500} className="w-full h-[320px] object-contain drop-shadow-lg" />
              </motion.div>

              <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="mt-6 text-2xl font-bold text-white tracking-wide">
                {products[activeIndex].title}
              </motion.h2>

              <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-400 mt-2">
                {products[activeIndex].desc}
              </motion.p>

              <motion.p initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4 text-xl font-bold text-white">
                {products[activeIndex].price}
              </motion.p>

              <motion.button whileHover={{ scale: 1.05 }} className="mt-6 w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition">
                Add to Cart
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-6 mt-6">
            <motion.button whileHover={{ scale: 1.2 }} onClick={prevProduct} className="px-5 py-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition">◀</motion.button>
            <motion.button whileHover={{ scale: 1.2 }} onClick={nextProduct} className="px-5 py-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition">▶</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItems;
