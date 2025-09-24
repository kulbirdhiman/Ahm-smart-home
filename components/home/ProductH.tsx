"use client";

import Image from "next/image";

const related = [
  {
    id: 1,
    title: "ZigBee Smart Hub: ces, Smart",
    price: "$155",
    image: "/3rd.png",
  },
  {
    id: 2,
    title: "ZigBee Smart Hub: ces, Smart",
    price: "$155",
    image: "/3rd.png",
  },
  {
    id: 3,
    title: "ZigBee Smart Hub: ces, Smart",
    price: "$155",
    image: "/3rd.png",
  },
];

export default function RelatedProducts() {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-white mb-4">
        Related Products
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border border-gray-700 rounded-xl p-3 bg-gray-900"
          >
            <Image
            height={200
            }
            width={ 200}
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <div>
              <p className="text-sm text-gray-200">{item.title}</p>
              <p className="text-red-400 font-semibold">{item.price}</p>
              <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-800 cursor-pointer rounded-lg text-white text-sm">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
