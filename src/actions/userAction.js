import * as UserApi from '../api/UserRequest'

export const updateUser = (id, userData, token) => async (dispatch) => {
  try {
    console.log(token)
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
        MyCustomHeader1: '1',
      },
    }
    const data = await UserApi.updateUser(id, userData, axiosConfig)
    dispatch({ type: 'UPDATING_SUCCESS', data: data })
  } catch (error) {
    console.log(error)
    dispatch({ type: 'UPDATING_FAIL' })
  }
}

export const followUser = (id, data, token) => async (dispatch) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  }
  dispatch({ type: 'FOLLOW_USER' })
  UserApi.followUser(id, data, axiosConfig)
}

export const unfollowUser = (id, data, token) => async (dispatch) => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  }
  dispatch({ type: 'UNFOLLOW_USER' })
  UserApi.unfollowUser(id, data, axiosConfig)
}
