
import axios from 'axios'

export const reimbursementsClient = axios.create({
  baseURL: 'http://ec2-18-221-233-207.us-east-2.compute.amazonaws.com:9050/reimbursements',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
