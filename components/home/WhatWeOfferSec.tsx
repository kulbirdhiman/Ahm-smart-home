"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollBar from "./ScrollableBar";

const stats = [
  { label: "Design", value: 1000 },
  { label: "Happy Customers", value: 2000 },
  { label: "Years", value: 10 },
  { label: "Technicians", value: 250 },
];

const ThirdSec = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const step = Math.ceil(end / (duration / 16));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const copy = [...prev];
          copy[i] = start;
          return copy;
        });
      }, 16);
    });
  }, []);

  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-16 lg:px-20 py-16">
      {/* Scrollable bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ScrollBar />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 mt-16 text-xl sm:text-2xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white/5 backdrop-blur-lg px-8 py-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-gray-300">{stat.label}</p>
            <p className="font-semibold text-3xl sm:text-4xl text-white">
              {counts[i]}+
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ThirdSec;
