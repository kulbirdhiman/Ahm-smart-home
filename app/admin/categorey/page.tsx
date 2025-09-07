"use client";
import React, { useState } from "react";
import CustomTable from "@/components/global/Table";
import Pagination from "@/components/global/pagenation";
import ModalFullNameDescription from "@/components/admin/categorey/CreateCategoreyModel";
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeletecategoryByIdMutation,
  useUpdateCategoreyMutation,
} from "@/store/api/categorey";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    id?: number;
    name?: string;
    description?: string;
  } | null>(null);
  console.log(selectedCategory, "this is slected cate");
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError, refetch } = useGetCategoriesQuery({
    page,
    limit,
    search: "",
  });

  const [createCategory] = useCreateCategoryMutation();
  const [updateCategorey] = useUpdateCategoreyMutation();
  const [deletecategoryById] = useDeletecategoryByIdMutation();

  // Handle create/update
  const handleSave = async (formData: {
    name: string;
    description: string;
  }) => {
    try {
      if (selectedCategory?.id) {
        // Update
        await updateCategorey({
          id: selectedCategory.id,
          ...formData,
        }).unwrap();
      } else {
        // Create
        await createCategory(formData).unwrap();
      }
      setModalOpen(false);
      setSelectedCategory(null);
      refetch();
    } catch (error) {
      console.error("Failed to save category:", error);
    }
  };

  // Handle delete
  const handleDelete = async (categoryId: number) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      await deletecategoryById(categoryId).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name", sortable: true },
    { header: "Description", accessor: "description", sortable: true },
    { header: "Slug", accessor: "slug" },
    { header: "Created At", accessor: "createdAt" },
    {
      header: "Actions",
      accessor: "actions",
      render: (_value: any, row: any) => (
        <div className="flex gap-2">
          <button
            onClick={() => {
              console.log(row, "row object"); // This should log the full row
              setSelectedCategory(row);
              setModalOpen(true);
            }}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Categories</h1>
        <button
          onClick={() => {
            setSelectedCategory(null); // Create mode
            setModalOpen(true);
          }}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Create Category
        </button>
      </div>

      <div className="mt-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading categories</p>
        ) : (
          <>
            <CustomTable
              columns={columns}
              data={data?.data || []}
              onDelete={handleDelete} // optional
            />
            <Pagination
              currentPage={page}
              totalRecords={data?.pagination?.totalItems || 0}
              totalPages={data?.pagination?.totalPages || 1}
              setCurrentPage={setPage}
              limit={limit}
              showPagination={true}
              tableDataLength={data?.data?.length || 0}
            />
          </>
        )}
      </div>

      {/* Modal for Create / Update */}
      <ModalFullNameDescription
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        categoryId={selectedCategory?.id}
        name={selectedCategory?.name}
        description={selectedCategory?.description}
        onSave={handleSave}
      />
    </div>
  );
};

export default Page;
