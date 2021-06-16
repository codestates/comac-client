import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import server from '../apis/server'
import { GoogleLogin } from 'react-google-login';
// import axios from 'axios'

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

  const handleGoogleLogin = async googleData => {
    await server.post("/login/google", {
      token: googleData.tokenId,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(data => {
      handleResponseSuccess(data.data.data.accessToken)
      console.log(data)
    })
    .catch(err => {
      setErrMsg('err social login')
    })
  }

  const handleButtonLogin = async () => {

    if(!userInfo.username || !userInfo.password) {
      return setErrMsg('Check your ID or PW')
    }else {
      const { username, password } = userInfo
      return await server.post(`/login`, {
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
            <input id="id" name="id" type="text" autoComplete="off" required
              onChange={handleInputValue('username')} />
            <label for="id">ID</label>  
          </div>
          <div className="login__id-pw">
            <input id="pw" name="pw" type="password" autoComplete="off" required
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
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>google</button>
              )}
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLogin}
            />
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