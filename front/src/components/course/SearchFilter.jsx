import { Box, Button, Container, FormControl, Input, InputLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CoursesGrid from './CoursesGrid';
import axios from 'axios';
import { apiUrlBase } from '../../service/apiUrlBase';
import LoadingSp from '../LoadingSp';
import FilterByType from '../../service/FilterService';

const SearchFilter = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([])

  const [useBackendFilter, setUseBackendFilter] = useState(false)
  const [useFrontendFilter, setUseFrontendFilter] = useState(false)
  const [useWebFilter, setUseWebFilter] = useState(false)
  const [useDbFilter, setUseDbFilter] = useState(false)

  let results = []
  
  function filterTypeBackend(){
      if(!useBackendFilter && !useFrontendFilter && !useWebFilter && !useDbFilter){
        setUseBackendFilter(true)
      }else{
        setUseBackendFilter(false)
      }
  }

  function filterTypeFrontend(){
    if(!useBackendFilter && !useFrontendFilter && !useWebFilter && !useDbFilter){
      setUseFrontendFilter(true)
    }else{
      setUseFrontendFilter(false)
    }
  }

  function filterTypeWeb(){
    if(!useBackendFilter && !useFrontendFilter && !useWebFilter && !useDbFilter){
      setUseWebFilter(true)
    }else{
      setUseWebFilter(false)
    }
  }

  function filterTypeDb(){
    if(!useBackendFilter && !useFrontendFilter && !useWebFilter && !useDbFilter){
      setUseDbFilter(true)
    }else{
      setUseDbFilter(false)
    }
  }

  useEffect(() => {
    const URL = apiUrlBase + "courses/all"
    let token = localStorage.getItem("access_token")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    setIsLoading(true)
    axios.get(URL, config)
    .then(res => {
        setCourses(res.data)
        setIsLoading(false)
    })
    .catch(err => {
        setIsLoading(false)
        throw new Error(err)
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
          borderBottom: '1px solid white'
        }}></Input>
      </FormControl>
      <Box sx={{display: 'flex', gap: '1.5rem', marginBottom: '1.5rem'}}>
        <Button variant={ useBackendFilter ? 'contained' : 'outlined' } onClick={filterTypeBackend}>Backend</Button>
        <Button variant={ useFrontendFilter ? 'contained' : 'outlined' } onClick={filterTypeFrontend}>Frontend</Button>
        <Button variant={ useWebFilter ? 'contained' : 'outlined' } onClick={filterTypeWeb}>Web Development</Button>
        <Button variant={ useDbFilter ? 'contained' : 'outlined' } onClick={filterTypeDb}>Databases</Button>
      </Box>
      {
        !useBackendFilter && !useFrontendFilter && !useDbFilter && !useWebFilter ? <CoursesGrid courses={results}/> 
        : useBackendFilter ? <FilterByType courseList={courses} type={'backend'}/> : useFrontendFilter ? <FilterByType courseList={courses} type={'frontend'}/> 
        : useWebFilter ? <FilterByType courseList={courses} type={'web'}/> : useDbFilter ? <FilterByType courseList={courses} type={'database'}/> : null
      }
    </Container>
  )
}

export default SearchFilter