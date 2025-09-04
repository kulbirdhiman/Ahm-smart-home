"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Heart } from "lucide-react";

const products = [
  {
    src: "/remote.png",
    title: "Digital Door Lock",
    price: 299,
    discount: 15,
    features: ["Face Unlock", "Fingerprint", "Smart App"],
  },
  {
    src: "/touch.png",
    title: "Touch Lock Pro",
    price: 399,
    discount: 10,
    features: ["Touch Access", "Voice Control", "Auto Lock"],
  },
  {
    src: "/3rd.png",
    title: "3D Face Lock",
    price: 499,
    discount: 20,
    features: ["3D Face Scan", "PIN Unlock", "Cloud Sync"],
  },
  {
    src: "/4th.png",
    title: "Card Theft Lock",
    price: 349,
    discount: 5,
    features: ["RFID Card", "Dual Security", "Alarm System"],
  },
  {
    src: "/phoneLock.png",
    title: "Smart Phone Lock",
    price: 259,
    discount: 25,
    features: ["Phone Unlock", "Bluetooth", "One Tap"],
  },
];

function ProductCard({
  src,
  title,
  price,
  discount,
  features,
}: {
  src: string;
  title: string;
  price: number;
  discount: number;
  features: string[];
}) {
  const discountedPrice = (price - price * (discount / 100)).toFixed(0);

  return (
    <div className="group perspective cursor-pointer">
      <div className="relative w-full h-80 rounded-2xl transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg">
          {/* Heart */}
          <button className="absolute top-4 right-4 bg-black/40 p-2 rounded-full text-white hover:bg-black/70 transition">
            <Heart className="w-4 h-4" />
          </button>

          {/* Discount */}
          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}

          {/* Image */}
          <div className="w-full h-40 flex items-center justify-center">
            <Image
              src={src}
              alt={title}
              width={160}
              height={160}
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Info */}
          <h3 className="text-white text-lg font-semibold mt-4">{title}</h3>
          <p className="text-gray-300 text-sm">From ${discountedPrice}</p>
          <button className="mt-4 px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition animate-pulse">
            Buy Now
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-neutral-900 to-black rounded-2xl flex flex-col items-center justify-center text-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            {features.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
          <button className="mt-6 px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}


export default function PremiumSlider() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-black via-neutral-900 to-black">
      <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-wide mb-12 text-white">
        Discover Our Smart Locks
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1.2}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        // navigation
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1440: { slidesPerView: 4.2 },
        }}
        className="pb-12"
      >
        {products.map((p, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard
              src={p.src}
              title={p.title}
              price={p.price}
              discount={p.discount}
              features={p.features}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
