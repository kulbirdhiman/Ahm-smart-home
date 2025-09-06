"use client";
import React, { useState } from "react";
import CustomTable from "@/components/global/Table";
import Pagination from "@/components/global/pagenation";
import ModalFullNameDescription from "@/components/admin/categorey/CreateCategoreyModel";
import { useGetCategoriesQuery } from "@/store/api/categorey";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetCategoriesQuery({
    page,
    limit,
    search: "",
  });

  const handleSave = (data: { fullName: string; description: string }) => {
    console.log("Saved Data:", data);
    // here you’d call your createCategory mutation
  };
  const columns = [
    { header: "id", accessor: "id" },
    {
      header: "Name",
      accessor: "name",
      sortable: true,
    },
    { header: "Discption", accessor: "description", sortable: true },
    { header: "slug", accessor: "slug" },
    { header: "Created At", accessor: "createdAt" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold mb-4">Categories</h1>

        <button
          onClick={() => setIsOpen(true)}
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
            <CustomTable columns={columns} data={data?.data || []} onDelete={()=>{}} />
            <Pagination
              currentPage={page}
              totalRecords={data?.pagination?.totalItems || 0}
              totalPages={data?.pagination?.totalPages || 1}
              setCurrentPage={setPage}
              limit={limit}
              showPagination={true} // or remove from component if not needed
              tableDataLength={data?.data?.length || 0}
            />
          </>
        )}
      </div>

      <ModalFullNameDescription
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Page;
