import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';


const CourseDetails = ({course}) => {

    const {photo_url, course_name, description, id} = course;
    
    const navigate = useNavigate();

    const handleCourseDetail =(id)=>{
      navigate(`/courseDetails/${id}`)
    }
 
    return (
      
      <div>
          <Card >
        <Card.Img style={{  }} className='' variant="top" src={photo_url}/>
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Card.Text>
            {description.slice(1,100)}...
          </Card.Text>
         
          <Button onClick={()=>handleCourseDetail(`${id}`)}>Course Details</Button>
        </Card.Body>
      </Card>
      </div>
    );
};

export default CourseDetails;