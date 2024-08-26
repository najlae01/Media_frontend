import axios from 'axios'

const API = axios.create({ baseURL: 'https://media-backend-ymug.vercel.app' })

export const getTimeLinePosts = (id) => API.get(`/posts/${id}/timeline`)

export const likePost = (id, userId, axiosConfig) =>
  API.put(
    `post/${id}/like`,
    { userId: userId },
    {
      headers: axiosConfig.headers,
    }
  )
