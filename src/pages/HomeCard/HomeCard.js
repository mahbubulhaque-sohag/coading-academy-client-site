import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomeCard = ({course}) => {
  const {course_name, id, photo_url, description  } = course;
  console.log(course_name, id, photo_url, description );
    return (
        <Card >
        <Card.Img style={{  }} className='' variant="top" src={photo_url}/>
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Card.Text>
            {description.slice(0,100)}...
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
};

export default HomeCard;