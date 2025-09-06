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
  }),
});

// Auto-generated hooks
export const { useCreateCategoryMutation, useGetCategoriesQuery } = categoryApi;
