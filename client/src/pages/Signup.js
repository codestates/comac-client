import React from 'react';

const Signup = () => {
  return (
        <div className="Signup__body">
          <input type="email" placeholder="아이디"/>
          <input type="password" placeholder="비밀번호"/>
          <input placeholder="비밀번호확인"/>
          <input placeholder="이름(닉네임)"/>
          <input placeholder="기수(IM28)"/>
          <button>회원가입</button>
        </div>
        );
};

export default Signup;