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
         
            <div onClick={()=>handleCourseDetail(`${id}`)}>
            {course_name}
            </div>
       
       </div>
    );
};

export default CourseNameNav;