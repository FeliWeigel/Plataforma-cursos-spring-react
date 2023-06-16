import React from 'react'
import HomePage from './HomePage'
import FeaturedCourses from './FeaturedCourses.jsx'
import Info from './Info'
import Nav from '../Nav'
import { Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        {localStorage.getItem("access_token") != null ? null : <Navigate to="/auth/login"/>}
        <Nav/>
        <HomePage/>
        <Info/>
        <FeaturedCourses/>
    </div>
  )
}

export default Home