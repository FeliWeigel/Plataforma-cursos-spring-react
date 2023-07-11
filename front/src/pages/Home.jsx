import React from 'react'
import HomePage from '../components/home/HomePage'
import FeaturedCourses from '../components/home/FeaturedCourses.jsx'
import Info from '../components/home/Info'
import Nav from '../components/Nav'
import { Navigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        {localStorage.getItem("access_token") != null ? null : <Navigate to="/auth/login"/>}
        <Nav/>
        <HomePage/>
        <Info/>
        <FeaturedCourses/>
        <Footer/>
    </div>
  )
}

export default Home