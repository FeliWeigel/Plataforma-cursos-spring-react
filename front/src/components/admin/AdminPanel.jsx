import { Container } from '@mui/material'
import React from 'react'
import { apiUrlBase } from '../../service/apiUrlBase'
import axios from 'axios'
import "../../../index.css"
import "./AdminPanel.css"

const AdminPanel = () => {
  
  axios.get(URL, course, config)
  .then(res => {
    console.log(res.data)
  })
  return (
    <Container maxWidth='xl'>
        <h1>admin panel</h1>
    </Container>
  )
}

export default AdminPanel