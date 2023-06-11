import React from 'react'
import "../../../index.css"
import "./Authentication.css"
import { Alert, Box, Button, Container, Input, InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import { apiUrlBase } from '../../service/apiUrlBase'
import axios from 'axios'

export default class Login extends React.Component{
  state = {
    form: {
      email: "",
      password: ""
    },
    error: false,
    isLogged: false,
    errorMsg: ""
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })

  }

  handleLogin = () => {
    const URL = apiUrlBase + 'auth/login'
    axios.post(URL, this.state.form)
    .then(res => {
      if(res.data != null){
        this.setState({
          error: false,
          isLogged: true
        })
      }
    })
    .catch(err => {
      this.setState({
        error: true,
        isLogged: false,
        errorMsg: "Error! Check your credentials."
      })

    })
    
  }

  render(){
    return (
      <Container maxWidth="xl" className='auth-container' sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <h2>Welcome! Log in to continue exploring.</h2>
            <form className='login-form' onSubmit={this.handleSubmit}>
                <h4>Insert your cretendials</h4>
  
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input name='email' onChange={this.handleChange}></Input>      
                </FormControl>
              
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input name='password' onChange={this.handleChange} type='password'></Input>      
                </FormControl>

              {!this.state.isLogged && this.state.error ? <Alert severity='error'>{this.state.errorMsg}</Alert> : this.state.isLogged && !this.state.error ? <Navigate to="/"></Navigate> : null}
              
              <Button onClick={this.handleLogin} variant='contained' sx={{
                width: '150px',
                margin: '0 auto'
              }}>Log In</Button>
              <Link to="/auth/register" className='to-register-link'>You still do not have an account? Sign up</Link>
          </form>
      </Container>
    )
  }
  
}