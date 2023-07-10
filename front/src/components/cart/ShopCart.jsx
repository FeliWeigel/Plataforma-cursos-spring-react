import React, { useState } from 'react'
import "../../../index.css"
import "./Cart.css"
import { deleteCartItem, shopCartList } from '../../service/CartService'
import { Alert, Box, Button, Container, Input, List, ListItem, Typography } from '@mui/material'
import Icon from 'react-icons-kit'
import {shoppingBag} from 'react-icons-kit/fa/shoppingBag'
import {creditCardAlt} from 'react-icons-kit/fa/creditCardAlt'
import {alertCircle} from 'react-icons-kit/feather/alertCircle'

import payment_img1 from "../../assets/payment-method1.png"
import payment_img2 from "../../assets/payment-method2.png"
import payment_img3 from "../../assets/payment-method3.png"
import payment_img4 from "../../assets/payment-method4.png"
import payment_img5 from "../../assets/payment-method5.png"
import payment_img6 from "../../assets/payment-method6.png"

import { Link, Navigate, useNavigate } from 'react-router-dom'
import { calculateTotal } from '../../utils/calculateTotal'
import DeleteCartItem from './DeleteCartItem'
import { mastercardDiscount, paypalDiscount, visaDiscount } from '../../service/PaymentService'


const ShopCart = () => {
  const [cartList, setCartList] = useState(shopCartList())
  const [paymentSelected, setPaymentSelected] = useState(false)
  const [amount, setAmount] = useState(calculateTotal(cartList))
  const [isValidate, setIsValidate] = useState(false)

  function validateSelectPayment(){
    const alert = document.getElementById('select-payment-alert')
    if(!paymentSelected){
      alert.classList.remove('display-none')
      alert.classList.add("display")
      setIsValidate(false)
    }else {
      setIsValidate(true)
      alert.classList.remove('display')
      alert.classList.add("display-none")
    }
  }

  function visaPaymentMethod(){
    setAmount(visaDiscount())
    if(!paymentSelected){
      setPaymentSelected(true)
    }
  }

  function mastercardPaymentMethod(){
    setAmount(mastercardDiscount())
    if(!paymentSelected){
      setPaymentSelected(true)
    }
  }

  function paypalPaymentMethod(){
    setAmount(paypalDiscount())
    if(!paymentSelected){
      setPaymentSelected(true)
    }
  }

  function selectPaymentMethod(){
    setAmount(calculateTotal(cartList))
    if(!paymentSelected){
      setPaymentSelected(true)
    }
  }

  return (
    <Container maxWidth='xl' sx={{
      padding: '6rem 2rem 2rem 2rem',
      minHeight: '100vh',
      height: 'auto',
      backgroundColor: 'rgb(2, 0, 27)'
    }}>
      <Typography 
        typography={'h4'} 
        fontSize={'1.7rem'}  
        color={'#fff'}
        marginBottom={'1.2rem'}
        borderBottom={'1px solid rgba(0, 200, 200, 0.25)'}
        padding={'5px 0'}
        width={'100%'}
        fontStyle={'italic'}
        fontWeight={600}>
          List of selected products to buy
      </Typography>

      <Box sx={{
        display: 'flex', 
        gap: '2rem',
        height: '68vh'}}
      >
        <Box sx={{
          width: '55%'
        }}>
          <List sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {cartList != null ? cartList.map((item) => {
              return (
              <ListItem key={item.id} sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: "0px 0px 2px 0px rgba(0, 200, 200, 0.5)",
                padding: '1rem 1.2rem',
                color: "rgba(255, 255, 255, 0.804)"
              }}>
                <Box sx={{
                  display: 'flex', 
                  alignItems: 'center'
                }}>
                  <img src={"../../../public/uploads/" + item.image} className='cart-item-img' alt="course image" />
                  <Typography typography={'h5'}>{item.name}</Typography>
                </Box>
                <Box sx={{
                  display: 'flex', 
                  alignItems: 'center'
                }}>
                  <Typography typography={'p'} fontSize={'1.4rem'} width={'100px'}>$ {item.price}</Typography>
                  <DeleteCartItem course={item}/>
                </Box>
              </ListItem>
              )
            }): 
            <Box margin={'0 auto'} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0px 0px 4px 0px rgba(0, 255, 255, 0.387)',
              padding: '1rem 2rem',
              width: '70%',
              height: '150px'
            }}>
              <Typography typography={'h5'} color={'#fff'} textAlign={'center'} marginBottom={'.5rem'}>
                The shop cart is empty, add a new course!
              </Typography>
              <Link className='cartlist-link' to="/courses/offer">
                Explore
                <Icon className='cartlist-link-logo' icon={shoppingBag} size={22}></Icon>
              </Link>
            </Box>}
          </List>
        </Box>

        <Box sx={{
          width: '.5px',
          height: '100%',
          backgroundColor: 'rgba(0, 200, 200, 0.2)',
          margin: "0 20px"
        }}></Box>

        <Box id="payment-box" sx={{
          width: '35%'
        }}>
          <Typography 
            typography={'h5'} 
            fontSize={'1.4rem'} 
            color={'#fff'}
            marginBottom={'1rem'}>
              Proceed to checkout and pay
          </Typography>

          <Box sx={{
            display: 'grid',
            justifyContent: 'center',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: '1rem',
            rowGap: '.5rem',
            width: "70%"
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.2rem'
            }}>
              <img className='payment-method-img' src={payment_img1} alt="payment method" />
              <Typography typography={'p'} fontSize={'.75rem'} color={"rgba(255,255,255,0.5)"}>(15% discount)</Typography>
              <Input onFocus={visaPaymentMethod} type='radio' name='paymentMethod'></Input>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.2rem'
            }}>
              <img className='payment-method-img' src={payment_img2} alt="payment method" />
              <Typography typography={'p'} fontSize={'.75rem'} color={"rgba(255,255,255,0.5)"}>(10% discount)</Typography>
              <Input onFocus={mastercardPaymentMethod} type='radio' name='paymentMethod'></Input>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.2rem'
            }}>
              <img className='payment-method-img' src={payment_img3} alt="payment method" />
              <Typography typography={'p'} fontSize={'.75rem'} color={"rgba(255,255,255,0.5)"}>(20% discount)</Typography>
              <Input onFocus={paypalPaymentMethod} type='radio' name='paymentMethod'></Input>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.2rem'
            }}>
              <img className='payment-method-img' src={payment_img4} alt="payment method" />
              <Input onFocus={selectPaymentMethod} type='radio' name='paymentMethod'></Input>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.2rem'
            }}>
              <img className='payment-method-img' src={payment_img5} alt="payment method" />
              <Input onFocus={selectPaymentMethod} type='radio' name='paymentMethod'></Input>
            </Box> 
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.2rem'
            }}>
              <img className='payment-method-img' src={payment_img6} alt="payment method" />
              <Input onFocus={selectPaymentMethod} type='radio' name='paymentMethod'></Input>
            </Box> 
          </Box>

          <div className='payment-bar'></div>
          <Typography typography={'p'} fontSize={'1.1rem'} color={'rgba(255, 255, 255, 0.672)'} marginBottom={'.3rem'}>Add a discount code</Typography>
          
          <Box sx={{
            position:'relative',
            width: '55%'}}>
            <input className='input-discount-code' type="text" placeholder='Enter the code'/>
            <Icon className='code-logo' icon={creditCardAlt} size={17}></Icon>
          </Box>

          <div className='payment-bar'></div>
          <Typography typography={'h5'} fontSize={'1.3rem'} color={'#fff'}>Total Amount: ${amount}</Typography>
          <div id='select-payment-alert' className='display-none select-payment-alert'><Icon className='select-alert-icon' icon={alertCircle} size={21}></Icon>Please, select a payment method to continue</div>

          {isValidate ? <Navigate to="/shop/payment"/> : null}
          <Button onClick={validateSelectPayment} variant='contained' sx={{
            padding: '3px 15px',
            marginTop: '.5rem'
          }}>Go pay</Button>
        </Box>
      </Box>
      
    </Container>
  )
}

export default ShopCart