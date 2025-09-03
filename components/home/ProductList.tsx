import React from "react";
import Product from "./Product";
import Image from "next/image";
import { Search } from "lucide-react";

const Showing = () => {
    return (
        <div className="w-full h-max flex flex-col mt-10 justify-center">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full px-6 sm:pr-12 lg:pr-20 justify-between sm:justify-end items-center">
            <div className="flex items-center gap-2 border border-white rounded-2xl px-4 py-2 bg-gray-700 hover:bg-gray-800 w-full sm:w-auto">
            <Search className="text-white w-5 h-5" />
            <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white placeholder-gray-300 w-full sm:w-[150px] h-fit"
            />
            </div>
            <button
            type="button"
            className="text-white px-6 bg-gray-700 rounded-2xl py-2 hover:bg-gray-800 cursor-pointer w-full sm:w-auto"
            >
            Sort by price
            </button>
        </div>

        {/* Product grid with consistent spacing */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6 p-6">
            <Product
            ImageComponent={<Image src={"/remote.png"} height={300} width={150} alt="#" className="lg:h-50"/>}
            description="Digital lock face"
            width="w-62"
            height="h-60"
            price="$150"
            description2="Digital lock face"
            btn={true}
            />

            <Product
            ImageComponent={<Image src={"/remote.png"} height={300} width={150} alt="#" className="lg:h-50" />}
            description="Digital lock face"
            width="w-62"
            height="h-60"
            price="$150"
            description2="Digital lock face"
            btn={true}
            />

            <Product
            ImageComponent={<Image src={"/remote.png"} height={300} width={150} alt="#" className="lg:h-50" />}
            description="Digital lock face"
            width="w-62"
            height="h-60"
            price="$150"
            description2="Digital lock face"
            btn={true}
            />

            <Product
            ImageComponent={<Image src={"/remote.png"} height={300} width={150} alt="#" className="lg:h-50" />}
            description="Digital lock face"
            width="w-62"
            height="h-60"
            price="$150"
            description2="Digital lock face"
            btn={true}
            />

            <Product
            ImageComponent={<Image src={"/remote.png"} height={300} width={150} alt="#" className="lg:h-50" />}
            description="Digital lock face"
            width="w-62"
            height="h-60"
            price="$150"
            description2="Digital lock face"
            btn={true}
            />
        </div>
        </div>
    );
};

export default Showing;
