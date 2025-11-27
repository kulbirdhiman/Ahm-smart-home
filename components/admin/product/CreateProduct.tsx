"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UploadImage from "@/components/form/Fields/UploadFile";
import { useGetCategoriesQuery } from "@/store/api/categorey";
import { useCreateProductMutation } from "@/store/api/productApi";

const AddProduct = () => {
  const router = useRouter();
  const [values, setValues] = useState<any>({});
  const [deleteFiles, setDeleteFiles] = useState([]);
  const [errors, setErrors] = useState<Record<string, any>>({});
  const [categories, setCategories] = useState<any[]>([]);

  const { data: categoryData, isLoading } = useGetCategoriesQuery({ limit: 1000 });

  useEffect(() => {
    if (categoryData?.data) {
      setCategories(
        categoryData.data.map((c: any) => ({
          label: c.name,
          value: c.id,
        }))
      );
    }
  }, [categoryData]);

  const [createProduct] = useCreateProductMutation();

  // 🔥 Handle Input Change
  const handleInput = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // 🔥 Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      name: values.name,
      description: values.description,
      price: values.regular_price,
      discountPrice: values.discount_price,
      stock: values.quantity,
      sku: values.sku,
      images: values.images || [],
      seoTitle: values.title,
      seoDescription: values.seo_description,
      seoKeywords: values.seo_keywords,
      specifications: values.specification,
      addons: values.addons || [],
      categoryId: values.category_id,
    };

    try {
      await createProduct(payload).unwrap();
      router.push("/admin/product");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to create product");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-white mb-4">Add Product</h1>

      <form
        className="bg-gray-900 p-6 rounded-2xl border border-gray-700 grid grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {/* Image Upload */}
        <div className="col-span-2">
          <label className="text-white font-medium mb-2 block">Images</label>
          <UploadImage
            setDeleteFiles={setDeleteFiles}
            deleteFiles={deleteFiles}
            values={values}
            setValues={setValues}
            errors={errors}
          />
        </div>

        {/* Name */}
        <InputBox label="Name" name="name" onChange={handleInput} />

        {/* Search Keywords */}
        <InputBox
          label="Search Keywords"
          name="search_keywords"
          onChange={handleInput}
        />

        {/* SKU */}
        <InputBox label="SKU" name="sku" onChange={handleInput} />

        {/* Quantity */}
        <InputBox
          label="Quantity"
          name="quantity"
          type="number"
          onChange={handleInput}
        />

        {/* Regular Price */}
        <InputBox
          label="Regular Price"
          name="regular_price"
          type="number"
          onChange={handleInput}
        />

        {/* Discount Price */}
        <InputBox
          label="Discount Price"
          name="discount_price"
          type="number"
          onChange={handleInput}
        />

        {/* Length */}
        <InputBox label="Length (cm)" name="length" type="number" onChange={handleInput} />

        {/* Height */}
        <InputBox label="Height (cm)" name="height" type="number" onChange={handleInput} />

        {/* Width */}
        <InputBox label="Width (cm)" name="width" type="number" onChange={handleInput} />

        {/* Weight */}
        <InputBox label="Weight (kg)" name="weight" type="number" onChange={handleInput} />

        {/* Category */}
        <div>
          <label className="text-white block mb-2">Category</label>
          <select
            name="category_id"
            onChange={handleInput}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600"
          >
            <option>Select Category</option>
            {categories.map((c) => (
              <option value={c.value} key={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <TextArea
          label="Description"
          name="description"
          onChange={handleInput}
          className="col-span-2"
        />

        {/* Specification */}
        <TextArea
          label="Specification"
          name="specification"
          onChange={handleInput}
          className="col-span-2"
        />

        {/* SEO Title */}
        <InputBox label="SEO Title" name="title" onChange={handleInput} />

        {/* SEO Description */}
        <TextArea
          label="SEO Description"
          name="seo_description"
          onChange={handleInput}
          className="col-span-2"
        />

        {/* SEO Keywords */}
        <TextArea
          label="SEO Keywords"
          name="seo_keywords"
          onChange={handleInput}
          className="col-span-2"
        />

        {/* Submit */}
        <button
          type="submit"
          className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;


const InputBox = ({ label, name, type = "text", onChange }: any) => (
  <div>
    <label className="text-white block mb-2">{label}</label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600"
    />
  </div>
);

const TextArea = ({ label, name, onChange, className = "" }: any) => (
  <div className={className}>
    <label className="text-white block mb-2">{label}</label>
    <textarea
      name={name}
      onChange={onChange}
      rows={4}
      className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600"
    ></textarea>
  </div>
);
