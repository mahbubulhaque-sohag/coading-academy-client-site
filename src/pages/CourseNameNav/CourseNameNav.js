import React from 'react';

const CourseNameNav = ({course}) => {
    const {course_name} = course;
    return (
        <div>
            {course_name}
        </div>
    );
};

export default CourseNameNav;