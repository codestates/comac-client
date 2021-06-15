import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({ name }) => {
    return (
        <nav className="nav-bar">
          <a href="#" className="nav-bar__toggle">
            <i class="fas fa-bars"></i>
          </a>
          <div className="nav-bar__links">
            <div><Link id="home-link" to="/home">HOME</Link></div>
            <div><Link id="mypage-link" to="/mypage">MYPAGE</Link></div>
          </div>

          <div className="nav-bar__page-name">{name}</div>
          <div className="nav-bar__post-btn"><Link to="/writing">WRITE</Link></div>

        </nav>
    )
}

export default Nav