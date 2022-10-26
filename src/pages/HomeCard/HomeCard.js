import React from 'react';
import Card from 'react-bootstrap/Card';

const HomeCard = ({course}) => {
  const {course_name, id, photo_url, description  } = course;
  
    return (
        <Card >
        <Card.Img style={{  }} className='' variant="top" src={photo_url}/>
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Card.Text>
            {description.slice(0,100)}...
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default HomeCard;