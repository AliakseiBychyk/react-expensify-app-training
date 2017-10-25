import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Gym',
    note: '',
    amount: 2500,
    createdAt: moment(0).add(2, 'days').valueOf()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const amount = 2225440
  const description = 'new description'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { amount, description }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toBe(amount)
  expect(state[0].description).toBe(description)
})

test('should not edit an expense if expense not found', () => {
  const description = 'new description'
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { description }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1]])
})