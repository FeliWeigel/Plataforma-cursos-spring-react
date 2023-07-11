import { Box, Container } from '@mui/material'
import React from 'react'
import "./Info.css"
import "../../../index.css"
import infoImg1 from "../../assets/info1.png"
import infoImg2 from "../../assets/info2.png"

const Info = () => {
    
    function contentDisplayAnimation(){
        const img1 = document.getElementById("info-img-1")
        const img2 = document.getElementById("info-img-2")
        const texts = document.getElementById("info-texts")

        if(window.scrollY > 100 && window.scrollY < 600 && !img1.classList.contains("slide-bottom") && !img2.classList.contains("slide-top") && !texts.classList.contains("slide-top")){
            img1.classList.add('slide-bottom')
            img2.classList.add('slide-top')
            texts.classList.add('slide-top')
        }else if(window.scrollY < 100 || window.scrollY > 600 && img1.classList.contains("slide-bottom") && img2.classList.contains("slide-top") && texts.classList.contains("slide-top")) {
            img1.classList.remove('slide-bottom')
            img2.classList.remove('slide-top')
            texts.classList.remove('slide-top')
        }
    }
    
    window.addEventListener('scroll', contentDisplayAnimation)

    return (
        <Container maxWidth='xl' sx={{
            backgroundColor: 'rgb(2, 0, 20)',
            display: 'flex',
            height: '80vh'
        }}> 
            <Box className='images' sx={{
                position: 'relative',
                width: '53%',
            }}>
                <img id='info-img-1' className='info-img-1' src={infoImg1} alt="info img 1" />
                <img id='info-img-2' className='info-img-2' src={infoImg2} alt="info img 2" />
            </Box>
            <Box id="info-texts" className='info-texts' sx={{
                width: "47%",
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