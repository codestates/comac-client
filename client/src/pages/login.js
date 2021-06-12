import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  const [ idLen, setIdLen ] = useState("")
  
  const warningAlert = () => {
    console.log(idLen);
  }

  return (
    <div className="login__body">
      <div className="login__body-child">
        <div className="login__banner">
          이곳은 문구!
        </div>
        <div className="login__box">
          <span>LOG IN</span>
          <div className="login__id-pw">
            <input id="id" name="id" type="text" autocomplete="off" required />
            <label for="id">ID</label>  
          </div>
          <div className="login__id-pw">
            <input id="pw" name="pw" type="password" autocomplete="off" required />
            <label for="pw">Password</label>
          </div>
          <div className="login__basic-login-button">
            <button id="login-btn" type="submit" onClick={warningAlert}>LOGIN</button>
          </div>
          <div className="login__signup-link">
            <Link id="signup-link" to='/signup'>SIGN UP</Link>
          </div>
          <div className="login__social-login-button">
            <button className="fab fa-google"></button>
          </div>
          <div className="login__error-message">
            error message
          </div>  
        </div>
      </div>  
    </div>
    );
};
// 이미지는 백그라운드 이미지 사용

// ref 사용 (DOM)
export default Login;