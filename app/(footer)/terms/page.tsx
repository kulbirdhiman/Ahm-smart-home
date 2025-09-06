// app/terms/page.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, FileText, ShieldCheck, Lock, RefreshCw, BookOpen } from "lucide-react";

export default function TermsPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const terms = [
        {
            title: "1. Acceptance of Terms",
            text: "By using our website or services, you confirm that you accept these Terms & Conditions and agree to comply with them. This applies to all visitors, registered users, and any individual accessing our platform in any form.",
            icon: BookOpen,
        },
        {
            title: "2. Use of Services",
            text: "You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use. Misuse of services, attempts to hack, or violations may result in termination of access.",
            icon: ShieldCheck,
        },
        {
            title: "3. Intellectual Property",
            text: "All content, logos, designs, and materials are owned by AHM. Unauthorized use, distribution, or reproduction of any materials, whether in part or whole, is strictly prohibited unless you receive explicit written consent.",
            icon: FileText,
        },
        {
            title: "4. Limitation of Liability",
            text: "AHM shall not be held responsible for any direct, indirect, or incidental damages resulting from the use of our services. This includes but is not limited to system downtime, data loss, or third-party service interruptions.",
            icon: Lock,
        },
        {
            title: "5. Changes to Terms",
            text: "We reserve the right to update these Terms & Conditions at any time. Continued use of our services indicates acceptance of updated terms. It is your responsibility to check this page regularly for updates.",
            icon: RefreshCw,
        },
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Futuristic background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full blur-3xl opacity-25 bg-sky-400/40" />
                <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 bg-sky-300/40" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-4xl mx-auto px-6 py-16"
            >
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    <span className="text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">Terms &</span>{" "}
                    <span className="text-white">Conditions</span>
                </h1>

                {/* Intro */}
                <p className="mt-6 text-gray-300 text-center max-w-2xl mx-auto">
                    Welcome to <span className="text-sky-400 font-semibold">AHM</span>. By accessing or using our services, you agree to the following terms and conditions. Please read them carefully.
                </p>

                {/* Terms Content */}
                <div className="mt-10 space-y-6 text-gray-300 leading-relaxed">
                    {terms.map((item, i) => {
                        const isExpanded = expandedIndex === i;
                        return (
                            <motion.div
                                key={i}
                                onClick={() => toggleExpand(i)}
                                whileHover={{ scale: 1.02 }}
                                className={`group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md transition-all duration-500 ease-in-out cursor-pointer border ${isExpanded
                                        ? "border-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.5)]"
                                        : "border-gray-700 hover:border-sky-400/60"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <item.icon className="h-6 w-6 text-sky-300" />
                                        <h2 className="text-xl font-semibold text-sky-400">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="text-sky-400" />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: isExpanded ? "auto" : "0px",
                                        opacity: isExpanded ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="mt-3 text-gray-200 text-sm md:text-base">{item.text}</p>
                                </motion.div>

                                {!isExpanded && (
                                    <p className="mt-2 text-sm text-sky-400/70 italic">
                                        Tap to expand and read more...
                                    </p>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer Note */}
                <p className="mt-12 text-center text-gray-400 italic">
                    Last updated: September 2025
                </p>
            </motion.div>
        </div>
    );
}
