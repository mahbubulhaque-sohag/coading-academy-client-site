import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='container'>
            <h3>Wow you selected the awesome: {data.course_name}</h3>
        </div>
    );
};

export default CheckOut;