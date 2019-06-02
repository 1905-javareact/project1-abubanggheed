import { combineReducers } from "redux";
import { selfReducer } from './self.reducer'
import { loginReducer } from "./login.reducer";

export interface ISelf {
  userId: number
  username: string
	firstName: string
	lastName: string
	email: string
	role: string
}

export interface ILogin {
  username: string
  password: string
  errorMessage: string
}

export interface IState {
  self: ISelf
  loginData: ILogin
}

export const state = combineReducers<IState>({
  self: selfReducer,
  loginData: loginReducer
})
