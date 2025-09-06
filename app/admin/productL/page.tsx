"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Product {
    name: string;
    sku: string;
    keyword: string;
    discount: string;
    length: string;
    width: string;
    height: string;
    weight: string;
    description: string;
    specification: string;
    images: File[];
}

export default function ProductList() {
    const [product, setProduct] = useState<Product>({
        name: "",
        sku: "",
        keyword: "",
        discount: "",
        length: "",
        width: "",
        height: "",
        weight: "",
        description: "",
        specification: "",
        images: [],
    });

    const [productList, setProductList] = useState<Product[]>([]);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setProduct((prev) => ({
                ...prev,
                images: [...prev.images, ...Array.from(files)],
            }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setProductList((prev) => [...prev, product]);
        setProduct({
            name: "",
            sku: "",
            keyword: "",
            discount: "",
            length: "",
            width: "",
            height: "",
            weight: "",
            description: "",
            specification: "",
            images: [],
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4 sm:px-6 lg:px-12 py-12">
            <h1 className="text-5xl font-extrabold mb-12 text-center tracking-wide bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Product Management
            </h1>

            {/* Product Form */}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-900/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-neutral-800 hover:border-blue-500/50 transition"
            >
                {[
                    { name: "name", placeholder: "Product Name", required: true },
                    { name: "sku", placeholder: "SKU", required: true },
                    { name: "keyword", placeholder: "Search Keyword" },
                    { name: "discount", placeholder: "Discount (%)" },
                    { name: "length", placeholder: "Length" },
                    { name: "width", placeholder: "Width" },
                    { name: "height", placeholder: "Height" },
                    { name: "weight", placeholder: "Weight" },
                ].map((field) => (
                    <div key={field.name} className="flex flex-col">
                        <label className="text-sm text-gray-400 mb-1">
                            {field.placeholder}
                        </label>
                        <input
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                            value={(product as any)[field.name]}
                            onChange={handleChange}
                            className="p-3 rounded-xl bg-neutral-800/70 border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-500"
                            required={field.required}
                        />
                    </div>
                ))}

                <div className="flex flex-col md:col-span-2">
                    <label className="text-sm text-gray-400 mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={product.description}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-neutral-800/70 border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition min-h-[120px] placeholder-gray-500"
                    />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="text-sm text-gray-400 mb-1">
                        Specification
                    </label>
                    <textarea
                        name="specification"
                        placeholder="Specification"
                        value={product.specification}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-neutral-800/70 border border-neutral-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition min-h-[120px] placeholder-gray-500"
                    />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label
                        htmlFor="product-images"
                        className="text-sm text-gray-400 mb-1"
                    >
                        Upload Images
                    </label>
                    <input
                        id="product-images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-gradient-to-r file:from-blue-600 file:to-indigo-600
                        hover:file:opacity-90 cursor-pointer"
                    />
                </div>

                <button
                    type="submit"
                    className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-102"
                >
                    ➕ Add Product
                </button>
            </form>

            {/* Product List */}
            <div className="mt-16">
                <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
                    Added Products
                </h2>
                {productList.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No products added yet.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {productList.map((item, index) => (
                            <div
                                key={index}
                                className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/40 hover:border-blue-500/50 transition transform hover:-translate-y-2"
                            >
                                <h3 className="text-2xl font-bold text-white">
                                    {item.name}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    SKU: {item.sku}
                                </p>
                                <p className="mt-3 text-gray-300 line-clamp-2">
                                    {item.description}
                                </p>
                                <p className="text-sm text-gray-400 mt-2">
                                    {item.specification}
                                </p>
                                {item.discount && (
                                    <p className="mt-3 text-blue-400 font-medium">
                                        🔖 Discount: {item.discount}%
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {item.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={URL.createObjectURL(img)}
                                            alt="product"
                                            className="w-24 h-24 object-cover rounded-xl border border-neutral-700 hover:scale-105 transition"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
