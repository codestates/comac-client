import React,{useState, useEffect} from 'react'
import PostingAndCommentList from './PostingAndCommentList'
import server from '../apis/server'
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
  
  const {id, username, generation, createdAt, content} = postData
  useEffect(()=>{
    //댓글목록 불러오기 
    server.get(`/comment/${id}`)
    .then(data=>{
      if(data) return SetCommentList(data)
    })
    .catch((err) => { return })
  },[])

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
            <i className="far fa-thumbs-up"/>
            <div onClick={()=>OpenModal()}>댓글</div>
            <i className="far fa-share-square"/>
          </div>
        </div>
    )
}

export default Post