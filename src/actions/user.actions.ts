import { usersClient } from "../axios/user.client";

export const userTypes = {
  SET_USERS: 'SET_USERS',
  CLEAR_USERS: 'CLEAR_USERS',
  SET_SINGLE_USER: 'SET_SINGLE_USER',
  CLEAR_SINGLE_USER: 'CLEAR_SINGLE_USER',
  UPDATE_SINGLE_USER: 'UPDATE_SINGLE_USER'
}

export const getUsers = () => async dispatch => {
  try {
    const response = await usersClient.get('')
    if (response.status === 200) {
      dispatch({
        type: userTypes.SET_USERS,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserById = (id: number) => async dispatch => {
  try {
    dispatch({
      type: userTypes.CLEAR_SINGLE_USER
    })
    const response = await usersClient.get(`/${id}`)
    if(response.status === 200) {
      dispatch({
        type: userTypes.SET_SINGLE_USER,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const editUser = (fields: any) => async dispatch => {
  try {
    const response = await usersClient.patch('', {
      ...fields,
      id: fields.userId,
      newRole: fields.role
    })
    if(response.status === 200) {
      dispatch({
        type: userTypes.UPDATE_SINGLE_USER,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}
