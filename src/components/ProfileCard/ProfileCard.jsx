import React, { useEffect, useState } from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './ProfileCard.css'
import * as UserApi from '../../api/UserRequest.js'

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const { id: profileUserId } = useParams()
  const [profileUser, setProfileUser] = useState({
    coverPicture: '',
    profilePicture: '',
    firstname: '',
    lastname: '',
    worksAs: '',
    worksAt: '',
  })
  const [profileUserFollowing, setProfileUserFollowing] = useState([])
  const [profileUserFollowers, setProfileUserFollowers] = useState([])

  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = 'https://media-backend-ymug.vercel.app/images/'

  useEffect(() => {
    const fetchProfileUser = async () => {
      try {
        if (profileUserId === user._id) {
          setProfileUser(user)
        } else {
          const { data } = await UserApi.getUser(profileUserId)
          console.log('Fetched User Data:', data) // Log the fetched user data
          setProfileUser(data)
          setProfileUserFollowing(data.following)
          setProfileUserFollowers(data.followers)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchProfileUser()
  }, [profileUserId, user])

  return (
    <div className='ProfileCard'>
      <div className='profileImages'>
        <img
          src={
            location === 'profilePage'
              ? profileUser.coverPicture
                ? serverPublic + profileUser.coverPicture
                : 'defaultCover.jpg'
              : user.coverPicture
              ? serverPublic + user.coverPicture
              : 'defaultCover.jpg'
          }
          alt=''
        />
        <img
          src={
            location === 'profilePage'
              ? profileUser.profilePicture
                ? serverPublic + profileUser.profilePicture
                : 'defaultProfile.jpg'
              : user.profilePicture
              ? serverPublic + user.profilePicture
              : 'defaultProfile.jpg'
          }
          alt=''
        />
      </div>

      <div className='profileName'>
        <span>{profileUser.firstname + ' ' + profileUser.lastname}</span>
        <span>
          {location === 'profilePage'
            ? profileUser.worksAs
              ? profileUser.worksAs
              : '?'
            : user.worksAs
            ? user.worksAs
            : '?'}{' '}
          At{' '}
          {location === 'profilePage'
            ? profileUser.worksAt
              ? profileUser.worksAt
              : '..'
            : user.worksAt
            ? user.worksAt
            : '..'}
        </span>
      </div>

      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>
              {location === 'profilePage'
                ? profileUserFollowers.filter(Boolean).length
                : user.followers.filter(Boolean).length}
            </span>
            <span>Followers</span>
          </div>
          <div className='vl'></div>
          <div className='follow'>
            <span>
              {location === 'profilePage'
                ? profileUserFollowing.filter(Boolean).length
                : user.following.filter(Boolean).length}
            </span>
            <span>Followings</span>
          </div>
          {location === 'profilePage' && (
            <>
              <div className='vl'></div>
              <div className='follow'>
                <span>
                  {
                    posts.filter((post) => post.userId === profileUser._id)
                      .length
                  }
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === 'profilePage' ? (
        ''
      ) : (
        <span>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/profile/${user._id}`}
          >
            My profile
          </Link>{' '}
        </span>
      )}
    </div>
  )
}

export default ProfileCard
