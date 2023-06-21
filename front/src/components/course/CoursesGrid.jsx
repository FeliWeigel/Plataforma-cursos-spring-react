import "../../../index.css"
import "./Course.css"
import { Box, Container } from '@mui/material'
import OfferCard from './OfferCard'
import { useState } from "react"
import FilterByType from "../../service/FilterService"
import { calculateTotal } from "../../utils/calculateTotal"

const CoursesGrid = ({courses}) => {

    return (
        <Container maxWidth='xl'>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: 'repeat(3, 1fr)',
                rowGap: '2rem'
            }}>
                {courses.map(course => {
                    return (
                        <OfferCard key={course.id} course={course}/>
                    )
                })}

            </Box>

        </Container>
    )
}

export default CoursesGrid