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
<<<<<<< HEAD
          <div>
            <div className="nav-bar__post-btn logout" onClick={ () => handleLogout() } >LOGOUT</div>
            <div className="nav-bar__post-btn"><Link id="writing-link" to="/writing">WRITE</Link></div>
          </div>
        
=======


          <div className="nav-bar__post-btn" onClick={ () => handleLogout() } >LOGOUT</div>
          <div className="nav-bar__post-btn"><Link id="writing-link" to="/writing">WRITE</Link></div>
>>>>>>> 15a7409fe3a12c5d984688cdfd7251789627bcdb

        </nav>
    )
}

export default Nav