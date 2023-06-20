import React, { useEffect, useState } from 'react'
import "../../../index.css"
import "./FeaturedCourses.css"
import FeaturedCard from './FeaturedCard.jsx'
import { Container } from '@mui/material'
import axios from 'axios'
import { apiUrlBase } from '../../service/apiUrlBase'

const ExclusiveProducts = () => {

  const [featured, setFeatured] = useState([])
  let token = localStorage.getItem("access_token")
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
  useEffect(() => {
    const URL = apiUrlBase + "courses/all"
    let featuredList = new Array()
    axios.get(URL, config)
    .then(res => {
      featuredList = res.data
      setFeatured(featuredList.slice(0, 6))
    })

  },[])
  return (
    <Container maxWidth='xl'  className='featured-container'>
      <h2>Featured Courses</h2>
      <div className='featured-cards'>
        {featured.map(course => {
          return (
            <FeaturedCard key={course.id} course={course}/>
          )
        })}
      </div>
    </Container>
  )
}

export default ExclusiveProducts