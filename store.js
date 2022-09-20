import { configureStore } from '@reduxjs/toolkit'
import worldReducer from './features/worldSlice'

export const store = configureStore({
  reducer: {
    world: worldReducer
  }
})
