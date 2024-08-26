import React from 'react'
//import { PostsData } from "../../Data/PostsData";
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Post/post'
import './posts.css'
import { useEffect } from 'react'
import { getAllPosts, getTimeLinePosts } from '../../actions/PostAction'
import { useParams } from 'react-router-dom'

const Posts = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer)
  const params = useParams()
  // useEffect(() => {
  //   dispatch(getTimeLinePosts(user._id))
  // }, [dispatch, user._id])

  useEffect(() => {
    posts = dispatch(getAllPosts())
  }, [dispatch])

  if (!posts) return 'No posts yet!'
  if (params.id && posts) {
    posts = posts.filter((post) => post.userId === params.id)
  }

  return (
    <div className='Posts'>
      {loading
        ? 'Fetching Posts...'
        : posts.map((post, id) => {
            return <Post key={post.userId} data={post} id={id} />
          })}
    </div>
  )
}

export default Posts
