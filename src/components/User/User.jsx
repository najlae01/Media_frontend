import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../actions/userAction'
import { Link } from 'react-router-dom'

const User = ({ person }) => {
  const serverPublic = process.env.Vercel_APP_PUBLIC_FOLDER

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const { token } = useSelector((state) => state.authReducer.authData)

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  )

  const handleFollow = () => {
    if (following) {
      // Dispatch unfollow action
      dispatch(unfollowUser(person._id, user, token))
    } else {
      // Dispatch follow action
      dispatch(followUser(person._id, user, token))
    }

    /* // Update local storage
    const updatedUser = { ...user }
    if (following) {
      // Remove from following and followers
      updatedUser.following = updatedUser.following.filter(
        (id) => id !== person._id
      )
      updatedUser.followers = updatedUser.followers.filter(
        (id) => id !== person._id
      )
    } else {
      // Add to following and followers
      updatedUser.following.push(person._id)
      updatedUser.followers.push(person._id)
    }

    // Update local storage with updated user data
    localStorage.setItem('user', JSON.stringify(updatedUser)) */

    // Update local state
    setFollowing((prev) => !prev)
  }

  return (
    <div className='follower'>
      <div>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + 'defaultProfile.jpg'
          }
          alt=''
          className='followerImg'
        />
        <div className='name'>
          <span>
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={`/profile/${person._id}`}
            >
              {person.firstname} {person.lastname}
            </Link>
          </span>
          <span>{person.worksAs}</span>
        </div>
      </div>
      <button
        className={
          following ? 'button fc-button unfollowButton' : 'button fc-button'
        }
        onClick={handleFollow}
      >
        {following ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default User
