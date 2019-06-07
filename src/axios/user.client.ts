
import axios from 'axios'

export const usersClient = axios.create({
  baseURL: 'http://ec2-18-221-233-207.us-east-2.compute.amazonaws.com:9050/users',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
