import React from 'react';
import './Mypage.css'
import Nav from '../components/Nav'

const Mypage = () => {
    return (
        <div className="mypage__body">
          <Nav/>
          <div className="user-info">

            <div className="user-info__profile">
              <i class="fas fa-user"></i>
            </div>

            <div className="user-info__links">
              <div>링크</div>
              <div>링크</div>
              <div>링크</div>
            </div>

            <div className="user-info__info-box">
              <div>닉네임</div>
              <div>이름</div>
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