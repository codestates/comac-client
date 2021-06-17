import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Nav from '../components/Nav'
import Post from '../components/Post'
import server from '../apis/server'
import './Home.css'

// const URL = 'http://localhost:3000'

const Home = ({userInfo, accessToken, handleLogout}) => {

  // const history = useHistory();
  if(!accessToken){  
    //유효성검사
    window.location.replace('/')
  }
  
  const [PostList, SetPostList] = useState(null)
  //게시물 리스트 state
  // console.log('토큰',accessToken)
  
  useEffect(()=>{
    //리스트 업데이트마다 리렌더 
    server.get('/post')
    .then(data=>SetPostList(data))
  },[])
    // console.log(PostList)
    return (
      <div className="home__root">
        <div className="home__body">
          <Nav name={'HOME'} handleLogout={handleLogout}/>
          <div className="post-list">
            {PostList ? PostList.data.data.map((postData,index) => {
              return <Post key={index} postData={postData} accessToken={accessToken}/>
            }) : <div className="nothing"></div>

            }
          </div>

        </div>
      </div>
    );
};

export default Home;