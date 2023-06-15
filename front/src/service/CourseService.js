import axios from "axios"
import { apiUrlBase } from "./apiUrlBase"


export const addCourse = (course) => {
    const URL = apiUrlBase + "courses/add"
        let token = localStorage.getItem("access_token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post(URL,course, config)
        .then(res => {
        })
        .catch(error => {
            console.log(error)
        })
}


export const deleteCourse = ({courseId}) => {
    let URL = apiUrlBase + "courses/delete/" + courseId
    let token = localStorage.getItem("access_token")
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    axios.delete(URL, config)
    .then(res => {
    })
    .catch(error => {
        console.log(error)
    })

}