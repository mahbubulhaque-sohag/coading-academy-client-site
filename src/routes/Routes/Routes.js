import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SingleCourseDetail from "../../pages/SingleCourseDetails/SingleCourseDetail";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/home',
                element : <Home></Home>
            },
            {
                path: '/login',
                element : <Login></Login>
            },
            {
                path: '/courses',
                element : <Courses></Courses>
            },
            {
                path: '/courseDetails/:id',
                loader: ({params})=> {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                },
                element: <SingleCourseDetail></SingleCourseDetail>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params})=> {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
                },
            }
        ]
    }
])