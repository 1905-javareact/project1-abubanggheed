import { usersClient } from "../axios/user.client";

export const userTypes = {
  SET_USERS: 'SET_USERS',
  CLEAR_USERS: 'CLEAR_USERS'
}

export const getUsers = () => async dispatch => {
  try {
    const response = await usersClient.get('')
    if(response.status === 200) {
      dispatch({
        type: userTypes.SET_USERS,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}
