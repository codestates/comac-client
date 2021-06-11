import React from 'react';


const login = () => {
    
  return (
    <div className="login__body">
      <div className="login__body-child">
        <div className="login__banner">
          이곳은 문구!
        </div>
        <div className="login__box">
          <span>LOG IN</span>
          <div>
            <input type="text" placeholder="아이디 입력"/>  
          </div>
          <div>
            <input type="password" placeholder="●●●●●●●●"/>
          </div>
          <div className="login__basic-login-button">
            <button>로그인</button>
            <button>회원가입</button>
          </div>
          <div className="login__social-login-button">
            <button class="fab fa-google"></button>
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
export default login;