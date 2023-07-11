import React from 'react'
import "../../../index.css"
import "./Course.css"
import { Box, Card, Typography} from '@mui/material'
import { addCourseToCart } from '../../service/CartService'

const OfferCard = ({course}) => {
    
    function addToCart(){
        addCourseToCart(course)
    }

    return (
        <Card className='slide-top' variant='elevation' sx={{
            width: '92%',
            borderRadius: '8px',
            position: 'relative',
            boxShadow: '0px 0px 10px -1px #06fad583',
            overflow: 'hidden',
            transition: '.4s',
            ":hover": {
                transform: 'scaleY(-.2rem)' 
            }    
        }}>
            <img className='card-img' src={"/uploads/" + course.image} alt="course card image" />
            <Box sx={{
                padding: '.3rem 1rem'
            }}>
                <Typography 
                    typography={'h5'} 
                    fontWeight={600} 
                    fontSize={'1.3rem'} 
                    position={'relative'} 
                    sx={{
                        "::before": {
                            content: '""',
                            position: 'absolute',
                            width: '32px',
                            height: '2px',
                            backgroundColor: 'rgba(11, 201, 156, 0.872)',
                            bottom: '-.05rem'
                        }
                    }}>{course.name}
                </Typography>
                <Typography typography={'h6'} fontSize={'1.2rem'}>Price: ${course.price}</Typography>
                <Typography typography={'h5'} fontSize={'1.15rem'} fontWeight={600}>Difficult: {course.difficult}</Typography>
                <Typography typography={'h6'} fontSize={'1.05rem'}>Type: {course.type}</Typography>
                <Typography typography={'p'} sx={{marginBottom: '.3rem'}} className='card-description'><strong>About this course:</strong> {course.description}</Typography>
                <button onClick={addToCart} className='add-cart-btn'>Add to cart</button>
            </Box>

        </Card>
    )
  
}

export default OfferCard