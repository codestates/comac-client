import './Writingpage.css'
import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import server from '../apis/server'

const Writingpage = ( { accessToken }) => {
  const [ content, setContent ] = useState("")
  const [ errMsg, setErrMsg ] = useState("")
  let history = useHistory();

  if(!accessToken){  
    //유효성검사
    window.location.replace('/')
  }

  const contentText = (e) => {
    const value = e.target.value
    setContent(value)
  }

  const handleButtonWrite = async () => {
    if(content.length === 0) {
      setErrMsg('내용을 입력해주세요.') 
    } else {
      await server.post('/post', {
        content,
      }, {headers: accessToken})
      .then(() => {
        history.push("/home");
        // redirect 로는 작동이 되지를 않아, history를 사용했습니다 !
      })
    }
  }

  return (
    <div className="writing__body">
      <div className="writing__nav">
        <Link id="home" to="/home"> HOME </Link>
        <div>WRITING PAGE</div> 
      </div>
      <div className="writing__text-box">
        <textarea onChange={contentText} value={content} />
        <div className="writing__button" onClick={handleButtonWrite}>
            작성
        </div>
        <div className="writing__errMsg">
          {errMsg}
        </div>        
      </div>
    </div>
  );
};

export default Writingpage;