"use client";

import React from "react";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <section className="w-full py-20 px-6 flex items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full  rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-center py-14 px-6 sm:px-12"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Join Our Newsletter
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl mx-auto">
          Be the first to know about our latest products, exclusive offers, and
          upcoming events. Inspiration straight to your inbox.
        </p>

        {/* Form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinUs;
