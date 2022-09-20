import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: ''
}

export const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    getSearch: (state, action) => {
      return { ...state, searchQuery: action.payload }
    }
  }
})

export const { getSearch } = worldSlice.actions
export default worldSlice.reducer
