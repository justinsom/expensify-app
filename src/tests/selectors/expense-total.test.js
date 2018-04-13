import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should return 0 for no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});


test('should return value of expenses[0].amount for one expenses', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});


test('should return sum of expenses.amount for three expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});