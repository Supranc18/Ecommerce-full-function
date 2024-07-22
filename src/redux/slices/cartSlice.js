import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  
    setcart: (state,action) => {
      state.value.push(action.payload)
    },
  
  },
})

export const { setcart } = cartSlice.actions

export default cartSlice.reducer