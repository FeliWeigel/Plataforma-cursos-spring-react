import React, { useState, useEffect } from 'react'
import "../../../index.css"
import "./Course.css"
import axios from 'axios'
import { apiUrlBase } from '../../service/apiUrlBase'
import { Box, Button, Card, Container, Typography} from '@mui/material'
import SearchFilter from './SearchFilter'
const CoursesGrid = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const URL = apiUrlBase + "courses/all"
        let token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(URL, config)
        .then(res => {
            setCourses(res.data)
            console.log(res.data)
        })
        .catch(err => {
            throw new Error(err)
        })
    }, [])

    return (
        <Container maxWidth='xl' sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '6rem 2rem 2rem 2rem',
            minHeight: '100vh',
            height: 'auto',
            backgroundColor: 'rgb(2, 0, 27)'
        }}>
            <SearchFilter/>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: 'repeat(3, 1fr)',
                rowGap: '2rem'
            }}>
                {courses.map(course => {
                    return (
                        <Card variant='elevation' sx={{
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
                                <Typography typography={'h5'} fontWeight={600} fontSize={'1.3rem'}>{course.name}</Typography>
                                <Typography typography={'h6'} fontSize={'1.2rem'}>Price: ${course.price}</Typography>
                                <Typography typography={'h5'} fontSize={'1.15rem'} fontWeight={600}>Difficult: {course.difficult}</Typography>
                                <Typography typography={'h6'} fontSize={'1.05rem'}>Type: {course.type}</Typography>
                                <Typography typography={'p'} sx={{marginBottom: '.5rem'}} className='card-description'><strong>About this course:</strong> {course.description}</Typography>
                                <button className='add-cart-btn'>Add to cart</button>
                            </Box>

                        </Card>
                    )
                })}
            </Box>
        </Container>
    )
}

export default CoursesGrid