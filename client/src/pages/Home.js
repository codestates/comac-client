import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import Post from '../components/Post'
import './Home.css'


const Home = () => {
  const [PostList, SetPostList] = useState(null)
  
  useEffect(()=>{
    //post_id
  })

    return (
      <div className="home__body">

        <Nav/>
        <div className="post-list">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>

      </div>
    );
};

export default Home;