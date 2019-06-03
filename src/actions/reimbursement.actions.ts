import { reimbursementsClient } from "../axios/reimbursement.client";

export const reimbursementTypes = {
  SET_ALL_REIMBURSEMENTS: 'SET_ALL_REIMBURSEMENTS',
  SET_SINGLE_REIMBURSEMENTS: 'SET_SINGLE_REIMBURSEMENTS',
  SET_USER_REIMBURSEMENTS: 'SET_USER_REIMBURSEMENTS',
  CLEAR_ALL_REIMBURSEMENTS: 'CLEAR_ALL_REIMBURSEMENTS',
  CLEAR_USER_REIMBURSEMENTS: 'CLEAR_USER_REIMBURSEMENTS',
  CLEAR_SINGLE_REIMBURSMENTS: 'CLEAR_SINGLE_REIMBURSEMENTS',
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
