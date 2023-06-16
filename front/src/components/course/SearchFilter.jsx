import { FormControl, Input, InputBase, InputLabel } from '@mui/material'
import React from 'react'

const SearchFilter = () => {
  return (
    <FormControl>
        <InputLabel sx={{color: '#fff'}}>Search</InputLabel>
        <Input type='text' sx={{
          color: 'white',
          marginBottom: '1.2rem',
          borderBottom: '1px solid white',
          ":focus": {
            borderBottom: '1px solid red'
          }
        }}></Input>
    </FormControl>
  )
}

export default SearchFilter