import axios from 'axios'

const API = axios.create({ baseURL: 'https://media-backend-ymug.vercel.app' })

export const getTimeLinePosts = (id) => API.get(`/post/${id}/timeline`)

export const getAllPosts = () => API.get(`/post`)

export const likePost = (id, userId, axiosConfig) =>
  API.put(
    `post/${id}/like`,
    { userId: userId },
    {
      headers: axiosConfig.headers,
    }
  )
