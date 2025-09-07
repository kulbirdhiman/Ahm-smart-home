import { apiSlice } from "./apiSlice";
import { CATEGORY_URL } from "../constant";
export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create category
    createCategory: builder.mutation({
      query: (body) => ({
        url: CATEGORY_URL,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),

    // Example: fetch all categories
    // categoryApi.ts
    getCategories: builder.query({
      query: ({ page = 1, limit = 10, search = "" }) => ({
        url: CATEGORY_URL,
        method: "GET",
        params: { page, limit, search },
      }),
    }),
    getcategoryById: builder.query({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "GET",
      }),
    }),
    updateCategorey: builder.mutation({
      query: ({ id, data }) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    deletecategoryById: builder.mutation({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Auto-generated hooks
export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoreyMutation,
  useGetcategoryByIdQuery,
  useDeletecategoryByIdMutation,
} = categoryApi;
