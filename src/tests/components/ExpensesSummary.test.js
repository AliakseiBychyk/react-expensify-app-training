import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCont={1}
      expensesTotal={235}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary
      expenseCont={3}
      expensesTotal={1235}
    />
  )
  expect(wrapper).toMatchSnapshot()
})