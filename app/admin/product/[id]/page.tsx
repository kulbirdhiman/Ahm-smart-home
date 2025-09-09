"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/store/api/productApi";

import UpdateProducts from "@/components/admin/product/updateProduct";
import toast from "react-hot-toast";

const UpdateProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); // /products/update/[id]

  // fetch product by id
  const { data, isLoading } = useGetProductByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();

  const [values, setValues] = useState<any>({});

  // Load product data into form state
  useEffect(() => {
    if (data) {
      const prod = data; // data itself is the product object

      setValues({
        id: prod.id,
        name: prod.name,
        slug: prod.slug,
        search_keywords: prod.search_keywords,
        sku: prod.sku,
        quantity: prod.stock,
        regular_price: prod.price,
        discount_price: prod.discountPrice,
        length: prod.length,
        height: prod.height,
        width: prod.width,
        weight: prod.weight,
        category_id: prod.categoryId,
        description: prod.description,
        specification: prod.specifications,
        title: prod.seoTitle,
        seo_description: prod.seoDescription,
        seo_keywords: prod.seoKeywords,
        images: prod.images || [],
      });
    }
  }, [data]);

  // Handle update
  const handleUpdate = async () => {
    try {
      const payload = {
        id: values.id,
        name: values.name,
        slug: values.slug,
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
        categoryId: values.category_id,
        length: values.length,
        height: values.height,
        width: values.width,
        weight: values.weight,
      };

      await updateProduct({ id, data: payload }).unwrap();
      toast.success("✅ Product updated successfully");
      router.push("/admin/product");
    } catch (error: any) {
      toast.error("❌ Failed to update product");
      console.error(error);
    }
  };

  if (isLoading) return <p className="text-white">Loading product...</p>;

  return (
    <div className="h-screen bg-gray-950 text-white p-6">
      {/* Reuse create product form but pass in values */}
      <UpdateProducts
        handleSubmit={handleUpdate}
        values={values}
        setValues={setValues}
      />
    </div>
  );
};

export default UpdateProductPage;
