"use client";

import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const UploadImage: React.FC<any> = ({
  values,
  setValues,
  customClass,
  errors,
}) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);

  // update values (example: add color)
  const updateValues = (key: number, value: any) => {
    setValues((prev: any) => {
      const newImages = [...(prev.value || [])];
      newImages[key] = value;
      return { ...prev, images: newImages };
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files?.length) return;

    // Validate before uploading
    for (let i = 0; i < files.length; i++) {
      if (!["image/jpeg", "image/png", "image/webp"].includes(files[i].type)) {
        toast.error("Only JPG, PNG, and WEBP formats allowed ❌");
        return;
      }
      if (files[i].size > MAX_SIZE) {
        toast.error("File size must be under 5MB ❌");
        return;
      }
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      setUploading(true);
      setProgress(0);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_ADDRESS}/api/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percent = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percent);
            }
          },
        }
      );

      const uploadedFiles = response.data?.data;
      if (Array.isArray(uploadedFiles)) {
        const newImages = uploadedFiles.map((file: any) => ({
          image: file?.key || file?.location,
        }));

        setValues((prev: any) => ({
          ...prev,
          images: [...(prev.images || []), ...newImages],
        }));

        toast.success("Images uploaded successfully ✨");
      } else {
        toast.error("Unexpected response format ❌");
      }
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Upload failed ❌";
      toast.error(msg);
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
      setProgress(null);
    }
  };

  return (
    <div className={customClass ?? ""}>
      <label className="block mt-6 text-lg font-semibold tracking-wide">
        Product Images
      </label>

      <div className="grid grid-cols-4 auto-rows-[170px] gap-4 mt-4">
        {/* Show uploaded images */}
        {values.images?.map((img: any, index: number) => (
          <div
            key={index}
            className={`relative group rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900 ${
              index === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <Image
              src={
                img?.image
                  ? img.image.includes("http")
                    ? img.image
                    : `${process.env.NEXT_PUBLIC_S3_IMG_URL || ""}${img.image}`
                  : "/placeholder.png" // <-- local fallback image in /public folder
              }
              alt="Uploaded"
              fill
              sizes="100%"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <button
              type="button"
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 shadow-lg transition"
              onClick={() =>
                setValues((prev: any) => ({
                  ...prev,
                  images: prev.images.filter(
                    (_: any, i: number) => i !== index
                  ),
                }))
              }
            >
              <MinusIcon className="h-4 w-4" />
            </button>
          </div>
        ))}

        {/* Upload new images */}
        <label className="flex flex-col items-center justify-center w-full h-full min-h-[150px] border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:bg-gray-800 transition relative">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.webp"
            className="hidden"
          />
          {uploading ? (
            <span className="text-sm text-gray-400">
              Uploading... {progress ? `${progress}%` : ""}
            </span>
          ) : (
            <PlusIcon className="h-7 w-7 text-gray-400" />
          )}
        </label>
      </div>

      {/* Show validation error */}
      {errors?.images && typeof errors.images === "string" && (
        <p className="text-red-500 mt-2">{errors.images}</p>
      )}

      {/* Show color input if enabled */}
      {values.is_color === "1" && values.images?.length > 0 && (
        <div className="mt-5">
          <label className="block text-lg font-medium">Color</label>
          <input
            onChange={(e) =>
              updateValues(0, { ...values.images[0], color: e.target.value })
            }
            value={values.images[0]?.color || ""}
            className="block w-full border border-gray-700 bg-gray-900 text-white rounded-lg h-10 px-4 py-3 mt-2 focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter color"
          />
          {errors?.images?.[0]?.color_message && (
            <p className="text-red-500 mt-1">
              {errors.images[0].color_message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadImage;
