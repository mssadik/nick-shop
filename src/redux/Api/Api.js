import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    setAddToCart: builder.mutation({
      query: ({ id, data }) => ({
        url: `/carts`,
        method: 'POST',
        body: { quantity: 1, ...data },  
        
      }),
    }),
  }),
})

export const { useSetAddToCartMutation } = cartApi;