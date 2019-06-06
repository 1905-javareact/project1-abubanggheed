import { IReimbursements } from ".";
import { reimbursementTypes } from "../actions/reimbursement.actions";

const initialState: IReimbursements = {
  all: [],
  user: [],
  single: undefined,
  editOpen: false
}

export const reimbursementReducer = (state: IReimbursements = initialState, action) => {
  switch (action.type) {
    case reimbursementTypes.SET_USER_REIMBURSEMENTS:
      return {
        ...state,
        user: action.payload
      }
    case reimbursementTypes.SET_ALL_REIMBURSEMENTS:
      return {
        ...state,
        all: action.payload
      }
    case reimbursementTypes.CLEAR_ALL_REIMBURSEMENTS:
      return {
        ...state,
        all: []
      }
    case reimbursementTypes.APPEND_USER_REIMBURSEMENTS:
      return {
        ...state,
        user: [action.payload, ...state.user]
      }
    case reimbursementTypes.UPDATE_REIMBURSEMENT:
      if (action.from === 'user') {
        return {
          ...state,
          user: state.user.map(reimb => (
            reimb.id === action.payload.id ? action.payload : reimb
          ))
        }
      } else if (action.from === 'patch') {
        return {
          ...state,
          editOpen: false,
          single: undefined,
          all: state.all.map(reimb => (
            reimb.id === action.payload.id ? action.payload : reimb
          ))
        }
      } else {
        return {
          ...state,
          all: state.all.filter(reimb => reimb.id !== action.payload.id)
        }
      }
    case reimbursementTypes.SET_SINGLE_REIMBURSEMENT:
      return {
        ...state,
        single: action.payload,
        editOpen: true
      }
    case reimbursementTypes.CLOSE_SINGLE_REIMBURSEMENT:
      return {
        ...state,
        single: undefined,
        editOpen: false
      }
    case reimbursementTypes.UPDATE_EDIT_REIMBURSEMENT:
      return {
        ...state,
        single: {
          ...state.single,
          [action.payload.key]: action.payload.value
        }
      }
    case 'CLEAR_ALL':
      return initialState
    default:
      return state
  }
}
