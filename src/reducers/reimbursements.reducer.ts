import { IReimbursements } from ".";
import { reimbursementTypes } from "../actions/reimbursement.actions";

const initialState:IReimbursements = {
  all: [],
  user: [],
  single: undefined
}

export const reimbursementReducer = (state:IReimbursements = initialState, action) => {
  switch (action.type) {
    case reimbursementTypes.SET_USER_REIMBURSEMENTS:
      return {
        ...state,
        user: action.payload
      }
    case reimbursementTypes.APPEND_USER_REIMBURSEMENTS:
      return {
        ...state,
        user: [action.payload, ...state.user]
      }
    case 'CLEAR_ALL':
      return initialState
    default:
      return state
  }
}
