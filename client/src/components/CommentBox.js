import React from 'react'
import './CommentBox.css'

const CommentBox = ({commentData}) =>{
    const {content, createdAt} = commentData
    return (
        <div className="commentBox__body">

          <div className="commentBox__profile">
            <i className="fas fa-user"></i>
          </div>

          <div className="commentBox__contents">
            <div className="commentBox__contents__user-info">
              <div>박지훈</div>
              <div>IM28</div>
              <i className="far fa-thumbs-up"/>
              <div>{createdAt}</div>
            </div>

            <div className="commentBox__contents__comment">{content} </div>
          </div>   
        </div>
    )
}

export default CommentBox;