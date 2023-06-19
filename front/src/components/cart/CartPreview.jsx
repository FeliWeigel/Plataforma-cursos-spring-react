import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'

const CartPreview = ({cartList}) => {
  let totalAmount = 0;
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
      {cartList.map(course => {
        totalAmount += course.price
        return (
          <ListItem sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderBottom: '1px solid rgba(1, 222, 222, 0.312)'}}>
            <Typography typography={'h5'} fontSize={'1.23rem'} fontWeight={600}>{course.name}</Typography>
            <Typography typography={'h6'} fontSize={'1.1rem'}>{course.type}</Typography>
            <Typography typography={'p'}>$ {course.price}</Typography>
          </ListItem>
        )
      })}

      <Typography typography={'p'} fontSize={'1.1rem'}>Total: ${totalAmount}</Typography>
    </Box>
  )
}

export default CartPreview