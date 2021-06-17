import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({ name, handleLogout }) => {
    return (
        <nav className="nav-bar">
          <div className="nav-bar__links">
            <div><Link id="home-link" to="/home">HOME</Link></div>
            <div><Link id="mypage-link" to="/mypage">MYPAGE</Link></div>
          </div>

          <div className="nav-bar__page-name">{name}</div>

          <div>
            <div className="nav-bar__post-btn logout" onClick={ () => localStorage.clear() } >LOGOUT</div>
            <div className="nav-bar__post-btn"><Link id="writing-link" to="/writing">WRITE</Link></div>
          </div>


        </nav>
    )
}

export default Nav