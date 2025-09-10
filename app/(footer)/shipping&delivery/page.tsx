// app/shipping/page.tsx
"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    Truck,
    Plane,
    Ship,
    Package,
    Timer,
    ShieldCheck,
    Globe2,
    MapPin,
    ArrowRight
} from "lucide-react";

export default function ShippingAndDeliveryPage() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const steps = useMemo(
        () => [
            { icon: MapPin, title: "Order Placed", desc: "We verify details and prep your items." },
            { icon: Package, title: "Packed Securely", desc: "Shockproof, tamper-evident packaging." },
            { icon: Truck, title: "Dispatched", desc: "Handover to our fastest carrier partner." },
            { icon: Timer, title: "Live Tracking", desc: "Track progress in real-time, 24×7." },
            { icon: ShieldCheck, title: "Delivered", desc: "Signed delivery with satisfaction check." }
        ],
        []
    );

    const zones = [
        {
            id: 1,
            name: "Metro & Tier-1",
            eta: "1–3 days",
            cost: "₹0 – ₹149",
            icon: Truck,
            detail:
                "Fastest lane shipping for Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata. Same/next-day dispatch.",
        },
        {
            id: 2,
            name: "Pan‑India Standard",
            eta: "3–6 days",
            cost: "₹49 – ₹199",
            icon: Globe2,
            detail:
                "Reliable coverage across India with optimized routes and partner networks. Remote PINs may vary.",
        },
        {
            id: 3,
            name: "Priority Air",
            eta: "1–2 days",
            cost: "₹199 – ₹399",
            icon: Plane,
            detail:
                "Express air shipping for urgent orders. Cut‑off at 4 PM IST for same‑day dispatch.",
        },
        {
            id: 4,
            name: "Bulk & Oversize",
            eta: "4–10 days",
            cost: "By quote",
            icon: Ship,
            detail:
                "Freight partners handle large or heavy items with pro handling and scheduled delivery windows.",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Futuristic nebula background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full blur-3xl opacity-30 bg-sky-400/40" />
                <div className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 bg-sky-300/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-20 bg-sky-200/40" />
                {/* grid glow */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            {/* Header */}
            <header className="relative z-10 px-6 md:px-10 py-16 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight"
                >
                    Shipping <span className="text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">& Delivery</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="mt-4 max-w-2xl text-sky-200/80"
                >
                    Lightning‑fast logistics with transparent timelines, live tracking, and secure packaging — all in a sleek, futuristic flow.
                </motion.p>

                {/* KPI pills */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                    {[
                        { label: "Same/Next‑Day Dispatch", icon: Timer },
                        { label: "Tamper‑Proof Pack", icon: ShieldCheck },
                        { label: "Live Order Tracking", icon: Globe2 },
                        { label: "Doorstep Delivery", icon: Truck },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-white/5 backdrop-blur px-4 py-2 text-sm shadow-[0_0_24px_-6px_rgba(56,189,248,0.45)]"
                        >
                            <item.icon className="h-4 w-4 text-sky-300" />
                            <span className="text-sky-100/90">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </header>

            {/* Zones / Methods */}
            <section className="relative z-10 px-6 md:px-10 py-8 md:py-12">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-sky-200 mb-6"
                    >
                        Delivery Zones & Methods
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {zones.map((z) => (
                            <motion.div
                                key={z.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5 }}
                                onMouseEnter={() => setExpandedCard(z.id)}
                                onMouseLeave={() => setExpandedCard((prev) => (prev === z.id ? null : prev))}
                                className="group relative rounded-2xl border border-sky-400/25 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg p-5 shadow-[0_8px_40px_-10px_rgba(56,189,248,0.45)] hover:shadow-[0_12px_60px_-8px_rgba(56,189,248,0.65)] transition-shadow"
                            >
                                {/* Glow ring */}
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-400/20 group-hover:ring-sky-300/40 transition" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3">
                                        <z.icon className="h-6 w-6 text-sky-300" />
                                        <h3 className="text-lg font-semibold text-sky-100">{z.name}</h3>
                                    </div>
                                    <div className="mt-3 grid grid-cols-2 text-sm text-sky-100/80">
                                        <div>
                                            <p className="uppercase tracking-wide text-xs text-sky-200/70">ETA</p>
                                            <p className="font-medium">{z.eta}</p>
                                        </div>
                                        <div>
                                            <p className="uppercase tracking-wide text-xs text-sky-200/70">Cost</p>
                                            <p className="font-medium">{z.cost}</p>
                                        </div>
                                    </div>

                                    {/* Hover-expand details */}
                                    <div
                                        className={`mt-3 overflow-hidden transition-[max-height,opacity] duration-500 ${expandedCard === z.id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-sm text-sky-100/80 leading-relaxed">{z.detail}</p>
                                    </div>

                                    <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm text-sky-100 hover:bg-sky-400/20 transition">
                                        Learn more <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="relative z-10 px-6 md:px-10 py-8 md:py-12">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-sky-200 mb-8"
                    >
                        How Your Order Travels
                    </motion.h2>

                    <div className="relative pl-6 md:pl-10">
                        {/* vertical line */}
                        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-300/60 via-sky-400/20 to-transparent" />

                        <ul className="space-y-6">
                            {steps.map((s, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[34px] md:-left-[42px] mt-1 h-6 w-6 md:h-8 md:w-8 rounded-full bg-sky-400/15 border border-sky-400/40 grid place-items-center shadow-[0_0_24px_rgba(56,189,248,0.5)]">
                                        <s.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-sky-300" />
                                    </div>
                                    <div className="rounded-xl border border-sky-400/20 bg-white/5 backdrop-blur p-4 md:p-5">
                                        <h4 className="text-base md:text-lg font-semibold text-sky-100">{s.title}</h4>
                                        <p className="mt-1 text-sm text-sky-100/80">{s.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Shipping Calculator (UI only) */}
            <section className="relative z-10 px-6 md:px-10 py-8 md:py-16">
                <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl border border-sky-400/25 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 shadow-[0_12px_60px_-8px_rgba(56,189,248,0.55)]"
                    >
                        <h3 className="text-xl font-semibold text-sky-100">Estimate Shipping</h3>
                        <p className="text-sm text-sky-100/80 mt-1">Get a quick estimate based on your PIN and cart weight.</p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <div>
                                <label className="text-xs uppercase tracking-wide text-sky-200/80">PIN Code</label>
                                <input
                                    placeholder="e.g. 560001"
                                    className="mt-1 w-full rounded-xl bg-black/50 border border-sky-400/30 px-4 py-2.5 text-sky-100 placeholder:text-sky-200/40 outline-none focus:ring-2 focus:ring-sky-400/50"
                                />
                            </div>
                            <div>
                                <label htmlFor="cartWeight" className="text-xs uppercase tracking-wide text-sky-200/80">Cart Weight</label>
                                <select id="cartWeight" className="mt-1 w-full rounded-xl bg-black/50 border border-sky-400/30 px-4 py-2.5 text-sky-100 outline-none focus:ring-2 focus:ring-sky-400/50">
                                    <option>Up to 0.5 kg</option>
                                    <option>0.5 – 1 kg</option>
                                    <option>1 – 2 kg</option>
                                    <option>2 – 5 kg</option>
                                    <option>5 kg +</option>
                                </select>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="text-xs uppercase tracking-wide text-sky-200/80">Shipping Method</label>
                                <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        { label: "Standard", icon: Truck },
                                        { label: "Priority Air", icon: Plane },
                                        { label: "Freight", icon: Ship },
                                    ].map((m) => (
                                        <button
                                            key={m.label}
                                            type="button"
                                            className="group rounded-xl border border-sky-400/30 bg-black/40 px-4 py-2.5 text-sm text-sky-100 hover:bg-sky-400/10 hover:border-sky-300/50 inline-flex items-center justify-center gap-2"
                                        >
                                            <m.icon className="h-4 w-4 text-sky-300" />
                                            {m.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="sm:col-span-2 flex items-center justify-between">
                                <div className="text-sm text-sky-100/80">
                                    Estimated: <span className="font-semibold text-sky-200">₹149 – ₹299</span>
                                </div>
                                <button
                                    type="submit"
                                    className="rounded-full border border-sky-400/40 bg-sky-400/20 px-5 py-2 text-sm text-sky-50 hover:bg-sky-400/30 hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] transition"
                                >
                                    Apply Estimate
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Policy Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl border border-sky-400/25 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6"
                    >
                        <h3 className="text-xl font-semibold text-sky-100">Policy Highlights</h3>
                        <ul className="mt-4 space-y-4">
                            {[
                                {
                                    title: "Dispatch Window",
                                    text: "Orders placed by 4 PM IST ship the same day on business days.",
                                },
                                {
                                    title: "Tracking",
                                    text: "Tracking link is auto-emailed/SMSed after dispatch. Updates appear within 6–12 hours.",
                                },
                                {
                                    title: "Missed Delivery",
                                    text: "3 re‑attempts are made. After that, parcels return to origin and reship fees may apply.",
                                },
                                {
                                    title: "Damage/Loss",
                                    text: "Report within 48 hours with photos. We’ll prioritize replacement or refund per resolution.",
                                },
                            ].map((p, i) => (
                                <li
                                    key={i}
                                    className="group rounded-xl border border-sky-400/20 bg-black/40 p-4 hover:bg-sky-400/5 transition overflow-hidden"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sky-100 font-medium">{p.title}</p>
                                            <p className="text-sm text-sky-100/80 mt-1 leading-relaxed">{p.text}</p>
                                        </div>
                                        <span className="text-xs text-sky-300 opacity-0 group-hover:opacity-100 transition">More</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Assurance badge */}
                        <div className="mt-6 flex items-center gap-3 rounded-xl border border-sky-400/30 bg-black/50 p-4">
                            <ShieldCheck className="h-5 w-5 text-sky-300" />
                            <p className="text-sm text-sky-100/90">
                                All shipments are insured. High‑value orders ship with OTP‑verified delivery.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10 px-6 md:px-10 pb-20">
                <div className="mx-auto max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-sky-200 mb-6"
                    >
                        FAQs
                    </motion.h2>

                    <div className="divide-y divide-sky-400/10 rounded-2xl border border-sky-400/20 bg-white/5 backdrop-blur">
                        {[
                            {
                                q: "Do you offer Cash on Delivery (COD)?",
                                a: "Yes, COD is available for eligible PIN codes up to ₹15,000. A small convenience fee may apply.",
                            },
                            {
                                q: "Can I change my address after placing an order?",
                                a: "Address edits are possible before dispatch. Contact support with your order ID ASAP.",
                            },
                            {
                                q: "What about international shipping?",
                                a: "We currently ship within India. International shipping opens soon — watch this space!",
                            },
                        ].map((faq, i) => (
                            <details key={i} className="group px-5 py-4 open:bg-sky-400/5">
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sky-100">
                                    <span className="font-medium">{faq.q}</span>
                                    <svg
                                        className="h-4 w-4 transition group-open:rotate-45"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </summary>
                                <p className="mt-2 text-sm text-sky-100/80">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <footer className="relative z-10 pb-16">
                <div className="mx-auto max-w-3xl text-center px-6">
                    <div className="rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-400/20 to-sky-300/20 backdrop-blur-xl p-8 shadow-[0_12px_80px_-8px_rgba(56,189,248,0.65)]">
                        <h3 className="text-2xl md:text-3xl font-semibold text-sky-50">Need help with a shipment?</h3>
                        <p className="text-sky-100/80 mt-2">Our logistics team is online 9 AM – 9 PM IST, all 7 days.</p>
                        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                            <a
                                href="/contact"
                                className="rounded-full border border-sky-400/40 bg-black/40 px-6 py-2 text-sky-100 hover:bg-sky-400/10 hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] transition"
                            >
                                Contact Support
                            </a>
                            <a
                                href="/track"
                                className="rounded-full border border-sky-400/40 bg-sky-400/20 px-6 py-2 text-sky-50 hover:bg-sky-400/30 hover:shadow-[0_0_36px_rgba(56,189,248,0.6)] transition inline-flex items-center gap-2"
                            >
                                Track Order <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
