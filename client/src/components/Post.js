import React from 'react'
import './Post.css'

const Post = () => {
    return (
        <div className="post__body">
          <div className="post__user-info">
            <div><i className="fas fa-user"/></div>
            <div>박지훈</div>
            <div>IM28</div>
            <div>21-06-14</div>
          </div>

          <div className="post__content">
            게시물 내용
          </div>

          <div className="post__btn-icon">
            <div onClick={()=>console.log('PostingAndCommentList 모달 띄우기')}>댓글 (수)</div>
            <div>좋아요</div>
            <div>공유</div>
          </div>

        </div>
    )
}

export default Post