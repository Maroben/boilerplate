import { ISalaryFinder } from '@modules/SalaryModule/interface'
import { createApi } from '@reduxjs/toolkit/query/react'
import { JobsMock } from './mock/JobsMock'
import { dynamicBaseQuery } from './util/queryUtil'

export const salaryApi = createApi({
  reducerPath: 'salaryApi',
  baseQuery: dynamicBaseQuery,
  tagTypes: ['SalaryInformation'],
  endpoints: (builder) => ({
    getJobs: builder.query<string[], void>({
      query: () => ({
        url: 'salary/jobs',
        method: 'GET',
      }),
      transformErrorResponse: () => {
        // Returning Mock Data
        return JobsMock
      },
      providesTags: ['SalaryInformation'],
    }),

    getMinimumSalary: builder.query<number, ISalaryFinder>({
      query: (form: ISalaryFinder) => ({
        url: 'salary/minimum-salary',
        method: 'POST',
        params: form,
      }),
      transformErrorResponse: () => {
        // Returning Mock Data
        return 20 + Math.random() * (40 - 20)
      },
    }),
  }),
})

export const { useGetJobsQuery, useLazyGetMinimumSalaryQuery } = salaryApi
