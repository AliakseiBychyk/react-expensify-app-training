export default (expenses = []) => {
  if (expenses.length === 0) return 0
  return expenses.reduce((acc, expense) => {
    return acc + expense.amount
  }, 0)
}