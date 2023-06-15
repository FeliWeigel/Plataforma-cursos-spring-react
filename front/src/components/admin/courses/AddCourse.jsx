import axios from 'axios';
import React from 'react'
import "../../../../index.css"
import "../AdminPanel.css"
import { Button, Container, FormControl, Input, InputLabel } from '@mui/material';
import { addCourse } from '../../../service/CourseService';

export default class AddCourse extends React.Component{
    state = {
        course: {
            name: "",
            description: "",
            difficult: "",
            type: "",
            price: 0.0,
            duration: 0
        },
        error: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = async e => {
        await this.setState({
            course: {
                ...this.state.course,
                [e.target.name]: e.target.value
            }
        })
        console.log(e.target.value)
    }

    handleAdd = () => {
        addCourse(this.state.course)
    }

    render(){
        return (
            <Container maxWidth="xl" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
              }}>
                <form className='add-course-form' onSubmit={this.handleSubmit}>
                    <h4>New Course</h4>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input name='name' onChange={this.handleChange}  type='text'></Input>      
                    </FormControl>
                    <FormControl>
                        <InputLabel>Description</InputLabel>
                        <Input name='description' onChange={this.handleChange}  type='text'></Input>      
                    </FormControl>
                    <FormControl>
                        <InputLabel>Difficult</InputLabel>
                        <Input name='difficult' onChange={this.handleChange}  type='text'></Input>      
                    </FormControl>
                    <FormControl>
                        <InputLabel>Type</InputLabel>
                        <Input name='type' onChange={this.handleChange}  type='text'></Input>      
                    </FormControl>
                    <FormControl>
                        <InputLabel>Price</InputLabel>
                        <Input name='price' onChange={this.handleChange}  type='number'></Input>      
                    </FormControl>
                    <FormControl>
                        <InputLabel>Duration</InputLabel>
                        <Input name='duration' onChange={this.handleChange}  type='number'></Input>      
                    </FormControl>
                    <Button onClick={this.handleAdd} 
                        variant='contained' 
                        sx={{
                            width: '150px',
                             margin: '0 auto'
                        }}>Save</Button>
                </form>
            </Container>
        )
  }
}