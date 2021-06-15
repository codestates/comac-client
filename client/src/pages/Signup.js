import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' 

const Signup = () => {
  const [ id, setId ] = useState("")
  const [ pw, setPw ] = useState("")
  const [ nick, setNick ] = useState("")
  const [ generation, setGeneration ] = useState("")
  
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
  };

  const updateNick = (e) => {
    const {
      target: { value }
    } = e
    setNick(value)
  };

  const updateGeneration = (e) => {
    const {
      target: { value }
    } = e
    setGeneration(value)
  };

  return (
        <div className="signup__body">
          <div className="signup__body-child">
            <span className="signup__sign-text">회원가입을 진행하세요</span>
            <div className="signup__user-info">
              <input type="text" placeholder="아이디" value={id}
              onChange={updateId}/> 
            </div>
            <div className="signup__user-info">
              <input type="password" placeholder="비밀번호" value={pw}
              onChange={updatePw}/> 
            </div>
            <div className="signup__user-info">
              <input type="password" placeholder="비밀번호확인"/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="닉네임" value={nick}
              onChange={updateNick}/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="기수(ex: IM28)" value={generation}
              onChange={updateGeneration}/> 
            </div>
            <button className="signup__button">SIGN UP</button>
            <Link id="login-link" to='/'>이미 아이디가 있으신가요?</Link>
            <div className="signup__error-message">
            에러메세지
            </div>
          </div>
        </div>
        );
};

export default Signup;