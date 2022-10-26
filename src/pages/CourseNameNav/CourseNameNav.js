import Button from 'react-bootstrap/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const CourseNameNav = ({course}) => {
    const {course_name, id} = course;
    const navigate = useNavigate();


    const handleCourseDetail = (id) => {
    navigate(`/courseDetails/${id}`)
    }
   
        
    return (
       <div>
         
            <Button onClick={()=>handleCourseDetail(`${id}`)}>
            {course_name}
            </Button>
       
       </div>
    );
};

export default CourseNameNav;