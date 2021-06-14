import React from 'react'
import CommentBox from './CommentBox'
import './PostingAndCommentList.css'

//모달 닫을수있게 Close={Close}
const PostingAndCommentList = ({CloseModal}) =>{
  
    return (
      <div className="overlay-modal">
        <div className="PostingAndCommentList__body">
          <div className="PostingAndCommentList__comment-list">
            <CommentBox/>
            <CommentBox/>
            <CommentBox/>
          </div>
          <div className="PostingAndCommentList__form-box">
            <textarea>댓글작성</textarea>
            <div onClick={()=>
            {
              // 서버로 댓글작성 요청 후 모달 닫기
              CloseModal()
            }
            }>등록</div>
          </div>
        </div>
      </div>
    )

}

export default PostingAndCommentList