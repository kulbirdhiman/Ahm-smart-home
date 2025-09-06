// app/report-issue/page.tsx
"use client";
import { motion } from "framer-motion";
import { Bug, Mail } from "lucide-react";

export default function ReportIssuePage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-6 py-16">
            {/* Futuristic glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full blur-3xl opacity-25 bg-sky-400/40" />
                <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 bg-sky-300/40" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-3xl w-full text-center"
            >
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                    <span className="text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">Report</span>{" "}
                    <span className="text-white">an Issue</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 mb-10">
                    Facing a problem or bug? Fill out the form below to report an issue and our support team will get back to you promptly.
                </p>

                {/* Report Issue Form */}
                <form className="mx-auto bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.3)] p-8 space-y-6 text-left border border-gray-700 transition-all hover:border-sky-400/60 max-w-lg">
                    <div>
                        <label className="block text-sky-400 font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:border-sky-400 focus:ring focus:ring-sky-500/30 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sky-400 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:border-sky-400 focus:ring focus:ring-sky-500/30 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sky-400 font-medium mb-2">Issue Title</label>
                        <input
                            type="text"
                            placeholder="Brief title of the issue"
                            className="w-full p-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:border-sky-400 focus:ring focus:ring-sky-500/30 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sky-400 font-medium mb-2">Description</label>
                        <textarea
                            rows={5}
                            placeholder="Describe the issue in detail..."
                            className="w-full p-3 rounded-lg bg-black text-gray-200 border border-gray-700 focus:border-sky-400 focus:ring focus:ring-sky-500/30 outline-none transition"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                    >
                        Submit Issue
                    </button>
                </form>

                {/* Extra Info */}
                <div className="mt-10 text-gray-400 space-y-2 text-center">
                    <p className="flex items-center justify-center gap-2"><Mail className="h-5 w-5 text-sky-400" /> Support: support@ahm.com</p>
                    <p className="flex items-center justify-center gap-2"><Bug className="h-5 w-5 text-sky-400" /> Response within 24-48 hours</p>
                </div>
            </motion.div>
        </div>
    );
}
