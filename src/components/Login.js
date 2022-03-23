import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [value,setValue]=useState({
    email:'',
    password:'',
  });
  const handleChange = (e)=>{
      setValue({
        ...value,
        [e.target.name]:e.target.value,
      })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(value.password,"value")
    auth.login(value.email,value.password);
    auth.
    navigate("/");
  }
  return (
    
    
    <div className='login'>
      <h1>Welcome Back!</h1>
      <div className='input-div'>
        <input type="email" name='email' onChange={handleChange} placeholder='Email'/>
      </div>
      <div className='input-div'>
        <input type="password" name='password' onChange={handleChange} placeholder='Password'/> 
      </div>
      <div className='btn-submit'>
      <button onClick={handleSubmit}>Login</button>
      </div>
      <div>
        <p>Don't have an account? <Link to='/register'>Sign Up</Link> </p>
      </div>
    </div>
    
  )
}

export default Login;