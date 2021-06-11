import React from 'react';
import Nav from '../components/Nav'
import './Home.css'

const Home = () => {
    return (
        <div className="home__body">

           <Nav/>

           <ul className="post-list">
            <li>컴포넌트</li>
            <li>컴포넌트</li>
            <li>컴포넌트</li>
           </ul>

        </div>
    );
};

export default Home;