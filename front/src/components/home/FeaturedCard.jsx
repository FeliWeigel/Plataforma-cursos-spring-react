import React from 'react'
import "../../../index.css"
import "./FeaturedCard.css"
import Icon from 'react-icons-kit'
import { Button, Card } from '@mui/material'
import { socialPython } from 'react-icons-kit/ionicons/socialPython'
import {leaf} from 'react-icons-kit/icomoon/leaf'
import { socialJavascript } from 'react-icons-kit/ionicons/socialJavascript'
import { socialHtml5 } from 'react-icons-kit/ionicons/socialHtml5'
import { mug } from 'react-icons-kit/icomoon/mug'
import { Link } from 'react-router-dom'

const FeaturedCard = ({course}) => {
  function contentDisplayAnimation(){
    const cards = document.querySelectorAll('.course-card')
    if(window.scrollY > 500){
      cards.forEach(card => {
        card.classList.add('slide-top')
      })
    }else {
      cards.forEach(card => {
        card.classList.remove('slide-top')
      })
    }
    
  }

  window.addEventListener('scroll', contentDisplayAnimation)
  return (
    <Card variant='outlined' sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'rgba(2, 0, 27, 0.717)',
      width: '24%',
      padding: '1.8rem',
      boxShadow: '0px 0px 8px 0px #2fa59dd4',
      transition: 'all .4s'
    }} className='course-card'>
        {course.name.toString().includes('Python') ? <Icon icon={socialPython} size={75} className='course-icon'></Icon> : null}
        {course.name.toString().includes('Spring') ? <Icon icon={leaf} size={75} className='course-icon'></Icon> : null}
        {course.name.toString().startsWith('Java') ? <Icon icon={mug} size={75} className='course-icon'></Icon> : null}
        {course.name.toString().startsWith('Functional') ? <Icon icon={mug} size={70} className='course-icon'></Icon> : null}
        {course.name.toString().includes('HTML') ? <Icon icon={socialHtml5} size={75} className='course-icon'></Icon> : null}
        {course.name.toString().includes('Javascript') ? <Icon icon={socialJavascript} size={75} className='course-icon'></Icon> : null}
        <h3>{course.name}</h3>
        <p>{course.description.toString().substring(0, 135)}</p>
        <Link to="/courses/offer">
          <Button variant='outlined' sx={{
            marginTop: '.7rem',
            fontWeight: 700,
            color: '#6df1e8',
            borderColor: '#2fa59dd4'
          }}>View More</Button>
        </Link>
    </Card>
  )
}

export default FeaturedCard