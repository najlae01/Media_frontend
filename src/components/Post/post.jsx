import React from 'react'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import './post.css'
import { useState } from 'react'
import { likePost } from '../../api/PostRequest'

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)
  const { token } = useSelector((state) => state.authReducer.authData)

  const handleLike = () => {
    setLiked((prev) => !prev)
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    likePost(data._id, user._id, axiosConfig)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }

  return (
    <div className='Post'>
      <img
        src={
          data.image
            ? 'https://media-backend-ymug.vercel.app/images/' + data.image
            : ''
        }
        alt=''
      />
      <div className='postReact'>
        <img
          src={liked ? Heart : NotLike}
          alt=''
          style={{ cursor: 'pointer' }}
          onClick={handleLike}
        />
        <img src={Comment} alt='' />
        <img src={Share} alt='' />
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>
      <div className='detail'>
        <span>
          <b>{user.firstname}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
