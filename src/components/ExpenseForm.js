import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const now = moment()
console.log(now.format('MMMM Do, YYYY'))

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
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
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount })
    }
  }
  
  onDateChange = (createdAt) => {
    createdAt && this.setState({ createdAt })
  }
  
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      // set error state equal to 'Please provide description and amount.'
      this.setState({error: 'Please provide description and amount.'})
    } else {
      // Clear the error 
      this.setState({error: ''})
      console.log('submitted!')
    }

  }

  render() {
    return (
      <div>
        <h3>Expense Form</h3>
        {this.state.error && <h2 style={{ color: 'red' }}>{this.state.error}</h2>}
        <form onSubmit={this.onSubmit}>
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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>

      </div>
    )
  }
}

export default ExpenseForm