import { IUsers } from ".";
import { userTypes } from "../actions/user.actions";

const initialState: IUsers = { all: [], single: undefined }

export const usersReducer = (state: IUsers = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_USERS:
      return {
        ...state,
        all: action.payload
      }
    case 'CLEAR_ALL':
      return initialState
    case userTypes.SET_SINGLE_USER:
      return {
        ...state,
        single: action.payload
      }
    case userTypes.CLEAR_SINGLE_USER:
      return {
        ...state,
        single: undefined
      }
    default:
      return state
  }
}
