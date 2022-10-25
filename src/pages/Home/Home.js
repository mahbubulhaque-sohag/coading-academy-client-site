import React, { useContext } from 'react';
import { ContextApi } from '../../context/ApiContext';
import HomeCard from '../HomeCard/HomeCard';


const Home = () => {
    const courses = useContext(ContextApi);

    return (
        <div>
            <h2 className='mb-3 text-center fw-bold'>Our All courses</h2>
           <div className='row row-cols-lg-3 row-cols-sm-1'>
           {
            courses.map(course => <HomeCard
            key={course.id}
            course={course}></HomeCard>)
           }
           </div>
        </div>
    );
};

export default Home;