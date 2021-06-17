import React,{useState} from 'react'
import server from '../apis/server'
import './CommentBox.css'

const CommentBox = ({commentData, accessToken}) =>{
    const {id, content, createdAt, username , generation, img} = commentData
    

        /* 좋아요버튼 관련 */
        const [like, setlike ] = useState(false)
        const likeAndUnlike = async() =>{
          // 1. like unlike 
          // 2. state로 관리
          if(!like){
            await server.post(`/comment/${id}/like`, {},{headers: accessToken})
            .then(()=>setlike(true))
            return
          }
          await server.post(`/comment/${id}/unlike`, {}, {headers: accessToken})
          .then(()=> setlike(false))
        }
        /* 좋아요버튼 관련 */
    
    return (
        <div className="commentBox__body">

          <div className="commentBox__profile">
            <img src={img}/>
          </div>
          <div className="commentBox__contents">
            <div className="commentBox__contents__user-info">
              <div>{username}</div>
              <div>{generation}</div>
              {like ? (<i className="far fa-thumbs-up commentLike" onClick={likeAndUnlike}/>) : (<i className="far fa-thumbs-up commentUnLike" onClick={likeAndUnlike}/>)}
              <div>{createdAt.slice(0,10)}</div>
            </div>

            <div className="commentBox__contents__comment">{content} </div>
          </div>   
        </div>
    )
}

export default CommentBox;