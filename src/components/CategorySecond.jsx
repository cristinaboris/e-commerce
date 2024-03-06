import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchCloth} from '../redux/slices/cartSlice'


const CategorySecond = () => {

const dispatch = useDispatch()

const cartItems = useSelector((state) => state.cart.cartItem)
    useEffect(() =>{
        dispatch(fetchCloth())
      },[])

      

  return (
    <div>
      {
        cartItem.map((item) => {
            {item.id}
        })
      }
    </div>
  )
}

export default CategorySecond
