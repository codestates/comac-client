import './Writingpage.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Writingpage = () => {
  return (
    <div className="writing__body">
      <div className="writing__nav">
        <Link id="home" to="/home"> HOME </Link>
        <div>WRITING PAGE</div> 
      </div>
      <div className="writing__text-box">
        <textarea />
        <div className="writing__button">
            작성
        </div>        
      </div>
    </div>
  );
};

export default Writingpage;