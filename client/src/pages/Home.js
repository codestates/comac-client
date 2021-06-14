import React from 'react';
import Nav from '../components/Nav'
import Post from '../components/Post'
import './Home.css'


const Home = () => {
    return (
        <div className="home__body">
           <Nav/>
           <div className="post-list">
            <Post/>
            <Post/>
            <Post/>
           </div>

        </div>
    );
};

export default Home;