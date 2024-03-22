import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchShop } from '../redux/CartAction';


const CategorySecond = () => {

const dispatch = useDispatch()

//const shopItem = useSelector(state => state.cart.cartItem)

//console.log(shopItem)

    useEffect(() =>{
       dispatch(fetchShop())
      },[dispatch])

      

  return (
    <div>
      
    </div>
  )
}

export default CategorySecond
