import React from 'react'
import './Mypage.css'
import Nav from '../components/Nav'
import { useHistory } from 'react-router-dom'

const Mypage = ({userInfo}) => {

  const history = useHistory();

  if(Object.keys(userInfo).length === 0){
    history.push('/')
  }

  const {username, name, generation, img } = userInfo
  
  return (
      <div className="mypage__body">
        <Nav/>
        <div className="user-info">

          <div className="user-info__profile">
            <i className="fas fa-user"></i>
          </div>

          <div className="user-info__links">
            {img ? img.map((link,index) => { 
              return ( 
                <div key={index}>
                  <img src={link} alt=""/>
                </div> 
              )}
            ) : null}
          </div>

          <div className="user-info__info-box">
            <div>{username}</div>
            <div>{name}</div>
            <div>{generation}</div>
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