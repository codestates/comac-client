import React,{useState, useEffect} from 'react'
import CommentBox from './CommentBox'
import './PostingAndCommentList.css'
import axios from 'axios'
//모달 닫을수있게 Close={Close}
const PostingAndCommentList = ({CommentList, CloseModal, postId, accessToken}) =>{
  const [comment, setComment] = useState("")
  //댓글작성 state

    return (
      <div className="overlay-modal">
        <div className="PostingAndCommentList__body">
          <div className="PostingAndCommentList__comment-list">

            {CommentList.data.data.map((commentData,index)=> <CommentBox key={index} commentData={commentData}/>)}

          </div>
          <div className="PostingAndCommentList__form-box">
            <textarea onChange={(e)=>setComment(e.target.value)}>{null}</textarea>
            <div onClick={async()=>
            { 
              //서버로 댓글작성 요청 후 모달 닫기
              axios.post(`http://localhost:3000/comment/${postId}`,{content: comment},{header: accessToken})  /*보낼데이터(onchange입력값)*/
              CloseModal()
              //댓글작성 -> 1.요청후 꺼짐 2.
            }
            }>등록</div>
          </div>
        </div>
      </div>
    )

}

export default PostingAndCommentList