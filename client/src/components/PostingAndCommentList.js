import React,{useState} from 'react'
import CommentBox from './CommentBox'
import './PostingAndCommentList.css'

//모달 닫을수있게 Close={Close}
const PostingAndCommentList = ({CloseModal}) =>{

  const [comment, setComment] = useState("")
  
  
    return (
      <div className="overlay-modal">
        <div className="PostingAndCommentList__body">
          <div className="PostingAndCommentList__comment-list">
            <CommentBox/>
            <CommentBox/>
            <CommentBox/>
          </div>
          <div className="PostingAndCommentList__form-box">
            <textarea onChange={(e)=>setComment(e.target.value)}>{null}</textarea>
            <div onClick={()=>
            { 
              //서버로 댓글작성 요청 후 모달 닫기
              // axios.get(`https://coMac/comment/:post_id/`,{comment})  /*보낼데이터(onchange입력값)*/
                CloseModal()
              // .catch(err=>console.log(err))
            }
            }>등록</div>
          </div>
        </div>
      </div>
    )

}

export default PostingAndCommentList