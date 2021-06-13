import React from 'react'
import './Mypage.css'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Mypage = () => {
    return (
        <div className="mypage__body">
          <Nav/>
          <div className="user-info">

            <div className="user-info__profile">
              <i class="fas fa-user"></i>
            </div>

            <div className="user-info__links">
              <div><a href="#" title="codestates">링크</a></div>
              <div><a href="#" title="github">링크</a></div>
              <div><a href="#" title="coplit">링크</a></div>
            </div>

            <div className="user-info__info-box">
              <div>이름</div>
              <div>닉네임</div>
              <div>기수정보</div>
            </div>

            <div className="user-info__button">
              <div>확인</div>
              <div>수정</div>
            </div>

          </div>
        </div>
    );
};

export default Mypage;