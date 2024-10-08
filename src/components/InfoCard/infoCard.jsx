import React from 'react'
import { UilPen } from '@iconscout/react-unicons'
import './infoCard.css'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/profileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from '../../api/UserRequest.js'
import { logout } from '../../actions/AuthAction'

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const dispatch = useDispatch()

  const params = useParams()

  const profileUserId = params.id
  var [profileUser, setProfileUser] = useState({})

  const { user } = useSelector((state) => state.authReducer.authData)

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user)
      } else {
        profileUser = await UserApi.getUser(profileUserId)
        setProfileUser(profileUser)
      }
    }
    fetchProfileUser()
  }, [user])
  return (
    <div className='InfoCard'>
      <div className='infoHead'>
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              className='pen'
              onClick={() => {
                setModalOpened(true)
                console.log('modal opened')
              }}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='info'>
        <span>
          <b>Status </b>
        </span>
        <span>
          {profileUser.relationship ? profileUser.relationship : '...'}
        </span>
      </div>
      <div className='info'>
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn ? profileUser.livesIn : '...'}</span>
      </div>
      <div className='info'>
        <span>
          <b>Works as a </b>
        </span>
        <span>{profileUser.worksAs ? profileUser.worksAs : '...'}</span>
      </div>
      <div className='info'>
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt ? profileUser.worksAt : '...'}</span>
      </div>
      {user._id === profileUserId ? (
        <button className='button logout-button' onClick={handleLogout}>
          Logout
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

export default InfoCard
