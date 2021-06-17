import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom' 
import server from '../apis/server'

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    checkPw: '',
    name: '',
    generation: ''
  })
  const [ errMsg, setErrMsg ] = useState('')
  let history = useHistory()
  const handleInputValue = (key) => (e) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value
    })
  }

  // const setImage = () => {
  //   return null
  //   // 이미지 넣을 방법 생각해보기
  // }

  const handleButtonSignup = async () => {

    const {username, password, checkPw, name, generation} = userInfo
    if(!username || !password || !checkPw || !name || !generation) {
      return setErrMsg('모든 정보를 입력해주세요.')
    } else if(password !== checkPw) {
      return setErrMsg('패스워드를 확인하세요.')
    } else {
      await server.post(`/signup`, {
        username,
        password,
        name,
        generation
      })
      .then((res) => {
        setErrMsg('회원가입에 성공하였습니다.')
      })
      .then(() => {
        history.push('/')
      })
      .catch(err => {
        setErrMsg('회원가입이 실패하였습니다.');
      })
    }
  }

  return (
        <div className="signup__body">
          <div className="signup__body-child">
            <span className="signup__sign-text">회원가입을 진행하세요</span>
            <div className="signup__user-info">
              <input type="text" placeholder="아이디" 
              onChange={handleInputValue('username')}/> 
            </div>
            <div className="signup__user-info">
              <input type="password" placeholder="비밀번호" 
              onChange={handleInputValue('password')}/> 
            </div>
            <div className="signup__user-info">
              <input type="password" placeholder="비밀번호확인" 
              onChange={handleInputValue('checkPw')}/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="이름" 
              onChange={handleInputValue('name')}/> 
            </div>
            <div className="signup__user-info">
              <input type="text" placeholder="기수(ex: IM28)" 
              onChange={handleInputValue('generation')}/> 
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