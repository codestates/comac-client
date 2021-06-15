import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const Signup = () => {
  const [ id, setId ] = useState("")
  const [ pw, setPw ] = useState("")
  const [ checkPw, setCheckPw ] = useState("")
  const [ name, setName ] = useState("")
  const [ generation, setGeneration ] = useState("")
  const [ errMsg, setErrMsg ] = useState("")
  
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

  const updateCheckPw = (e) => {
    const {
      target: { value }
    } = e
    setCheckPw(value)
  };

  const updateName = (e) => {
    const {
      target: { value }
    } = e
    setName(value)
  };

  const updateGeneration = (e) => {
    const {
      target: { value }
    } = e
    setGeneration(value)
  };

  const setImage = () => {
    return null
    // 이미지 넣을 방법 생각해보기
  }

  const handleButtonSignup = async () => {
    const url = 'http://localhost:3000/api/signup'
    if(id && pw && checkPw && name && generation) {
      pw === checkPw ?
      await axios.post(url, {
        username: id,
        password: pw,
        name,
        generation,
        img: setImage,
      })
      .catch(err => {
        setErrMsg(err);
      })
      : setErrMsg('패스워드를 확인해주세요.')
    }else if((id && pw && checkPw && name && generation).length === 0) {
      setErrMsg('모든 정보를 입력해주세요.')
    } 
  }

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
              <input type="password" placeholder="비밀번호확인" value={checkPw}
              onChange={updateCheckPw}/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="이름" value={name}
              onChange={updateName}/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="기수(ex: IM28)" value={generation}
              onChange={updateGeneration}/> 
            </div>
            <button className="signup__button" onClick={handleButtonSignup}>SIGN UP</button>
            <Link id="login-link" to='/'>이미 아이디가 있으신가요?</Link>
            <div className="signup__error-message">
             {errMsg}
            </div>
          </div>
        </div>
        );
};

export default Signup;