"use client";
import React, { useEffect, useState } from "react";
import DynamicForm, { FormField } from "@/components/form/DynamicForm";
import { useRouter } from "next/navigation";
import UploadImage from "@/components/form/Fields/UploadFile";
import { useGetCategoriesQuery } from "@/store/api/categorey";
import { useCreateProductMutation } from "@/store/api/productApi";
const UpdateProduct: React.FC<any> = ({ values, setValues ,handleSubmit}) => {
  const router = useRouter();

  const [deleteFiles, setDeleteFiles] = useState([]);
  const [errors, setErrors] = useState<Record<string, any>>({});
  const [categories, setCategories] = useState<any[]>([]);

  // ✅ Fetch categories
  const { data: categoryData, isLoading } = useGetCategoriesQuery({
    limit: 1000,
  });

  useEffect(() => {
    if (categoryData?.data) {
      const formatted = categoryData.data.map((cat: any) => ({
        label: cat.name,
        value: cat.id,
      }));
      setCategories(formatted);
    }
  }, [categoryData]);
  const [createProduct] = useCreateProductMutation();
 

  // ✅ Define form fields
  const formFields: FormField[] = [
    {
      name: "images",
      label: "Upload Images",
      type: "custom",
      customClass: "col-span-2",
      customRender: () => (
        <div className="col-span-2">
          <UploadImage
            setDeleteFiles={setDeleteFiles}
            deleteFiles={deleteFiles}
            customClass="col-span-2"
            values={values}
            setValues={setValues}
            errors={errors}
          />
        </div>
      ),
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter product name",
    },
    {
      name: "search_keywords",
      label: "Search Keywords",
      type: "text",
      placeholder: "Enter search keywords",
    },
    { name: "sku", label: "SKU", type: "text", placeholder: "Enter SKU" },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      placeholder: "Enter stock quantity",
    },
    {
      name: "regular_price",
      label: "Regular Price",
      type: "number",
      placeholder: "Enter price",
    },
    {
      name: "discount_price",
      label: "Discount Price",
      type: "number",
      placeholder: "Enter discount price",
    },
    {
      name: "length",
      label: "Length (cm)",
      type: "number",
      placeholder: "Enter length",
    },
    {
      name: "height",
      label: "Height (cm)",
      type: "number",
      placeholder: "Enter height",
    },
    {
      name: "width",
      label: "Width (cm)",
      type: "number",
      placeholder: "Enter width",
    },
    {
      name: "weight",
      label: "Weight (kg)",
      type: "number",
      placeholder: "Enter weight",
    },

    {
      name: "category_id",
      type: "select",
      label: "Category",
      placeholder: isLoading ? "Loading..." : "Select Category",
      options: categories,
    },

    {
      name: "description",
      label: "Description",
      type: "richtext",
      placeholder: "Enter description",
    },
    {
      name: "specification",
      label: "Specification",
      type: "textarea",
      placeholder: "Enter specification",
    },

    {
      name: "title",
      label: "SEO Title",
      type: "text",
      placeholder: "Enter title",
    },
    {
      name: "seo_description",
      label: "SEO Description",
      type: "textarea",
      placeholder: "Enter SEO description",
    },
    {
      name: "seo_keywords",
      label: "SEO Keywords",
      type: "textarea",
      placeholder: "Enter SEO keywords",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Add Product</h1>
        <p className="text-gray-400 mt-1">
          Fill in the details below to add a new product.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-6">
        <DynamicForm
          formClassName="grid grid-cols-2 gap-6"
          submitTitle={values.id ? "Update Product" : "Add Product"}
          values={values}
          setValues={setValues}
          errors={errors}
          formFields={
            values.id
              ? [
                  formFields[0],
                  {
                    name: "slug",
                    label: "Slug",
                    type: "text",
                    placeholder: "Enter slug",
                  },
                  ...formFields.slice(1),
                ]
              : formFields
          }
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
