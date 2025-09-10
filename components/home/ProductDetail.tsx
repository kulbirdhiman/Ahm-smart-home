"use client";

import { useState } from "react";
import ProductTabs from "./ProductTab";
import RelatedProducts from "./ProductH";
import { Heart } from "lucide-react";
import Image from "next/image";
import { addToCart } from "@/store/actions/cartSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("standard");
  const dispatch = useDispatch();

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCartHandleSubmit = () => {
    try {
      dispatch(
        addToCart({
          id: 26876, // product ID (can be dynamic)
          name: "3D Face Recognition Smart Door Lock",
          price: 144,
          quantity,
          // variant: selectedVariant,
        })
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-14 font-[Inter]">
      {/* Product Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side - Image */}
        <div className="flex justify-center relative group">
          {/* Heart Icon */}
          <button
            type="button"
            aria-label="wishlist"
            onClick={() => setFavorite(!favorite)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 transition z-10"
          >
            <Heart
              className={`w-6 h-6 ${
                favorite ? "text-red-500 fill-red-500" : "text-white"
              }`}
            />
          </button>

          {/* Main Product Image */}
          <Image
            src="/3rd.png"
            alt="3D Face Recognition Door Lock"
            width={450}
            height={450}
            className="transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-3 px-6 text-center transition-opacity duration-500">
            <p className="text-lg font-medium">
              Advanced 3D Face Recognition Lock
            </p>
            <p className="text-gray-400 text-sm max-w-sm">
              Unlock with face, fingerprint, or passcode. Built-in security
              camera for complete safety.
            </p>
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug tracking-tight">
            3D Face Recognition Smart Door Lock
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed">
            Digital Fingerprint with Password & Lock Built-in Camera
          </p>
          <p className="text-red-400 text-3xl font-semibold">$144</p>
          <p className="text-gray-400 text-sm">SKU: AHM-0006</p>
          <p className="text-gray-400 text-sm">Product ID: 26876</p>

          {/* Variant Options */}
          <div className="pt-2">
            <h3 className="text-sm text-gray-300 mb-2">Choose Model</h3>
            <div className="flex gap-3">
              {["standard", "pro", "ultra"].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-5 py-2 rounded-full text-sm capitalize transition font-medium ${
                    selectedVariant === variant
                      ? "bg-white text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={decrease}
              className="px-3 py-1 border rounded-lg text-lg hover:bg-gray-800"
            >
              -
            </button>
            <span className="text-lg w-8 text-center">{quantity}</span>
            <button
              onClick={increase}
              className="px-3 py-1 border rounded-lg text-lg hover:bg-gray-800"
            >
              +
            </button>
            <button
              onClick={addToCartHandleSubmit}
              className="ml-4 px-8 py-3 bg-blue-600 rounded-full text-white flex items-center gap-2 hover:bg-blue-700 transition font-medium"
            >
              🛒 Add to Cart
            </button>
          </div>

          {/* Tabs */}
          <div className="pt-6">
            <ProductTabs />
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <RelatedProducts />
      </div>
    </div>
  );
}
