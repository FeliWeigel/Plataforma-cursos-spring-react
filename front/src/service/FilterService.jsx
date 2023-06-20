import CoursesGrid from "../components/course/CoursesGrid";

export default function FilterByType({courseList, type}){
    let results;
    results = courseList.filter(data => data.type.toLowerCase().includes(type.toLocaleLowerCase()));

    return(
        <div>
            <CoursesGrid courses={results}/>
        </div>
    )
}


   