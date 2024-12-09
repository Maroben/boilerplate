import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { featureApi } from './api/featureApi'
import { coreReducer } from './slice/coreSlice'

export const store = configureStore({
  reducer: {
    core: coreReducer,
    [featureApi.reducerPath]: featureApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(featureApi.middleware)
  },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
