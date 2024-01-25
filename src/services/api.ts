import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantPage: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export default api

export const { useGetRestaurantsQuery, useGetRestaurantPageQuery } = api
