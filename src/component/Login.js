import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'; 
import axios from 'axios';


function Login () {
 
  const navigate=useNavigate( );
  
  // States for registration
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const postData = (e) => {
    e.preventDefault();
    if ( email === '' && password === '') {
      // setError(true);
      setError("Enter the required details");
      return false;
    }
    else if(email===""){
      setError(" Email is required");
      return false;
    }
    else if(password===""){
      setError(" Password is required");
      return false;
    }
     else {
      axios.post(`https://6260e8acf429c20deb977f95.mockapi.io/user`, {
        email,
        password
      })
      
        
    
 setSubmitted(true);
      setError(false);
      navigate("/Mywork");
     
     }
    }
 
  
  return (
    <>
   <div className='row m-0 p-0  '>
    <div className='d-none d-sm-block  col-md-6 col-lg-6 p-0  ' >

  <img src='./images/js-off.jpg' className='img-fluid ' alt="logo"  id="image"></img>
   </div>
      <div className='col-6 col-12 col-md-6 col-lg-6'>
      <div className="form">
      <div className="text-center">
      <img src='./images/je-logo.jpg' className='mt-5'></img>
      <h4 className=' mt-4 '>Log in</h4>
      </div>
     <div  className="col-6 m-auto mt-5">
     <div className="form">
     
     <Form onSubmit={postData}>
  
        <Form.Label htmlFor="inputEmail" className="mb-3 "/>
  <Form.Control type="email" id="inputEmail" onChange={handleEmail}  value={email} placeholder="Email address"/>

 <Form.Label htmlFor="inputPassword5" className="mb-3 "/>
  <Form.Control type="password" id="inputPassword5" onChange={handlePassword} placeholder="Password" value={password}/>
  <p className='text-danger'>{error}</p>
  <Form.Label htmlFor="inputSubmit" className="mb-3 "/>
 
  <button type="submit" size="sm" id="button" className="btn  app-btn-primary w-100 theme-btn mx-auto" >Log In</button>
  

  </Form>
  
    </div>
  </div>
  </div>
   </div>
   </div>
  
  
    </>
  );
    };
  

export default  Login
