import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sampleApi = createApi({
  reducerPath: "sample",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  tagTypes: ["fetch"],
  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        providesTags: () => {
          return ["fetch"];
        },
        query: () => {
          return {
            url: "/users",
            method: "GET"
            // params:{
            //   id:'1234'
            // }
          };
        }
      }),
      addUser: builder.mutation({
        invalidatesTags: () => {
          return ["fetch"];
        },
        query: (data) => {
          return {
            url: "/users",
            method: "POST",
            body: data
          };
        }
      })
    };
  }
});
export const { useFetchUsersQuery, useAddUserMutation } = sampleApi;
