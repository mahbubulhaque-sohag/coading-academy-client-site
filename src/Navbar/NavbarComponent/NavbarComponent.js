import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCode, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const NavbarComponent = () => {

    const userData = useContext(AuthContext);
    const { user, logout } = userData;
    console.log(user);
    const handleLogOut = () => {
        logout()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
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
                        <Link to='/blog' className='me-2'>Blog</Link>

                    </Nav>

                    <Nav>
                        <Link><Button className='me-2 ' variant="outline-primary">theme</Button></Link>
                        
                    
                           
                       
                           
                        
                        <Nav.Link >

                            {
                                user?.uid ? 
                                <>
                                 <span>{user?.displayName}</span>
                                 <Link><Button onClick={handleLogOut} className='mx-2' variant="outline-primary">Logout</Button></Link>
                                </>
                                :
                             <>
                              <Link to='/login'><Button className='me-2' variant="outline-primary">Login</Button></Link>
                                <Link to='/register'><Button className='me-2' variant="outline-primary">Register</Button></Link>
                                </>
                            }
                        </Nav.Link>
                        <Nav.Link >
                            {user?.p ? 
                            <Image style={{height : '40px'}} roundedCircle src={user.photoURL}></Image>
                             : 
                             <FaUser></FaUser>
                             }
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;