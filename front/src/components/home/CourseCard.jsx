import React from 'react'
import "../../../index.css"
import "./CourseCard.css"
import Icon from 'react-icons-kit'
import { Button, Card } from '@mui/material'
const CourseCard = ({icon}) => {
  
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
        <Icon icon={icon} size={110} className='course-icon'></Icon>
        <h3>Course Name</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quasi fugiat beatae repellendus, 
          dolorum possimus vel ad doloremque reiciendis ea.</p>
        <Button variant='outlined' sx={{
          marginTop: '.7rem',
          fontWeight: 700,
          color: '#6df1e8',
          borderColor: '#2fa59dd4'
        }}>View More</Button>
    </Card>
  )
}

export default CourseCard