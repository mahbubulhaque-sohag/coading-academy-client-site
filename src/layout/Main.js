import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavbarComponent from '../Navbar/NavbarComponent/NavbarComponent';


const Main = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;