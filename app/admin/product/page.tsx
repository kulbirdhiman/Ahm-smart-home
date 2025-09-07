"use client";
import React, { useState } from "react";
import CustomTable from "@/components/global/Table";
import Pagination from "@/components/global/pagenation";
import Link from "next/link";
import { useGetProductsQuery } from "@/store/api/productApi";

const Page = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError } = useGetProductsQuery({
    page,
    limit,
    search: "",
  });

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name", sortable: true },
    { header: "SKU", accessor: "sku", sortable: true },
    { header: "Slug", accessor: "slug" },
    { header: "Created At", accessor: "createdAt" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          href="/admin/product/create"
          className="bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg text-white font-medium"
        >
          Create
        </Link>
      </div>

      {/* Table Card */}
      <div className=" ">
        {isLoading ? (
          <p className="text-gray-300">Loading...</p>
        ) : isError ? (
          <p className="text-red-400">Error loading products</p>
        ) : (
          <>
            <CustomTable columns={columns} data={data?.data || []} onDelete={() => {}} />
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
    </div>
  );
};

export default Page;
