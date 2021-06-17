import React,{useState} from 'react'
import CommentBox from './CommentBox'
import './PostingAndCommentList.css'
import server from '../apis/server'
//모달 닫을수있게 Close={Close}
const PostingAndCommentList = ({CommentList, CloseModal, postId, accessToken, OpenModal}) =>{
  const [comment, setComment] = useState("")
  //댓글작성 state


  const handleCommentClick = async () => {
    //서버로 댓글작성 요청 후 모달 닫기
    await server.post(`/comment/${postId}`,{content: comment},{headers: accessToken})  /*보낼데이터(onchange입력값)*/
    CloseModal()
    window.location.reload()
    //댓글작성 -> 1.요청후 꺼짐 2.
  }

    return (
      <div className="overlay-modal" onClick={CloseModal}>
        <div className="PostingAndCommentList__body" onClick={(e) => e.stopPropagation()}>
          <div className="PostingAndCommentList__comment-list">

            {CommentList.data.data && CommentList.data.data.map((commentData,index)=> <CommentBox key={index} commentData={commentData}/>)}

          </div>
          <div className="PostingAndCommentList__form-box">
            <textarea onChange={(e)=>setComment(e.target.value)}>{null}</textarea>
            <div onClick={handleCommentClick} >등록</div>
          </div>
        </div>
      </div>
    )

}

export default PostingAndCommentList