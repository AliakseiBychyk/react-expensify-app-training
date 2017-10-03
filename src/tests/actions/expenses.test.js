import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123atc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123atc'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('45echo', {note: 'New note value' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '45echo',
    updates: {
      note: 'New note value'
    }
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 10e6,
    note: 'This was last month rent'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})