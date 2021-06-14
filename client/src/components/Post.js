import React from 'react'
import './Post.css'

const Post = () => {
    return (
        <div className="post__body">
            
          <div className="post__user-info">
            <div><i class="fas fa-user"/></div>
            <div>이름</div>
            <div>기수정보</div>
            <div>게시날짜</div>
          </div>

          <div className="post__content">
            게시물 내용
          </div>

          <div className="post__btn-icon">
            <div>댓글 수</div>
            <div>좋아요</div>
            <div>공유</div>
          </div>

        </div>
    )
}

export default Post