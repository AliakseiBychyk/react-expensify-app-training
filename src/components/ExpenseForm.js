import React, { Component } from 'react'

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  }
  
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState({description})
  }
  
  onNoteChange = (e) => {
    this.setState({note: e.target.value})
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    amount.match(/^\d*(\.\d{0,2})?$/) && this.setState({amount})
  }

  render() {
    return (
      <div>
        <h3>Expense Form</h3>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
        </form>
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <button>Add Expense</button>
      </div>
    )
  }
}

export default ExpenseForm