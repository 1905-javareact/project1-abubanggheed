import { loginTypes } from "../actions/login.actions";
import { ILogin } from ".";

export const initialState:ILogin = {
  username: '',
  password: '',
  errorMessage: ''
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    case loginTypes.INVALID_CREDENTIALS:
      return {
        ...state,
        errorMessage: 'The username and password do not match'
      }
    case loginTypes.LOGIN_FAILED:
      return {
        ...state,
        errorMessage: 'Something went wrong. Try again later'
      }
    case 'CLEAR_ALL':
      return initialState
    default:
      return state
  }
}
