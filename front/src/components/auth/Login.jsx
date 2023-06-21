import React from 'react'
import "../../../index.css"
import "./Authentication.css"
import { Alert, Box, Button, Container, Input, InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import { apiUrlBase } from '../../service/apiUrlBase'
import axios from 'axios'
import Home from "../../pages/Home"
import LoadingSp from '../LoadingSp'
export default class Login extends React.Component{
  state = {
    form: {
      email: "",
      password: ""
    },
    isLoading: false,
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
    this.setState({
      isLoading: true
    })
    axios.post(URL, this.state.form)
    .then(res => {
      if(res.data != null){
        this.setState({
          error: false,
          isLogged: true,
          isLoading: false
        })
        localStorage.setItem("access_token", res.data.access_token)
      }
    })
    .catch(err => {
      this.setState({
        error: true,
        isLogged: false,
        errorMsg: "Invalid email or password. Check your credentials!",
        isLoading: false
      })

    })
    
  }

  render(){
    return (
      <Container maxWidth="xl" className='auth-container login-container' sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%'
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
                  width: '100px',
                  margin: '0 auto'
                }}> {this.state.isLoading ? <LoadingSp/> : "Log In"}
              </Button>
              <Link to="/auth/register" className='to-register-link'>You still do not have an account? Sign up</Link>
          </form>
      </Container>
    )
  }
  
}
