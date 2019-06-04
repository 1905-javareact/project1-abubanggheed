
import React, { Component } from 'react'

interface IReimbursementFormState {
  amount:number
  description:string
  type:number
}

export class ReimbursementForm extends Component<any, IReimbursementFormState> {

  state = {
    amount: 0,
    description: '',
    type: 0
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

  handleSubmit = event => {
    event.preventDefault()
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleNumberChange('amount')} value={this.state.amount} type="number" placeholder="amount" />
        <textarea onChange={this.handleTextChange} value={this.state.description} placeholder="description" />
        <select onChange={this.handleNumberChange('type')} value={this.state.type}>
          <option value="1">Lodging</option>
          <option value="2">Travel</option>
          <option value="3">Food</option>
          <option value="4">Other</option>
        </select>
      </form>
    )
  }
}