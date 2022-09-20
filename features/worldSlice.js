import { createSlice } from '@reduxjs/toolkit'
import { LIGHT, DARK } from '../utilities/constants'

const initialState = {
  searchQuery: '',
  theme: LIGHT
}

export const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    getSearch: (state, action) => {
      return { ...state, searchQuery: action.payload }
    },
    toggleTheme: (state, action) => {
      return { ...state, theme: action.payload }
    }
  }
})

export const { getSearch, toggleTheme } = worldSlice.actions
export default worldSlice.reducer
