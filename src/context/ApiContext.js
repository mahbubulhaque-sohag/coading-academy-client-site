import React, { createContext, useEffect, useState } from 'react';

export const ContextApi = createContext();
const ApiContext = ({children}) => {

    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])

    return (
        <div>
            <ContextApi.Provider value={courses}>
            {children}
            </ContextApi.Provider>
        </div>
    );
};

export default ApiContext;