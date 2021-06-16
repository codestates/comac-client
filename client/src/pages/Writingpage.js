import './Writingpage.css'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import server from '../apis/server'

const Writingpage = ( { accessToken }) => {
  const [ content, setContent ] = useState("")
  const [ errMsg, setErrMsg ] = useState("")

  const contentText = (e) => {
    const value = e.target.value
    setContent(value)
  }

  const handleButtonWrite = async () => {
    if(content.length === 0) {
      return setErrMsg('내용을 입력해주세요.') 
    } else {
      return await server.post('/post', {
        content,
      }, {headers: accessToken})
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