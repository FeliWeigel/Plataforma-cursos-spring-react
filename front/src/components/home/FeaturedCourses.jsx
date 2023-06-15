import React from 'react'
import "../../../index.css"
import "./FeaturedCourses.css"
import CourseCard from './CourseCard.jsx'
import { socialNodejs } from 'react-icons-kit/ionicons/socialNodejs'
import { socialPython } from 'react-icons-kit/ionicons/socialPython'
import { socialJavascript } from 'react-icons-kit/ionicons/socialJavascript'
import { socialHtml5 } from 'react-icons-kit/ionicons/socialHtml5'
import { leaf } from 'react-icons-kit/ionicons/leaf'
import {socialCss3} from 'react-icons-kit/ionicons/socialCss3'
import { Container } from '@mui/material'

const ExclusiveProducts = () => {

  return (
    <Container maxWidth='xl'  className='featured-container'>
      <h2>Featured Courses</h2>
      <div className='featured-cards'>
        <CourseCard icon={socialNodejs} />
        <CourseCard icon={socialPython} />
        <CourseCard icon={socialJavascript} />
        <CourseCard icon={socialHtml5}/>
        <CourseCard icon={socialCss3}/>
        <CourseCard icon={leaf}/>
      </div>
    </Container>
  )
}

export default ExclusiveProducts