import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  
    setproduct: (state,action) => {
      state.value =action.payload
    },
  
  },
})

export const { setproduct } = productSlice.actions

export default productSlice.reducer