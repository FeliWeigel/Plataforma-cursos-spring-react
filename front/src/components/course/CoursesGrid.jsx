import "../../../index.css"
import "./Course.css"
import { Box, Container } from '@mui/material'
import OfferCard from './OfferCard'

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
                        <OfferCard course={course}/>
                    )
                })}
            </Box>

        </Container>
    )
}

export default CoursesGrid