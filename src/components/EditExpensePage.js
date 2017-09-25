import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      Editing the expense with id of {props.match.params.id}

      <ExpenseForm
        expense={props.expense}  
        onSubmit={(expense) => {
          // Dispatch the action to edit the expense
          // Redirect to the dashboard
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
          console.log('updated', expense)
        }}
      />
    </div>  
  )
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage)