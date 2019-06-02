import { User } from "../models/user";
import { ISelf } from ".";
import { loginTypes } from "../actions/login.actions";

export const initialState:ISelf = new User(
  0, '', '', '', '', ''
)

export const selfReducer = (state:User = initialState, action:any) => {
  switch (action.type) {
    case loginTypes.SET_SELF:
      return action.payload

    case loginTypes.UNSET_SELF:
      return initialState
    default:
      return state
  }
}
