import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Register = () => {
    const [error, setError] =useState('');
    const {createUser, googleLogIn, updateUserProfile} = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const PhotoUrl = form.PhotoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      toast("You have succuessfully registered!")
      setError('')
      form.reset()
      handleUpdateProfile(name, PhotoUrl)
    })
    .catch(error =>{
      console.log(error)
      setError(error.message)
    })
  }

  const handleUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName : name,
      photoURL : photoURL
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch((error)=>console.error(error))
  }


  const handleGoogleLogin = () => {
    googleLogIn()
    .then((result) =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error))
  }
    return (
        <Form onSubmit={handleRegister} className='w-50  mt-5 container'>
       <ToastContainer />
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control name='name' type="text" placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
      <Form.Label>Photo URL</Form.Label>
      <Form.Control name='PhotoUrl' type="text" placeholder="Enter PhotoUrl" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email" required/>
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' type="password" placeholder="Password" required/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Register
    </Button>
    <Form.Text className="text-danger ms-3">
       {error}
      </Form.Text>
    <p>or</p>
   <div className='d-flex'>
   <Button className='me-2' onClick={handleGoogleLogin}  variant="primary" type="submit">
      Sign in with Google
    </Button>
   <Button  className='' variant="primary" type="submit">
      Sign in with GitHub
    </Button>
   </div>
  </Form>
    );
};

export default Register;