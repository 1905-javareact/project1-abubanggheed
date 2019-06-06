import { reimbursementsClient } from "../axios/reimbursement.client";
import { Reimbursement } from "../models/reimbursement";

export const reimbursementTypes = {
  SET_ALL_REIMBURSEMENTS: 'SET_ALL_REIMBURSEMENTS',
  CLEAR_ALL_REIMBURSEMENTS: 'CLEAR_ALL_REIMBURSEMENTS',
  SET_USER_REIMBURSEMENTS: 'SET_USER_REIMBURSEMENTS',
  CLEAR_USER_REIMBURSEMENTS: 'CLEAR_USER_REIMBURSEMENTS',
  APPEND_USER_REIMBURSEMENTS: 'APPEND_USER_REIMBURSEMENTS',
  UPDATE_REIMBURSEMENT: 'UPDATE_REIMBURSEMENT',
  SET_SINGLE_REIMBURSEMENT: 'SET_SINGLE_REIMBURSEMENT',
  CLOSE_SINGLE_REIMBURSEMENT: 'CLOSE_SINGLE_REIMBURSEMENT',
  UPDATE_EDIT_REIMBURSEMENT: 'UPDATE_EDIT_REIMBURSEMENT'
}

export const getUserReimbursements = (id) => async dispatch => {
  dispatch({
    type: reimbursementTypes.CLEAR_USER_REIMBURSEMENTS
  })
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

export const approveDenyReimbursement = (id:number, newStatus:number, from:string) => async dispatch => {
  let response = await reimbursementsClient.patch('/', {
    reimbursementId: id,
    status: newStatus
  })
  if(response.status === 200) {
    dispatch({
      type: reimbursementTypes.UPDATE_REIMBURSEMENT,
      payload: response.data,
      from: from
    })
  }
}

export const openEditReimbursement = (reimbursement:Reimbursement) => dispatch => {
  dispatch({
    type: reimbursementTypes.SET_SINGLE_REIMBURSEMENT,
    payload: reimbursement
  })
}

export const cancleEditReimbursement = () => dispatch => {
  dispatch({
    type: reimbursementTypes.CLOSE_SINGLE_REIMBURSEMENT,
  })
}

export const updateEditReimbursement = (key:string, value:any) => dispatch => {
  dispatch({
    type: reimbursementTypes.UPDATE_EDIT_REIMBURSEMENT,
    payload: {
      key,
      value
    }
  })
}

export const sendEditReimbursement = (fields:any) => async dispatch => {
  let response = await reimbursementsClient.patch('', fields)
  if(response.status === 200) {
    dispatch({
      type: reimbursementTypes.UPDATE_REIMBURSEMENT,
      from: 'patch',
      payload: response.data
    })
  } else {
    dispatch({
      type: reimbursementTypes.CLOSE_SINGLE_REIMBURSEMENT
    })
  }
}
