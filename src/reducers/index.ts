import { combineReducers } from "redux";
import { selfReducer } from './self.reducer'
import { loginReducer } from "./login.reducer";
import { User } from "../models/user";
import { usersReducer } from "./users.reducer";
import { Reimbursement } from "../models/reimbursement";
import { reimbursementReducer } from "./reimbursements.reducer";

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

export interface IUsers {
  all: User[]
}

export interface IReimbursements {
  all: Reimbursement[]
  user: Reimbursement[]
  single: Reimbursement
}

export interface IState {
  self: ISelf
  loginData: ILogin
  users: IUsers
  reimbursements: IReimbursements
}

export const state = combineReducers<IState>({
  self: selfReducer,
  loginData: loginReducer,
  users: usersReducer,
  reimbursements: reimbursementReducer
})
