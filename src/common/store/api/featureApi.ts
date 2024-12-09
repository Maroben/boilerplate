import { createApi } from '@reduxjs/toolkit/query/react'
import { dynamicBaseQuery } from './util/queryUtil'

export const featureApi = createApi({
  reducerPath: 'featureApi',
  baseQuery: dynamicBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
})
