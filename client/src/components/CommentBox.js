import React from 'react'
import './CommentBox.css'

const CommentBox = () =>{
    return (
        <div className="commentBox__body">

          <div className="comment-user-profile">프로필 사진</div>
          <div className="comment-user-info">

            <div className="comment-user-info__1">
              <div>이름</div>
              <div>기수정보</div>
              <div>게시날짜</div>
              <div className="comment-user-info__2">댓글내용</div>
            </div>
            
          </div>   

        </div>
    )
}

export default CommentBox;