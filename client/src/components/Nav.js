import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <nav className="nav-bar">
          <a href="#" className="nav-bar__toggle">
            <i class="fas fa-bars"></i>
          </a>
          <div className="nav-bar__links">
            <div>홈</div>
            <div>마이페이지</div>
          </div>

          <div className="nav-bar__page-name">현재 페이지</div>
          <div className="nav-bar__post-btn">글쓰기</div>

        </nav>
    )
}

export default Nav