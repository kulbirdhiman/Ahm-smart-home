import React from "react";
import Product from "./Product";
import Image from "next/image";

const SecondC = () => {
    return (
        <div className="w-full min-h-screen ">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center mt-6 sm:mt-10 underline">
            Trending Items
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1  xl:grid-cols-[1fr_0.7fr] h-fit xl:min-h-[95vh]">
            {/* Left Side */}
            <div className="flex flex-col items-center py-6 sm:py-10">
            <div className="flex sm:flex-row sm:gap-10 gap-6 lg:gap-20 px-4 sm:px-10 py-5">
                <Product
                ImageComponent={
                    <Image
                    src={"/remote.png"}
                    height={300}
                    width={150}
                    alt="#"
                    />
                }
                description="Digital lock face"
                width="w-62"
                height="h-50"
                price="$150"
                />
                <Product
                ImageComponent={
                    <Image
                    src={"/touch.png"}
                    height={300}
                    width={200}
                    alt="#"
                    />
                }
                description="Digital lock face"
                width="w-62"
                height="h-50"
                price="$150"
                />
            </div>

            <div className="flex sm:flex-row sm:gap-10 gap-6 px-4 sm:px-10 py-5">
                <Product
                ImageComponent={
                    <Image
                    src={"/3rd.png"}
                    height={300}
                    width={150}
                    alt="#"
                    />
                }
                description="Digital lock face"
                width="w-62"
                height="h-60"
                price="$150"
                />
                <Product
                ImageComponent={
                    <Image
                    src={"/4th.png"}
                    height={100}
                    width={100}
                    alt="#"
                    className="max-w-full h-38"
                    />
                }
                description="Digital lock face"
                width="w-62"
                price="$150"
                />
            </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col row-start-1 md:row-start-2 justify-center items-center px-4 sm:px-6 py-8">
            <Image
                src="/phoneLock.png"
                height={500}
                width={500}
                alt="#"
                className="max-w-full h-auto"
            />

            <div className="flex flex-col gap-2 w-full sm:w-[500px] mt-6 text-white text-xs sm:text-sm">
                <div className="flex justify-between">
                <p>3D Face Recognition Smart Door Lock with Visual</p>
                <p>12 in stock</p>
                </div>
                <div className="flex justify-between">
                <p>Security Code Card- Theft Digital Lock</p>
                <p>2 Reviews</p>
                </div>
                <div className="flex justify-between">
                <p>$299</p>
                <p>ID: 27066</p>
                </div>
                <div className="flex">
                <p>Additional information</p>
                </div>
                <div className="flex">
                <p>Weight 4.3 kg | Dimensions 27.5 × 13 × 12 cm</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SecondC;
