
import axios from 'axios'

export const loginClient = axios.create({
  baseURL: 'http://localhost:9050/login',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
