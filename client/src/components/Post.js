import React,{useState, useEffect} from 'react'
import PostingAndCommentList from './PostingAndCommentList'
import axios from 'axios'
import './Post.css'

const Post = ({postData, accessToken}) => {

  const [isOpen, setIsOpen] = useState(false);
  //모달 state 
  const OpenModal = () => {
    setIsOpen(true);
  };//열기 
  const CloseModal = () => {
    setIsOpen(false);
  };//닫기 

  const [CommentList, SetCommentList] = useState(null)
  //댓글목록 state
  
  useEffect(()=>{
    //댓글목록 불러오기 
    axios.get(`http://localhost:3000/comment/${id}`)
    .then(data=>SetCommentList(data))
  },[])

  const {id, username, generation, createdAt, content} = postData
  return (
    
        <div className="post__body">
          {isOpen ? (<div ><PostingAndCommentList postId={id}/*댓글목록 불러올 게시물아이디*/ CommentList={CommentList} CloseModal={CloseModal} accessToken={accessToken}/></div>) : null}
          <div className  ="post__user-info">
            <div><i className="fas fa-user"/></div>
            <div>{username}</div>
            <div>{generation}</div>
            <div>{createdAt}</div>
          </div>
          
          <div className="post__content">
            {content}
          </div>

          <div className="post__btn-icon">
            <div onClick={()=>OpenModal()}>댓글</div>
            <i class="far fa-thumbs-up"/>
            <i class="far fa-share-square"/>
          </div>
        </div>
    )
}

export default Post