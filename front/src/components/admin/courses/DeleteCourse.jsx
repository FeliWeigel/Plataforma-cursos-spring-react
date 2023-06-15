import React, { useEffect } from 'react'
import { deleteCourse } from '../../../service/CourseService'
import {bin2} from 'react-icons-kit/icomoon/bin2'
import Icon from 'react-icons-kit'

export default function DeleteCourse(courseId){

    function handleDelete(){
        deleteCourse(courseId)
        location.reload()
    }

    return (
        <Icon className='rmv-btn' onClick={handleDelete} icon={bin2}>DeleteCourse</Icon>
    )
}
