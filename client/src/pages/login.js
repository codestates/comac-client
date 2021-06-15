import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Login = ({ handleResponseSuccess }) => {
 
  const [ id, setId ] = useState("")
  const [ pw, setPw ] = useState("")
  const [ errMsg, setErrMsg ] = useState("");
  
  const updateId = (e) => {
    const {
      target: { value }
    } = e
    setId(value)
  };

  const updatePw = (e) => {
    const {
      target: { value }
    } = e
    setPw(value)
  }

  const handleButtonLogin = async () => {
    const url = 'https://localhost:3000/login'
    if(id.length === 0 || pw.length === 0) {
      setErrMsg('Check your ID or PW')
    }else {
      await axios.post(url, {
        username : id,
        password : pw,
      })
      .then((data) => {
        handleResponseSuccess(data.data.data.accessToken) // 토큰 보냄.
      })
      .catch(err => {
        setErrMsg(err)
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
            <input id="id" name="id" type="text" autoComplete="off" required value={id}
              onChange={updateId} />
            <label for="id">ID</label>  
          </div>
          <div className="login__id-pw">
            <input id="pw" name="pw" type="password" autoComplete="off" required value={pw}
              onChange={updatePw} />
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