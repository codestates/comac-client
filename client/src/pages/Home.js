import React from 'react';
import Nav from '../components/Nav'
import './Home.css'


const Home = () => {
    return (
        <div className="home__body">
           <Nav/>
           <div className="post-list">
            <div>컴포넌트</div>
            <div>컴포넌트</div>
            <div>컴포넌트</div>
           </div>

        </div>
    );
};

export default Home;