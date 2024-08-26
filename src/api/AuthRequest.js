import axios from 'axios'

const API = axios.create({ baseURL: 'https://media-backend-ymug.vercel.app' })

export const logIn = (formData) =>
  API.post('/auth/login', formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
export const signUp = (formData) =>
  API.post('/auth/register', formData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
