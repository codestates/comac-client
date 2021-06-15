import React,{useState} from 'react'
import PostingAndCommentList from './PostingAndCommentList'
import './Post.css'
import axios from 'axios';

const Post = ({data}) => {
  //
  const [isOpen, setIsOpen] = useState(false);
  //state를 이용해서 모달을 열고 닫을수있게 했습니다 
  const OpenModal = () => {
    setIsOpen(true);
  };//열기 
  const CloseModal = () => {
    setIsOpen(false);
  };//닫기 


  
  //data.


  return (
    
        <div className="post__body">
          {isOpen ? (<div ><PostingAndCommentList CloseModal={CloseModal} /></div>) : null}
          <div className  ="post__user-info">
            <div><i className="fas fa-user"/></div>
            <div>박지훈</div>
            <div>IM28</div>
            <div>21-06-14</div>
          </div>
          
          <div className="post__content">
            게시물 내용
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