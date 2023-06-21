import React from 'react'
import "../../../index.css"
import "./Authentication.css"
import { Alert, Box, Button, Container, Input, InputLabel } from '@mui/material'
import { FormControl } from '@mui/material'
import { Link } from 'react-router-dom'
import { apiUrlBase } from '../../service/apiUrlBase'
import axios from 'axios'
import LoadingSp from '../LoadingSp'

export default class Register extends React.Component{
  state = {
    form: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: ""
    },
    isLoading: false,
    error: false,
    isRegistered: false,
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

  handleRegister = () => {
    const URL = apiUrlBase + 'auth/register'
    this.setState({
      isLoading: true
    })
    axios.post(URL, this.state.form)
    .then(res => {
      if(res.data != null){
        this.setState({
          error: false,
          isRegistered: true,
          isLoading: false
        })
      }
    })
    .catch(err => {
      this.setState({
        error: true,
        isRegistered: false,
        errorMsg: err.response.data.message,
        isLoading: false
      })

    })
    
  }

  render(){
    return (
      <Container maxWidth="xl" className='auth-container register-container' sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <h2>First step, register!</h2>
            <form className='register-form' onSubmit={this.handleSubmit}>
              <h4>Insert your cretendials</h4>
              <Box sx={{
                display: 'flex',
                gap: '2rem'
              }}>
                <FormControl>
                  <InputLabel>Firstname</InputLabel>
                  <Input name='firstname' onChange={this.handleChange}  type='text'></Input>      
                </FormControl>
                <FormControl>
                  <InputLabel>Lastname</InputLabel>
                  <Input name='lastname' onChange={this.handleChange} type='text'></Input>
                </FormControl>
              </Box>
  
              <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name='email' onChange={this.handleChange}></Input>      
              </FormControl>
  
              <Box sx={{
                display: 'flex',
                gap: '2rem'
              }}>
                <FormControl>
                  <InputLabel>Password</InputLabel>
                  <Input name='password' onChange={this.handleChange} type='password'></Input>      
                </FormControl>
                <FormControl>
                  <InputLabel>Repeat Password</InputLabel>
                  <Input name='repeatPassword' onChange={this.handleChange} type='password'></Input>
                </FormControl>
              </Box>

              {!this.state.isRegistered && this.state.error ? <Alert severity='error'>{this.state.errorMsg}</Alert> : this.state.isRegistered && !this.state.error ? <Alert severity='success'>You have registered successfully!</Alert> : null}
              
              <Button onClick={this.handleRegister} variant='contained' sx={{
                width: '150px',
                margin: '0 auto'
              }}>{this.state.isLoading ? <LoadingSp/> : "Register"}</Button>
              <Link to="/auth/login" className='to-login-link'>Do you have an already account?</Link>
          </form>
      </Container>
    )
  }
  
}
