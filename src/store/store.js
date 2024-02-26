import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './slices/characterSlice'

export const store = configureStore({
  reducer: {
    character: characterSlice
  },
})
