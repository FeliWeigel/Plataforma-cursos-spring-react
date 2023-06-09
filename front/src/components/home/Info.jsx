import { Box, Container } from '@mui/material'
import React from 'react'
import "./Info.css"
import "../../../index.css"
import infoImg1 from "../../assets/info1.png"
import infoImg2 from "../../assets/info2.png"
import Nav from '../Nav'

const Info = () => {
  return (
    <Container maxWidth="xl" sx={{
        backgroundColor: 'rgb(2, 0, 20)',
        display: 'flex',
        height: '80vh'
    }}> 
        <Box className='images' sx={{
            position: 'relative',
            width: '55%',
        }}>
            <img className='info-img-1' src={infoImg1} alt="info img 1" />
            <img className='info-img-2' src={infoImg2} alt="info img 2" />
        </Box>
        <Box className='info-texts' sx={{
            width: "45%",
            padding: '3rem'
        }}>
            <h3>About online course platform</h3>
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, officiis!</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id deserunt unde dolorum beatae sint soluta saepe ab! 
                Non ducimus ea dolor minus? Dolor quisquam expedita quibusdam quod nesciunt sint ratione et possimus non? Officiis rem ex libero, 
                repellendus, voluptatibus minus unde sunt fuga tempore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quod commodi 
                eum magnam eaque voluptas dolores repudiandae vel soluta recusandae? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. Lorem ipsum dolor sit.</p>
        </Box>
    </Container>
  )
}

export default Info