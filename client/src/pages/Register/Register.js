import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './register.css'

const RegistrationPage = () => {
    const [registrationData,setRegistrationData] = useState({
        username:'',
        password:''
    })


const handleRegistrationChange = (e) => {
const {name,value} = e.target;

setRegistrationData((prevData) => ({
    ...prevData,
    [name] : value,
}))

}

const handleRegistrationSubmit = async(e) => {
e.preventDefault();
try{
    const response = await axios.post('http://localhost:8000/register',registrationData);
    console.log(response.data);
}
catch(error){
    console.log(error)
}
setRegistrationData({
    username:'',
    password:'',
})
}

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">WELLNESS.IO</h3>
            <span className="loginDesc">
              Simple steps for a healthier future
            </span>
        </div>
        
        <div className="loginRight">
          <div>
            <form onSubmit={handleRegistrationSubmit} className="loginBox">
              <input 
              className='loginInput'
              type='text'
              name='username'
              placeholder='Username'
              value={registrationData.username}
              onChange={handleRegistrationChange}
              required
              />

              <input 
              className='loginInput'
              type='password'
              name='password'
              placeholder='Password'
              value={registrationData.password}
              onChange={handleRegistrationChange}
              required
              />
              <button className='loginButton' type='submit'>Register</button>
              <p className="loginRegisterButton">
                  Already registered? <Link to="/login">Login Here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage;