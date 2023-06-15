import React, { useEffect, useState } from 'react'
import { apiUrlBase } from '../../../service/apiUrlBase'
import axios from 'axios'
import { Container, List, ListItem, Table } from '@mui/material'
import DeleteCourse from './DeleteCourse'

const CoursesList = () => {
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
            console.log(res.data)
            setCourses(res.data)
        })
    }, [])

    return (
        <Container maxWidth='xl' sx={{
            padding: '3rem',
            backgroundColor: 'rgb(2, 0, 27)',
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh',
            height: 'auto'
        }}>
            <List sx={{
                width: '65%',
                boxShadow: '0px 0px 5px 0px rgba(3, 255, 255, 0.587)',
                padding: '1.5rem'
            }}>
           <ul>
            {courses.map((course) => {
                return ( 
                    <ListItem sx={{
                        borderBottom: '1px solid rgba(3, 255, 255, 0.387)',
                        color: 'rgb(100, 100, 100, .9)',
                        justifyContent: 'space-between'
                    }}>
                        <h3>{course.name}</h3>
                        <h4>{course.type}</h4>
                        <h4>{course.difficult}</h4>
                        <p>{course.price}</p>
                        <h5>{course.duration}</h5>
                        <DeleteCourse courseId={course.id}></DeleteCourse>
                    </ListItem> 
                )
            })}
           </ul>
        </List>
        </Container>
        
    )
}

export default CoursesList