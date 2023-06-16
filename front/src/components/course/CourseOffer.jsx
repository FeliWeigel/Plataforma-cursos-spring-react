import React from 'react'
import Nav from '../Nav'
import CoursesGrid from './CoursesGrid'

const CourseOffer = () => {
  return (
    <div>
        {localStorage.getItem("access_token") != null ? null : <Navigate to="/auth/login"/>}
        <Nav/>
        <CoursesGrid/>
    </div>
  )
}

export default CourseOffer