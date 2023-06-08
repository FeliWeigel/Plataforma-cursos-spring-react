import React from 'react'
import HomePage from './HomePage'
import FeaturedCourses from './FeaturedCourses.jsx'
import Info from './Info'
import Nav from '../Nav'

const Home = () => {
  return (
    <div>
        <Nav/>
        <HomePage/>
        <Info/>
        <FeaturedCourses/>
    </div>
  )
}

export default Home