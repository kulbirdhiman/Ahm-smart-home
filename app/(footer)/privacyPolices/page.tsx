// app/privacy/page.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, Lock, UserCheck, RefreshCw, FileText } from "lucide-react";

export default function PrivacyPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const sections = [
        {
            title: "1. Information We Collect",
            text: "We may collect personal information such as your name, email address, phone number, and payment details when you register, make a purchase, or interact with our services. Additionally, we may collect non-identifiable data like browser type, device information, and usage statistics for analytics purposes.",
            icon: FileText,
        },
        {
            title: "2. How We Use Information",
            text: "We use the collected data to provide, maintain, and improve our services. This includes processing transactions, sending notifications, responding to customer inquiries, and enhancing security. We may also use anonymized data for research and service optimization.",
            icon: UserCheck,
        },
        {
            title: "3. Sharing of Data",
            text: "We do not sell or rent your personal information to third parties. However, we may share information with trusted partners who assist in service delivery (such as payment processors or shipping providers), provided they adhere to strict confidentiality agreements.",
            icon: RefreshCw,
        },
        {
            title: "4. Data Security",
            text: "We implement industry-standard security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. While we take all reasonable steps, no system can be 100% secure, and we cannot guarantee absolute protection.",
            icon: Lock,
        },
        {
            title: "5. Your Rights",
            text: "You have the right to access, update, or delete your personal information stored with us. You may also opt out of receiving promotional emails at any time. For such requests, please contact our support team directly.",
            icon: ShieldCheck,
        },
        {
            title: "6. Changes to Policy",
            text: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and continued use of our services constitutes acceptance of the revised policy.",
            icon: RefreshCw,
        },
    ];

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
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
                className="relative z-10 max-w-4xl mx-auto px-6 py-16"
            >
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    <span className="text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">Privacy</span>{" "}
                    <span className="text-white">Policy</span>
                </h1>

                {/* Intro */}
                <p className="mt-6 text-gray-300 text-center max-w-2xl mx-auto">
                    At <span className="text-sky-400 font-semibold">AHM</span>, your privacy is
                    very important to us. This Privacy Policy explains how we collect, use, and
                    safeguard your personal information.
                </p>

                {/* Policy Sections */}
                <div className="mt-10 space-y-6 text-gray-300 leading-relaxed">
                    {sections.map((item, i) => {
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
                                        Tap to expand and learn more...
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
