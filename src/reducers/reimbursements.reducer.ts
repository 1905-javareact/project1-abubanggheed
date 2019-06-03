import { IReimbursements } from ".";

const initialState:IReimbursements = {
  all: [],
  single: undefined
}

export const reimbursementReducer = (state:IReimbursements = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
