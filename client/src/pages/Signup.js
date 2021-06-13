import React from 'react';
import { Link } from 'react-router-dom' 

const Signup = () => {
  return (
        <div className="signup__body">
          <div className="signup__body-child">
            <span className="signup__sign-text">회원가입을 진행하세요</span>
            <div className="signup__user-info">
              <input type="text" placeholder="아이디"/> 
            </div>
            <div className="signup__user-info">
              <input type="password" placeholder="비밀번호"/> 
            </div>
            <div className="signup__user-info">
              <input type="password" placeholder="비밀번호확인"/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="닉네임"/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="기수(ex: IM28)"/> 
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