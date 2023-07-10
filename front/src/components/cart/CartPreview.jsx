import "../../../index.css"
import "./Cart.css"
import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'
import Icon from 'react-icons-kit';
import { cart } from 'react-icons-kit/icomoon/cart'
import { Link } from "react-router-dom";
import { calculateTotal } from "../../utils/calculateTotal";

const CartPreview = ({cartList}) => {
  function totalAmount(){
    if(cartList != null){
      return calculateTotal(cartList)
    }
  }
  return (
    <Box sx={{
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      padding: '.7rem',
      width: '245px',
      backgroundColor: 'rgb(1, 1, 59, .90)',
      transition: '.4s',
    }}>
      {cartList != null ? cartList.map(course => {
          return (
            <ListItem key={course.id} sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderBottom: '1px solid rgba(1, 222, 222, 0.312)'}}>
              <Typography typography={'h5'} fontSize={'1.23rem'} fontWeight={600}>{course.name}</Typography>
              <Typography typography={'h6'} fontSize={'1.1rem'}>{course.type}</Typography>
              <Typography typography={'p'}>$ {course.price}</Typography>
            </ListItem>
          )
        }) : 
            <ListItem sx={{
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderBottom: '1px solid rgba(1, 222, 222, 0.312)'}}>
              <Typography typography={'h5'} fontSize={'1.23rem'} fontWeight={600} marginBottom={'.5rem'}>The cart is empty, add course!</Typography>
              <Link to="/courses/offer"><Icon icon={cart} size={23} className='preview-link'></Icon></Link>
            </ListItem>
      }

      <Typography typography={'p'} fontSize={'1.1rem'}>Total: ${totalAmount()}</Typography>
    </Box>
  )
}

export default CartPreview