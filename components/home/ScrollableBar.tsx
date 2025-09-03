'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

function ImageCard({ src, description }: { src: string; description: string }) {
  return (
    <div className="flex-shrink-0 w-40 text-center">
      <div className="relative h-56 w-40 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={description}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
      <p className="mt-2 text-sm font-medium text-white bg-black backdrop-blur-sm py-1 px-2 rounded-lg">
        {description}
      </p>
    </div>
  );
}

export default function ScrollableGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const images = [
    { src: '/remote.png', desc: 'Digital Door Lock– Face/ ' },
    { src: '/touch.png', desc: 'Digital Door Lock– Face/ ' },
    { src: '/3rd.png', desc: 'Digital Door Lock– Face/ ' },
    { src: '/4th.png', desc: 'Digital Door Lock– Face/ ' },
    { src: '/phoneLock.png', desc: 'Digital Door Lock– Face/ ' },
  ];

  // Duplicate twice for infinite loop
  const loopImages = [...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; // 👈 adjust speed here

    const scroll = () => {
      scrollAmount += speed;
      // when we scrolled past half of content, reset without visible jump
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount -= container.scrollWidth / 2;
      }
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="w-full py-10 px-4  rounded-2xl">
      <h2 className="text-center text-3xl md:text-5xl font-bold font-jakarta mb-8 text-white">
        What We Offer
      </h2>

      <div
        ref={containerRef}
        className="overflow-x-hidden flex gap-6 px-6 whitespace-nowrap"
      >
        {loopImages.map((img, idx) => (
          <ImageCard key={idx} src={img.src} description={img.desc} />
        ))}
      </div>
    </section>
  );
}
