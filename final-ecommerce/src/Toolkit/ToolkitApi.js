// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints

export const ToolkitApi = createApi({
  reducerPath: 'ToolkitApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://127.0.0.1:8000/api',
 }),
  endpoints: (builder) => ({
    getCartRemove: builder.mutation({
      mutation: (id) => ({
        url: `/removeItems/${id}`,
        method: 'DELETE'
      }),

    }),
    getCartViem: builder.query({
      query: () => ({
        url: `/MenCat`,
        method: 'GET'
      }),

    }),
    getCartView: builder.query({
      query: () => ({
        url: `/viewCart`,
        method: 'GET',
      }),

    }),
  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCartRemoveMutation, useGetCartViemQuery,useGetCartViewQuery } = ToolkitApi