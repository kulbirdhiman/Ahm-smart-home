"use client";

import React, { useState } from "react";
import DynamicForm, { FormField } from "@/components/form/DynamicForm";
import UploadImage from "@/components/form/Fields/UploadFile";
// import { productFormFields } from "./productFormFields";

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

export default function ProductPage() {
  const [values, setValues] = useState<Product>({
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [productList, setProductList] = useState<Product[]>([]);

  const handleSubmit = (e: React.FormEvent, values: Product, mode: string) => {
    e.preventDefault();

    // ✅ Basic validation example
    const newErrors: Record<string, string> = {};
    if (!values.name) newErrors.name = "Product name is required";
    if (!values.sku) newErrors.sku = "SKU is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ✅ Add to list
    setProductList((prev) => [...prev, values]);

    // Reset
    setValues({
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
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4 sm:px-6 lg:px-12 py-12">
      <h1 className="text-5xl font-extrabold mb-12 text-center tracking-wide bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        Product Management
      </h1>

      {/* Dynamic Product Form */}
      <DynamicForm
        values={values}
        setValues={setValues}
        errors={errors}
        formFields={productFormFields}
        handleSubmit={handleSubmit}
        submitTitle="➕ Add Product"
      />

      {/* Product List */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
          Added Products
        </h2>
      </div>
    </div>
  );
}

// productFormFields.ts
// import { FormField } from "@/components/global/DynamicForm";

// productFormFields.ts

export const productFormFields: FormField[] = [
  {
    name: "images",
    label: "Upload Images",
    type: "custom",
    customRender: (field, values, setValues, errors) => (
      <UploadImage
        values={values}
        setValues={setValues}
        errors={errors}
        customClass="col-span-2 md:col-span-2"
      />
    ),
  },
  {
    name: "name",
    label: "Product Name",
    type: "text",
    placeholder: "Enter product name",
  },
  { name: "sku", label: "SKU", type: "text", placeholder: "Enter SKU" },
  {
    name: "keyword",
    label: "Search Keyword",
    type: "text",
    placeholder: "Enter keyword",
  },
  {
    name: "discount",
    label: "Discount (%)",
    type: "number",
    placeholder: "Enter discount",
  },
  { name: "length", label: "Length", type: "number", placeholder: "Length" },
  { name: "width", label: "Width", type: "number", placeholder: "Width" },
  { name: "height", label: "Height", type: "number", placeholder: "Height" },
  { name: "weight", label: "Weight", type: "number", placeholder: "Weight" },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter description",
  },
  { name: "specification", label: "Specification", type: "richtext" },

  // ✅ UploadImage component
];
