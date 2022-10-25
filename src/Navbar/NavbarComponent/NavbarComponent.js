import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container>
            <FaCode />
                <Navbar.Brand href="#home" className='fs-1 fw-bold text-primary'>Coding Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='me-2' to='/'>Home</Link>
                        <Link className='me-2' to='/courses'>Courses</Link>
                        <Link className='me-2'>FAQ</Link>
                        <Link className='me-2'>Blog</Link>
                        
                    </Nav>

                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        <Link><Button className='me-2' variant="outline-primary">theme</Button></Link>
                        <Link><Button className='me-2' variant="outline-primary">Login</Button></Link>
                        <Link><Button className='me-2' variant="outline-primary">Register</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;