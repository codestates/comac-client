import React from 'react'
import './Mypage.css'
import Nav from '../components/Nav'
import {useHistory} from 'react-router-dom'

const Mypage = ({userInfo, accessToken, handleLogout}) => {
  const history = useHistory();

  if(!accessToken){  
    //유효성검사
    window.location.replace('/')
  }

  const {username, name, generation, img } = userInfo
  return (
    
      <div className="mypage__body">
        <Nav name={'MYPAGE'} handleLogout={handleLogout} />
        <div className="user-info">

          <div className="user-info__profile">
            {img.slice(0,11) === "https://lh3" ? <img className="user-info__social-img" src={img} />
            : <img id="user-info__img" src={img}/>}     

          </div>

          <div className="user-info__links">
            <div title="codestates"><a href="https://codestates.com">CODESTATES</a></div>
            <div title="github"><a href="https://github.com">GITHUB</a></div>
            <div title="urclass"><a href="https://urclass.codestates.com/">URCLASS</a></div>
          </div>

          <div className="user-info__info-box">
            <div>name: {username}</div>
            <div>nickname: {name}</div>
            <div>generation: {generation}</div>
          </div>

          <div className="user-info__button">
            <button onClick={() => history.push('/home')}>확인</button>
          </div>

        </div>
      </div>
  );

};

export default Mypage;


            /* {img ? img.map((link,index) => { 
              return ( 
                <div key={index}>
                  <img src={link} alt=""/>
                </div> 
              )}
            ) : null} */