import { IUsers } from ".";
import { userTypes } from "../actions/user.actions";

const initialState: IUsers = { all: [] }

export const usersReducer = (state: IUsers = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_USERS:
      return {
        all: action.payload
      }
    default:
      return state
  }
}
