"use client";

import React from "react";
// import { FiHeart } from "react-icons/fi";


import { Heart } from "lucide-react";

type ProductProps = {
    ImageComponent: React.ReactNode; // can pass <Image /> or <img /> or any JSX
    description?: string;
    description2?: string;
    price?: string;
    width?: string;
    height?: string;
    btn?: boolean;
    };

    export default function Product({
    ImageComponent,
    description = "",
    description2 = "",
    price,
    width = "w-64",
    height = "h-20",
    btn = false,
    }: ProductProps) {
    return (
        <div
        className={`
        relative rounded-md flex flex-col items-center gap-2.5 
        px-4 pt-3 pb-0  h-fit
        lg:h-70
        sm:w-40 sm:px-3 sm:pt-2
        md:w-50 md:px-5
        lg:w-60
        xl:w-60
        `}
        >
        {/* Heart Icon - Always top right of container */}
        <button type="button" aria-label="error" className="absolute top-2 right-2 p-1 cursor-pointer z-10">
            {/* <FiHeart className="text-white text-xl sm:text-lg md:text-2xl hover:text-red-500 transition-colors" /> */}
            <Heart className="text-white text-xl sm:text-lg md:text-2xl hover:text-red-500 transition-colors"  />
        </button>

        {/* Image Section */}
        <div
            className={`flex justify-center items-center ${width} ${height} w-fit h-fit`}
        >
            {ImageComponent}
        </div>

        {/* Description Section */}
        {description && (
            <div className="flex flex-col py-2 w-full">
            <div className="flex gap-3 sm:gap-2 md:gap-5 items-center justify-between">
                <p className="text-xs sm:text-sm md:text-base text-white">
                {description}
                </p>
                {price && (
                <p className="text-xs sm:text-sm md:text-base text-red-500 bg-gray-700/50 rounded-2xl px-2 py-0.5">
                    {price}
                </p>
                )}
            </div>

            {description2 && (
                <p className=" text-xs sm:text-sm md:text-base text-white">
                {description2}
                </p>
            )}

            {btn && (
                <button
                type="button"
                className="px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 bg-blue-500 rounded-3xl 
                hover:bg-blue-600 cursor-pointer mb-2 text-xs sm:text-sm md:text-base transition-all"
                >
                Buy now
                </button>
            )}
            </div>
        )}
        </div>
    );
}
