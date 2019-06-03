
import axios from 'axios'

export const usersClient = axios.create({
  baseURL: 'http://localhost:9050/users',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
