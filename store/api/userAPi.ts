import { apiSlice } from "./apiSlice";
import { USER_URL } from "../constant";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: USER_URL,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    getAllUser: builder.query({
      query: ({ page = 1, limit = 10, search = "" }) => ({
        url: USER_URL,
        method: "GET",
        params: { page, limit, search },
      }),
    }),
    getUserByID: builder.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export the auto-generated hooks
export const { 
  useSignUpMutation,
  useLoginMutation,
  useGetAllUserQuery,
  useGetUserByIDQuery 
} = userApi;
