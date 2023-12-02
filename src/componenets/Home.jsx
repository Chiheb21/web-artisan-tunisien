
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import GoogleButton from 'react-google-button';
import { auth,provider } from './FirebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import Store from './Store';
function Login ()  {
 const [value , setValue] =useState('')
  const handleClick = ()=>{
    signInWithPopup(auth,provider)
    .then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }
 

  const containerStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setValue(storedEmail);
    }
  }, []);
  return (
    <div style={containerStyle} className="container mt-5">
      <h2>Login</h2>
   
      
      <div className="mt-3">
        <Link to="/SignUp">SIGNUP</Link>
      </div>
      <div>
      {value?<Store/>:
      
        <GoogleButton onClick={handleClick}/>}
      </div>
    </div>
  );
};

export default Login;
