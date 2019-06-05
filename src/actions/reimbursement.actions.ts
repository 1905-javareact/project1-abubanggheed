import { reimbursementsClient } from "../axios/reimbursement.client";

export const reimbursementTypes = {
  SET_ALL_REIMBURSEMENTS: 'SET_ALL_REIMBURSEMENTS',
  CLEAR_ALL_REIMBURSEMENTS: 'CLEAR_ALL_REIMBURSEMENTS',
  SET_USER_REIMBURSEMENTS: 'SET_USER_REIMBURSEMENTS',
  APPEND_USER_REIMBURSEMENTS: 'APPEND_USER_REIMBURSEMENTS',
  UPDATE_REIMBURSEMENT: 'UPDATE_REIMBURSEMENT'
}

export const getUserReimbursements = (id) => async dispatch => {
  let response = await reimbursementsClient.get(`/author/userId/${id}`)
  if(response.status === 200) {
    dispatch({
      type: reimbursementTypes.SET_USER_REIMBURSEMENTS,
      payload: response.data
    })
  }
}

export const newReimbursement = (amount:number, description:string, type:number) => async dispatch => {
  let response = await reimbursementsClient.post('/', {
    amount: amount,
    description: description,
    type: type
  })
  if(response.status === 201) {
    dispatch({
      type: reimbursementTypes.APPEND_USER_REIMBURSEMENTS,
      payload: response.data
    })
  }
}

export const getStatusReimbursements = (status:number) => async dispatch => {
  dispatch({
    type: reimbursementTypes.CLEAR_ALL_REIMBURSEMENTS
  })
  let response = await reimbursementsClient.get(`/status/${status}`)
  if(response.status === 200) {
    dispatch({
      type: reimbursementTypes.SET_ALL_REIMBURSEMENTS,
      payload: response.data
    })
  }
}
