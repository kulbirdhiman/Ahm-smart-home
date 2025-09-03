'use client';

import Image from 'next/image';
import { useState } from 'react';
import BUTTON from './ButtonComponent'; // Replace with your actual button component path

const AccessControlSection = () => {
    const images = ['/remote.png', '/touch.png', '/3rd.png', '/4th.png'];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className=" flex flex-col md:flex-row h-full px-4 py-10">
        
        {/* ----------- MOBILE VIEW ----------- */}
        <div className="flex flex-col items-center md:hidden w-full h-full">
            {/* Image at Top */}
            <div className="p-3 h-[250px] w-[250px] flex items-center justify-center">
            <Image
                src={selectedImage}
                width={250}
                height={250}
                alt="Selected Product"
                className="object-contain max-h-full max-w-full"
            />
            </div>

            {/* Thumbnails */}
            <div className="flex flex-wrap justify-center gap-4 px-2 py-4 mt-6">
            {images.map((imgSrc, index) => (
                <div
                key={index}
                className="w-[70px] h-[90px] cursor-pointer hover:scale-105 transition-transform overflow-hidden flex items-center justify-center hover:border-2 hover:border-white hover:rounded-2xl"
                onMouseEnter={() => setSelectedImage(imgSrc)}
                onClick={() => setSelectedImage(imgSrc)}
                >
                <Image
                    src={imgSrc}
                    width={80}
                    height={100}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-contain"
                />
                </div>
            ))}
            </div>

            {/* Buttons (Now in one row on mobile too) */}
            <div className="mt-6 flex flex-row gap-4 justify-center w-full">
            <BUTTON text="View more" Click={() => alert('View more clicked!')} />
            <BUTTON text="Shop now" Click={() => alert('Shop now clicked!')} />
            </div>
        </div>

        {/* ----------- DESKTOP VIEW ----------- */}
        <div className="hidden md:flex w-full md:w-1/2 flex-col justify-center items-center text-center px-4 lg:pt-10 h-full">
            <p className="text-white text-xl md:text-2xl lg:text-3xl max-w-[90%] leading-relaxed">
            Introducing our exclusive range of Access Control and Safety Systems, designed for your safety
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <BUTTON text="View more" Click={() => alert('View more clicked!')} />
            <BUTTON text="Shop now" Click={() => alert('Shop now clicked!')} />
            </div>

            {/* Thumbnails */}
            <div className="flex flex-wrap justify-center gap-4 px-2 py-4 mt-10">
            {images.map((imgSrc, index) => (
                <div
                key={index}
                className="w-[70px] h-[90px] sm:w-[80px] sm:h-[100px] cursor-pointer hover:scale-105 transition-transform overflow-hidden flex items-center justify-center hover:border-2 hover:border-white hover:rounded-2xl"
                onMouseEnter={() => setSelectedImage(imgSrc)}
                onClick={() => setSelectedImage(imgSrc)}
                >
                <Image
                    src={imgSrc}
                    width={80}
                    height={100}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-contain"
                />
                </div>
            ))}
            </div>
        </div>

        {/* Right Side (Only for Desktop) */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center h-full">
            <div className="p-3 h-[300px] sm:h-[350px] md:h-[400px] w-[300px] sm:w-[350px] md:w-[400px] flex items-center justify-center">
            <Image
                src={selectedImage}
                width={300}
                height={300}
                alt="Selected Product"
                className="object-contain max-h-full max-w-full "
            />
            </div>
        </div>
        </div>
    );
};

export default AccessControlSection;
//original