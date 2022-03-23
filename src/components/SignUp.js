import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks'

const SignUp = () => {
  const navigate  = useNavigate();
  const auth = useAuth();
  const [value,setValue]=useState({
    email:'',
    password:'',
  });
  const handleChange = (e)=>{
    setValue({...value , [e.target.name]: e.target.value})
    
  }
  const handleClick = async(e)=>{
    e.preventDefault();
    auth.signup(value.email,value.password);
    navigate("/signin");
  }
  
  return (
    <div className='signup'>
      <h1>Welcome Back!</h1>
      
      <div className='input-div'>
        <input placeholder='Email...' type='email' name='email' onChange={handleChange}/>
      </div>
      <div className='input-div'>
        <input placeholder='Password...' type='password' name='password' onChange={handleChange}/>

      </div>
      <div className='btn-submit'>
        <button onClick={handleClick}>Register</button>
      </div>
      <div>
        <p><Link to='/signin'>Click Here</Link> TO Login </p>
      </div>
    </div>
    
  )
}

export default SignUp