import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Post from '../components/Post'
import './Home.css'
import axios from 'axios'

const URL = 'http://localhost:3000'

const Home = (props) => {
  const [PostList, SetPostList] = useState([])
  
  useEffect(()=>{
    //post_id
    axios.get(`${URL}/api/post`,{
      headers: props.accessToken
    })
    .then((res) => {
      console.log(res.data)
    })
  })

    return (
      <div className="home__body">

        <Nav/>
        <div className="post-list">
          {/* {PostList ? PostList.map((data,index) => {
            return <Post post={post}/>
          }) : <div className="nothing"> 게시물이 없습니다 </div>
          } */ }
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>

      </div>
    );
};

export default Home;