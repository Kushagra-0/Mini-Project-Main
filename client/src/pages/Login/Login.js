import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const LoginPage = () => {
const [loginData,setLoginData] = useState({
  username:'',
  password:'',
})

const navigate = useNavigate();


//submit function
const handleLoginSubmit = async(e) => {
 e.preventDefault();

 try{
  const response = await axios.post('http://localhost:8000/login',loginData);
  const {success,message} = response.data;

  if(success){
    console.log('Login Successfully')
  }
  else{
    console.log(message);
    window.location.href = '/';
  }
 }
 catch(error){
  console.error('Login error',error)
 }
 setLoginData({
    username:'',
    password:''
 })
}

  const handleLoginChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">

          <h3 className="loginLogo">WELLNESS.IO</h3>
          <span className="loginDesc">
            Simple steps for a healthier future
          </span>
        </div>

        <div className="loginRight">

          <form onSubmit={handleLoginSubmit} className='loginBox'>
            <input 
            className='loginInput'
            type='text'
            name='username'
            placeholder='Username'
            value={loginData.username}
            onChange={handleLoginChange}
            required
            />
            <input 
            className='loginInput'
            type='password'
            name='password'
            placeholder='Password'
            value={loginData.password}
            onChange={handleLoginChange}
            required
            />
            <button className='loginButton' type='submit'>Login</button>
            <p className="loginRegisterButton">
              Not registered yet? <Link to ='/register'>Register Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage