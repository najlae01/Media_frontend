import axios from 'axios'

const API = axios.create({ baseURL: 'https://media-backend-taupe.vercel.app' })

export const getUser = (userId) => API.get(`/user/${userId}`)

export const updateUser = (id, userData, axiosConfig) =>
  API.put(`/user/${id}`, userData, {
    headers: axiosConfig.headers,
  })

export const getAllUser = () => API.get('/user')

export const followUser = (id, data, axiosConfig) =>
  API.put(`/user/${id}/follow`, data, {
    headers: axiosConfig.headers,
  })

export const unfollowUser = (id, data, axiosConfig) =>
  API.put(`/user/${id}/unfollow`, data, {
    headers: axiosConfig.headers,
  })
