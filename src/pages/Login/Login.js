import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const[error, setError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/' ;

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast("You have succuessfully login!")
                form.reset();
                setError('')
                navigate(from, {replace: true})
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <Form onSubmit={handleLogin} className='w-50  mt-5 container'>
            <ToastContainer />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger ms-3">
                    {error}
                </Form.Text>
                <div>
                    <p>You are not Registered?</p>
                    <Link to='/register'>Register</Link>
                </div>
        </Form>
    );
};

export default Login;