import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import SingleCourseDetail from "../../pages/SingleCourseDetails/SingleCourseDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/register',
                element : <Register></Register>
            },
            {
                path: '/blog',
                element : <Blog></Blog>
            },
            {
                path: '/courseDetails/:id',
                loader: ({params})=> {
                    return fetch(`https://b610-lerning-platform-server-side-mahbubulhaque-sohag.vercel.app/courses/${params.id}`)
                },
                element: <SingleCourseDetail></SingleCourseDetail>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute> ,
                loader: ({params})=> {
                    return fetch(`https://b610-lerning-platform-server-side-mahbubulhaque-sohag.vercel.app/courses/${params.id}`)
                },
            }
        ]
    }
])