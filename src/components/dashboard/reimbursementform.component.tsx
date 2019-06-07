
import React, { Component } from 'react'

interface IReimbursementFormProps {
  newReimbursement: (amount: number, description: string, type: number) => void
}

interface IReimbursementFormState {
  amount: number
  description: string
  type: number
  editMode: boolean
}

export class ReimbursementForm extends Component<IReimbursementFormProps, IReimbursementFormState> {

  state = {
    amount: 0,
    description: '',
    type: 1,
    editMode: false
  }

  handleNumberChange = key => event => {
    this.setState({
      ...this.state,
      [key]: Math.abs(+event.target.value)
    })
  }

  handleTextChange = event => {
    this.setState({
      ...this.state,
      description: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      editMode: !this.state.editMode
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.newReimbursement(this.state.amount, this.state.description, this.state.type)
    this.handleClick();
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.state.editMode ? "Close" : "New"}</button>
        {this.state.editMode &&
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleNumberChange('amount')} value={this.state.amount} type="number" placeholder="amount" />
            <br />
            <textarea onChange={this.handleTextChange} value={this.state.description} placeholder="description" />
            <br />
            <select onChange={this.handleNumberChange('type')} value={this.state.type}>
              <option value="1">Lodging</option>
              <option value="2">Travel</option>
              <option value="3">Food</option>
              <option value="4">Other</option>
            </select>
            <br />
            <input type="submit" value="send reimbursement request" />
          </form>}
      </>
    )
  }
}