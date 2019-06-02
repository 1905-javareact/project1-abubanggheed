import { loginClient } from "../axios/login.client";

export const loginTypes = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  SET_SELF: 'SET_SELF',
  UNSET_SELF: 'UNSET_SELF',
  LOGIN_FAILED: 'LOGIN_FAILED',
  UPDATE_FIELD: 'UPDATE_FIELD',
}

export const login = (username:string, password:string, history:any) => async dispatch => {
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
      history.push('/')
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
