import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const URL = 'http://localhost:3000'

const Login = ({ handleResponseSuccess }) => {
 
  const [userInfo, setUserInfo] = useState({
    username : '',
    password : ''
  })
  const [ errMsg, setErrMsg ] = useState("");
  
  const handleInputValue = (key) => (e) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value
    })
  }

  const handleButtonLogin = async () => {

    if(!userInfo.username || !userInfo.password) {
      return setErrMsg('Check your ID or PW')
    }else {
      const { username, password } = userInfo
      return await axios.post(`${URL}/api/login`, {
        username,
        password
      })
      .then((data) => {
        handleResponseSuccess(data.data.data.accessToken) // 토큰 보냄.
      })
      .catch(err => {
        return setErrMsg('Check your ID or PW')
      })
    }
  }

  
  
  return (
    <div className="login__body">
      <div className="login__body-child">
        <div className="login__header">
          COMAC
        </div>
        <div className="login__banner">
          TEAM{'\n'}  BUILDING{'\n'}     FLATFORM
        </div>
        <div className="login__box">
          <span>LOG IN</span>
          <div className="login__id-pw">
            <input id="id" name="id" type="text" autoComplete="off"
              onChange={handleInputValue('username')} />
            <label for="id">ID</label>  
          </div>
          <div className="login__id-pw">
            <input id="pw" name="pw" type="password" autoComplete="off"
              onChange={handleInputValue('password')} />
            <label for="pw">Password</label>
          </div>
          <div className="login__basic-login-button">
            <button id="login-btn" type="submit" onClick={handleButtonLogin}>LOGIN</button>
          </div>
          <div className="login__signup-link">
            <Link id="signup-link" to='/signup'>SIGN UP</Link>
          </div>
          <div className="login__social-login-button">
            <i className="fab fa-google"></i>
          </div>
          <div className="login__error-message">
            {errMsg}
          </div>  
        </div>
      </div>  
    </div>
    );
};
// 이미지는 백그라운드 이미지 사용

// ref 사용 (DOM)
export default Login;