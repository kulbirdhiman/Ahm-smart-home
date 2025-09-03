"use client";
import { useState } from "react";

export default function ProductTabs() {
    const [active, setActive] = useState("description");

    const tabs = [
        { key: "description", label: "Description" },
        { key: "info", label: "Additional information" },
        { key: "reviews", label: "Reviews" },
    ];

    return (
        <div className="mt-6 w-full">
        {/* Tab Buttons */}
        <div className="flex gap-6 border-b border-gray-700">
            {tabs.map((tab) => (
            <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`pb-2 text-sm md:text-base ${
                active === tab.key
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-400"
                }`}
            >
                {tab.label}
            </button>
            ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4 text-gray-300 text-sm leading-relaxed">
            {active === "description" && (
            <p>
                Multifunctional Door Lock: A Smart and Secure Solution for Your Home. <br />
                In today’s world, security is a top priority for homeowners, and a multifunctional
                door lock can offer both convenience and peace of mind...
            </p>
            )}
            {active === "info" && (
            <p>
                Product Dimensions: 15 x 6 x 3 cm <br />
                Battery Life: 12 months <br />
                Connectivity: WiFi, ZigBee, Bluetooth
            </p>
            )}
            {active === "reviews" && (
            <p>No reviews yet. Be the first to review this product!</p>
            )}
        </div>
        </div>
    );
}
