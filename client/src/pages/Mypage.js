import React from 'react'
import './Mypage.css'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

const Mypage = ({userInfo}) => {

  // const history = useHistory();

  // if(Object.keys(userInfo).length === 0){
  //   history.push('/')
  // }
  const {username, name, generation, img } = userInfo
  
  return (
      <div className="mypage__body">
        <Nav name={'MYPAGE'}/>
        <div className="user-info">

          <div className="user-info__profile">
            {/* <i className="fas fa-user"></i> */}
            <img src={img} />
          </div>

          <div className="user-info__links">
            <div title="codestates"><a href="https://codestates.com">CODESTATES</a></div>
            <div title="github"><a href="https://github.com">GITHUB</a></div>
            <div title="urclass"><a href="https://urclass.codestates.com/">URCLASS</a></div>
          </div>

          <div className="user-info__info-box">
            <div>{username}</div>
            <div>{name}</div>
            <div>{generation}</div>
          </div>

          <div className="user-info__button">
            <div><Link id="checked" to="/home">확인</Link></div>
            <div>수정</div>
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