import React from 'react'
import Nav from '../components/Nav'
import CoursesGrid from '../components/course/CoursesGrid'
import SearchFilter from '../components/course/SearchFilter'

const CourseOffer = () => {
  return (
    <div>
        {localStorage.getItem("access_token") != null ? null : <Navigate to="/auth/login"/>}
        <Nav/>
        <SearchFilter/>
    </div>
  )
}

export default CourseOffer