import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount = 0, expensesTotal = 0 }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')  
  return (
    <div>
      <h1>Total amount of {expenseCount} {expenseWord}: {formattedExpensesTotal}</h1>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(selectExpenses(state.expenses, state.filters))
  }
}

export default connect(mapStateToProps)(ExpensesSummary)