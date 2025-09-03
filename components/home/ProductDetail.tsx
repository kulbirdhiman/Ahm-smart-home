"use client";

import { useState } from "react";
import ProductTabs from "./ProductTab";
import RelatedProducts from "./ProductH";
import { FiHeart } from "react-icons/fi";

export default function Home() {
    const [quantity, setQuantity] = useState(1);

    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-10 py-10">
        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Image */}
            <div className="flex justify-center relative ">
                {/* Heart Icon - Always top right of container */}
                        <button type="button" aria-label="error" className="absolute top-2 right-2 p-1 cursor-pointer z-10">
                            <FiHeart className="text-white text-xl sm:text-lg md:text-2xl hover:text-red-500 transition-colors" />
                        </button>
            <img
                src="/3rd.png"
                alt="3D Face Recognition Door Lock"
                className="max-w-xs md:max-w-md"
            />
            </div>

            {/* Right Side - Product Info */}
            <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
                3D Face Recognition with Smart Control Door/Digital Fingerprint with Password & Lock Built-in Camera
            </h1>
            <p className="mt-3 text-red-400 text-xl">$144</p>
            <p className="text-gray-400 mt-1">SKU: AHM-0006</p>
            <p className="text-gray-400">Product ID: 26876</p>

            {/* Quantity + Buy Now */}
            <div className="flex items-center gap-3 mt-5">
                <button
                onClick={decrease}
                className="px-3 py-1 border rounded cursor-pointer text-lg hover:bg-gray-800"
                >
                -
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                onClick={increase}
                className="px-3 py-1 border rounded text-lg hover:bg-gray-800 cursor-pointer"
                >
                +
                </button>
                <button className="ml-4 px-6 py-2 bg-blue-600 rounded-lg text-white flex items-center gap-2 cursor-pointer hover:bg-blue-700">
                <span>🛒</span> Buy now
                </button>
            </div>

            {/* Tabs */}
            <ProductTabs />
            </div>
        </div>

        {/* Related Products */}
        <RelatedProducts />
        </div>
    );
}
