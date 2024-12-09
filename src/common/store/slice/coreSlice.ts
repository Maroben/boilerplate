import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '../store'

export interface CoreState {
  translation: string
  locale: string
  serverUrl: string
}

const initialState: CoreState = {
  translation: 'de',
  locale: 'de-CH',
  serverUrl: 'http://localhost:5173',
}

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setTranslation: (state, action: PayloadAction<string>) => {
      state.translation = action.payload
      state.locale = action.payload + '-CH'
    },
  },
})

export const { setTranslation } = coreSlice.actions

export const selectTranslation = (state: AppState) => state.core.translation
export const selectLocale = (state: AppState) => state.core.locale

export const coreReducer = coreSlice.reducer
