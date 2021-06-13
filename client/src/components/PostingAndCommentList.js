import React from 'react'
import CommentBox from './CommentBox'
import './PostingAndCommentList.css'

const PostingAndCommentList = () =>{
    return (
        <div className="PostingAndCommentList__body">
          <CommentBox/>
          <CommentBox/>
          <CommentBox/>
          <div className="PostingAndCommentList__form-box">
            <textarea>댓글작성</textarea>
            <div>등록</div>
          </div>
        </div>
    )

}

export default PostingAndCommentList