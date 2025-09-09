import { apiSlice } from "./apiSlice";
import { PRODUCT_URL } from "../constant";
export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create category
    createProduct: builder.mutation({
      query: (body) => ({
        url: PRODUCT_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),

    // Example: fetch all categories
    // categoryApi.ts
    getProducts: builder.query({
      query: ({ page = 1, limit = 10, search = "" }) => ({
        url: PRODUCT_URL,
        method: "GET",
        params: { page, limit, search },
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "GET",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Auto-generated hooks
export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery,
} = productApi;
