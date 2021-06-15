import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Post from '../components/Post'
import './Home.css'


const Home = () => {
  const [PostList, SetPostList] = useState(null)
  //post리스트
  //서버로 요청 

  // useEffect(async()=>{
    //const data = await axios.get('https://coMac/api/post')
    //SetPostList(data)
    //
  // },[PostList])

    return (
      <div className="home__body">
        <Nav name={'HOME'}/>
        <div className="post-list">
          {/* {PostList ? PostList.map((data,index) => {
            return <Post post={post}/>
          }) : <div className="nothing"> 게시물이 없습니다 </div>
          } */ }
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>

      </div>
    );
};

export default Home;