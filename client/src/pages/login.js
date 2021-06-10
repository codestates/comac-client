import React from 'react';

const login = () => {
    
  return (
    <div className="login__body">
      <div className="login__banner">
        
      </div>
      <div className="login__box">
        <div>
          <input type="" placeholder="Write your ID"/>  
        </div>
        <div>
          <input type="password" placeholder="Write your Password"/>
        </div>
        <button>로그인</button>
        <button>회원가입</button>
        <div className="login__social-login-button">
          <button>kakao</button>
          <button>google</button>
        </div>
        <div className="login__error-message">
           에러메세지
        </div>  
      </div>  
    </div>
    );
};
// 이미지는 백그라운드 이미지 사용
export default login;