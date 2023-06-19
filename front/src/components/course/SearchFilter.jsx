import { Container, FormControl, Input, InputLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CoursesGrid from './CoursesGrid';
import axios from 'axios';
import { apiUrlBase } from '../../service/apiUrlBase';
import LoadingSp from '../LoadingSp';

const SearchFilter = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([])
  let results = []
    
  useEffect(() => {
    setIsLoading(true)
    const URL = apiUrlBase + "courses/all"
    let token = localStorage.getItem("access_token")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    axios.get(URL, config)
    .then(res => {
        setCourses(res.data)
        setIsLoading(false)
    })
    .catch(err => {
        throw new Error(err)
        setIsLoading(false)
    })
  }, [])

  const searcher = (e) => {
      setSearch(e.target.value)
  }

  if(search){
      results = courses.filter( (data) => data.name.toLowerCase().includes(search.toLocaleLowerCase()));  
  }else{
      results = courses
  }
  
  return (
    <Container maxWidth='xl' sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '6rem 2rem 2rem 2rem',
      minHeight: '100vh',
      height: 'auto',
      backgroundColor: 'rgb(2, 0, 27)'
    }}>
      
      {isLoading ? <LoadingSp/> : null}
      <Typography 
        typography={'h4'} 
        color={'white'} 
        marginBottom={'1rem'}>
        Explore the complete offer of courses!
      </Typography>
      <FormControl>
        <InputLabel sx={{color: '#fff'}}>Search</InputLabel>
        <Input onChange={searcher} type='text' sx={{
          color: 'white',
          marginBottom: '1.2rem',
          borderBottom: '1px solid white',
          ":focus": {
            borderBottom: '1px solid red'
          }
        }}></Input>
      </FormControl>
      <CoursesGrid courses={results}/>
    </Container>
  )
}

export default SearchFilter