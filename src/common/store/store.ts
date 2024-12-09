import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { salaryApi } from './api/salaryApi'
import { coreReducer } from './slice/coreSlice'

export const store = configureStore({
  reducer: {
    core: coreReducer,
    [salaryApi.reducerPath]: salaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(salaryApi.middleware)
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
