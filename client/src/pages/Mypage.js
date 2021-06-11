import React from 'react';
import './Mypage.css'
import Nav from '../components/Nav'

const Mypage = () => {
    return (
        <div className="mypage__body">
          <Nav/>
          <div className="user-info">

            <div className="user-info__profile">
              <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
            </div>

            <div className="user-info__links">
              <div>링크</div>
              <div>링크</div>
              <div>링크</div>
            </div>

            <div className="user-info__info">
              <div>
                정보
              </div>
              <form>
                <button>확인</button>
                <button>수정</button>
              </form>
            </div>

          </div>
        </div>
    );
};

export default Mypage;