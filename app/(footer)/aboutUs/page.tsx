// app/about/page.tsx
"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl text-center"
            >
                {/* Heading */}
                <h1 className="text-4xl font-bold text-sky-400 mb-6">
                    About <span className="text-white">AHM</span>
                </h1>

                {/* Intro Text */}
                <p className="text-lg text-gray-300 leading-relaxed mb-10">
                    At <span className="text-sky-400 font-semibold">AHM</span>, we are committed to
                    providing top-notch solutions that combine innovation, technology,
                    and customer-focused service. Our mission is to empower businesses
                    and individuals with tools that make everyday tasks easier, smarter,
                    and more efficient.
                </p>

                {/* Mission & Vision Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-gray-900 rounded-2xl shadow-md hover:shadow-sky-400/40 transition">
                        <h2 className="text-2xl font-semibold text-sky-400 mb-3">Our Mission</h2>
                        <p className="text-gray-300">
                            To deliver high-quality, reliable, and innovative solutions that
                            enhance productivity and create real-world impact.
                        </p>
                    </div>

                    <div className="p-6 bg-gray-900 rounded-2xl shadow-md hover:shadow-sky-400/40 transition">
                        <h2 className="text-2xl font-semibold text-sky-400 mb-3">Our Vision</h2>
                        <p className="text-gray-300">
                            To be a global leader in technology-driven services, shaping
                            the future with sustainable and scalable innovations.
                        </p>
                    </div>
                </div>

                {/* Footer Quote */}
                <p className="mt-12 text-sky-300 italic">
                    "Building trust through innovation and excellence."
                </p>
            </motion.div>
        </div>
    );
}
