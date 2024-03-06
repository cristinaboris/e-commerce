import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  totalAmount: 0,
  totalQuanity: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   setCloth(state, action){
    state.cartItem = action.payload
   }

    },
})


export const { setCloth } = cartSlice.actions

export default cartSlice.reducer


export const fetchCloth  = () => {
    return async function fetchClothThunk(dispatch){
   const response = await fetch('https://fakestoreapi.com/products')
   const cloth = await response.json();
   dispatch(setCloth(cloth))
    }
}