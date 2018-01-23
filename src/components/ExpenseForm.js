import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

// const date = new Date()
const now = moment()
console.log(now.format('MMMM Do, YYYY'))

class ExpenseForm extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
    // console.log(props.expense.createdAt)
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
      this.setState({error: 'Please provide description and amount.'})
    } else {
      this.setState({ error: '' })
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
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
            className="text-input"  
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            className="text-input"  
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
            className="textarea"  
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