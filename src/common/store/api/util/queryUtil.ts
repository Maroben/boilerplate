import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  baseQueryApi,
  extraOptions,
) => {
  const baseUrl = (baseQueryApi.getState() as { serverUrl: string }).serverUrl
  const rawBaseQuery = fetchBaseQuery({ baseUrl })
  return rawBaseQuery(args, baseQueryApi, extraOptions)
}
