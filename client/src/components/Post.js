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
  
  const {id, username, generation, createdAt, content, post_likes , img} = postData
  useEffect(()=>{
    //댓글목록 불러오기
    server.get(`/comment/${id}`)
    .then(data=>{
      if(data) return SetCommentList(data)
    })
    .catch((err) => { return })
  },[id])
  
  
  const [Like, setLike ] = useState(() => {
    server.post(`/post/${id}/islike`, null, {
      headers: accessToken
    })
    .then((res) => {
      if(res.data.data) {
        setLike(true)
      } else {
        setLike(false)
      }
    })
  })
  // useEffect(() => {
  //   window.location.reload()
  // },[Like])
  
  const likeAndUnlike = async() =>{
    // 1. like unlike 
    // 2. state로 관리
    if(!Like){
      await server.post(`/post/${id}/like`, {},{headers: accessToken})
      .then(()=>setLike(true))
    } else {
      await server.post(`/post/${id}/unlike`, {}, {headers: accessToken})
        .then(()=> setLike(false))
    }
    window.location.reload()
  }

  return (
        
        <div className="post__body">

          {isOpen ? (<div className="hi"><PostingAndCommentList postId={id}/*댓글목록 불러올 게시물아이디*/ CommentList={CommentList} CloseModal={CloseModal} OpenModal={OpenModal} accessToken={accessToken} /></div>) : null}
    
          <div className  ="post__user-info">
            <div><img src={img} alt="" className="fas fa-user"/></div>
            <div>{username}</div>
            <div>{generation}</div>
            <div>{createdAt.slice(0,10)}</div>
          </div>
          
          <div className="post__content">
            {content}
          </div>
          <div className="post__btn-icon">
            <div>
            {post_likes}
            {Like ? (<i className="far fa-thumbs-up like" onClick={likeAndUnlike}/>) : (<i className="far fa-thumbs-up unlike" onClick={likeAndUnlike}/>)}
            </div>
            <div onClick={()=>OpenModal()}>댓글</div>
            <i className="far fa-share-square"/>
          </div>
        </div>
    )
}

export default Post