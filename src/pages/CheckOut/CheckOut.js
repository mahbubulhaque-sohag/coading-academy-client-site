import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='container'>
            <h1 className='mb-3'>checkout</h1>
            <h3>Wow you selected the awesome: {data.course_name}</h3>
        </div>
    );
};

export default CheckOut;