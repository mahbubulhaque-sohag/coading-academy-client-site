import React, { useContext } from 'react';
import { ContextApi } from '../../context/ApiContext';
import CourseNameNav from '../CourseNameNav/CourseNameNav';

const Courses = () => {
    const cousesData = useContext(ContextApi);
    console.log(cousesData)
    return (
        <div className='container'>
            <h2>this is courses</h2>
            {
                cousesData.map(course => <CourseNameNav
                     key={course.id}
                     course={course}></CourseNameNav>)
            }
        </div>
    );
};

export default Courses;