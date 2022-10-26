import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleCourseDetail = () => {
  const singleCourse = useLoaderData();

  const {photo_url, course_name, description, id} = singleCourse;
  const navigate = useNavigate();
  const handleCheckOutPage = (id) => {
    navigate(`/checkout/${id}`)
  }

    return (
        <div className='container mt-4'>
            <Card >
        <Card.Img style={{  }} className='' variant="top" src={photo_url}/>
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button onClick={()=>handleCheckOutPage(`${id}`)}>Get Premium Access</Button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default SingleCourseDetail;