import React from 'react'
import './CommentBox.css'

const CommentBox = () =>{
  
    return (
        <div className="commentBox__body">

          <div className="commentBox__profile">
            <i class="fas fa-user"></i>
          </div>

          <div className="commentBox__contents">
            <div className="commentBox__contents__user-info">
              <div>박지훈</div>
              <div>IM28</div>
              <div>2021-06-13</div>
            </div>
            <div className="commentBox__contents__comment">댓글내용 </div>
          </div>   

        </div>
    )
}

export default CommentBox;