import { createSlice } from '@reduxjs/toolkit'
import { fetchShop } from '../CartAction'

const initialState = {
  cartItem: [],
  loading: 'idle'
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   setShopItem(state, action){
    state.cartItem = action.payload
   }
    },
    extraReducers: builder => {
      builder
        .addCase(fetchShop.pending, (state) => {
          if (state.loading === 'idle') {
            state.loading = 'pending'
          }
        })
        .addCase(fetchShop.fulfilled, (state, action) => {
          if (state.loading === 'pending') {
            state.loading = 'idle'
            state.cartItem = action.payload
          }
        })
        .addCase(fetchShop.rejected, (state, action) => {
          if (state.loading === 'pending') {
            state.loading = 'idle'
            state.error = action.payload
          }})}
        
})


export const { setCloth } = cartSlice.actions

export default cartSlice.reducer


