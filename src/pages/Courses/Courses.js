import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../context/ApiContext';
import CourseDetails from '../CourseDetails/CourseDetails';
import CourseNameNav from '../CourseNameNav/CourseNameNav';

const Courses = () => {
    const cousesData = useContext(ContextApi);
    


    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-3'>
                    <h2>this is courses</h2>
                    {
                        cousesData.map(course => <CourseNameNav
                            key={course.id}
                            course={course}
                            ></CourseNameNav>)
                    }
                </div>
                <div className='col-lg-9'>
                       <div className='row row-cols-lg-3 row-cols-sm-1'>
                       { cousesData.map(course => <CourseDetails
                       key={course.id}
                       course={course}
                    //    singleCourse={singleCourse}
                    //    handleCourseDetail={handleCourseDetail}
                    ></CourseDetails>)}
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;