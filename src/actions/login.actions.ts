import { loginClient } from "../axios/login.client";
import { usersClient } from "../axios/user.client";

export const loginTypes = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  SET_SELF: 'SET_SELF',
  UNSET_SELF: 'UNSET_SELF',
  LOGIN_FAILED: 'LOGIN_FAILED',
  UPDATE_FIELD: 'UPDATE_FIELD',
}

export const login = (username:string, password:string) => async dispatch => {
  try {
    const response = await loginClient.post('/', {
      username: username,
      password: password
    })
    if(response.status === 200) {
      const user = response.data
      dispatch({
        payload: user,
        type: loginTypes.SET_SELF
      })
    } else if(response.status === 401) {
      dispatch({type: loginTypes.INVALID_CREDENTIALS})
    } else {
      dispatch({type: loginTypes.LOGIN_FAILED})
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateField = (field:string, value:string) => dispatch => {
  dispatch({
    type: loginTypes.UPDATE_FIELD,
    payload: {
      field,
      value
    }
  })
}

export const getSelf = () => async dispatch => {
  try {
    const response = await usersClient.get('/self')
    if(response.status === 200) {
      dispatch({
        type: loginTypes.SET_SELF,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const logOut = () => async dispatch => {
  try {
    const response = await loginClient.delete('/')
    if(response.status === 205) {
      dispatch({ type: 'CLEAR_ALL' })
    }
  } catch (error) {
    
  }
}
