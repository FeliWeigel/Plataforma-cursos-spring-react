import React from 'react'
import Nav from '../components/Nav'
import ShopCart from '../components/cart/ShopCart'


const Cart = () => {
  return (
    <div>
        {localStorage.getItem("access_token") != null ? null : <Navigate to="/auth/login"/>}
        <Nav/>
        <ShopCart/>
    </div>
  )
}

export default Cart