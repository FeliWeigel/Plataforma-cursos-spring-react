import "../../index.css"
import "./Footer.css"

import { Box, Container, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-icons-kit'

import { ic_shopping_cart_outline } from 'react-icons-kit/md/ic_shopping_cart_outline'
import { ic_home } from 'react-icons-kit/md/ic_home'
import { priceTags } from 'react-icons-kit/icomoon/priceTags'
import {github} from 'react-icons-kit/icomoon/github'
import {filesEmpty} from 'react-icons-kit/icomoon/filesEmpty'
import {socialLinkedin} from 'react-icons-kit/ionicons/socialLinkedin'
import {instagram} from 'react-icons-kit/fa/instagram'
import {facebook} from 'react-icons-kit/fa/facebook'
import {twitter} from 'react-icons-kit/fa/twitter'



const Footer = () => {
  return (
    <Container maxWidth='xl' sx={{
        backgroundColor: 'rgb(2, 0, 20)',
        padding: '1.8rem 0'
    }}>
        <Typography className="footer-title"
        typography={'h4'} fontSize={'1.7rem'} 
        textAlign={'center'} fontStyle={'italic'}
        color={'#fff'} fontWeight={600} marginBottom={'1.2rem'}> IT TRAINING</Typography>

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Box>
                <List>
                    <ListItem>
                        <Link className="footer-nav-link" to="/">
                            <Icon className='footer-nav-icon' icon={ic_home} size={25}></Icon>Home
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link className="footer-nav-link" to="/courses/offer">
                            <Icon className='footer-nav-icon' icon={priceTags} size={24}></Icon>Offer
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link className="footer-nav-link" to="/shop/cart">
                            <Icon className='footer-nav-icon' icon={ic_shopping_cart_outline} size={24}></Icon>My Cart
                        </Link>
                    </ListItem>
                    
                </List>
            </Box>
            <Box>
                <List>
                    <ListItem>
                        <Link target="_blank" className="footer-nav-link" to="http://localhost:8080/swagger-ui/index.html">
                            <Icon className='footer-nav-icon' icon={filesEmpty} size={21}></Icon>API Docs.
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link target="_blank" className="footer-nav-link" to="https://github.com/FeliWeigel/Plataforma-cursos-spring-react">
                            <Icon className='footer-nav-icon' icon={github} size={20}></Icon>Code Repository
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link target="_blank" className="footer-nav-link" to="https://www.linkedin.com/in/felipe-weigel-006614214/">
                            <Icon className='footer-nav-icon' icon={socialLinkedin} size={26}></Icon>About Me
                        </Link>
                    </ListItem>
                    
                </List>
            </Box>
            <Box>
                <List>
                    <ListItem>
                        <Link target="_blank" className="footer-nav-link" to="https://www.instagram.com/">
                            <Icon className='footer-nav-icon' icon={instagram} size={25}></Icon>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link target="_blank" className="footer-nav-link" to="https://twitter.com/">
                            <Icon className='footer-nav-icon' icon={twitter} size={25}></Icon>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link target="_blank" className="footer-nav-link" to="https://es-la.facebook.com/">
                            <Icon className='footer-nav-icon' icon={facebook} size={25}></Icon>
                        </Link>
                    </ListItem>
                    
                </List>
            </Box>
        </Box>

        <Typography 
            typography={'p'} fontSize={'1rem'} 
            textAlign={'center'} color={'#ffffffa8'} 
            fontWeight={400} marginTop={'2rem'}> &copy; 2023. WMDevelopment.</Typography>

    </Container>
  )
}

export default Footer