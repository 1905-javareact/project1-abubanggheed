
import axios from 'axios'

export const reimbursementsClient = axios.create({
  baseURL: 'http://localhost:9050/reimbursements',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
