import React from 'react';
import { BudgetCard } from '..';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../../contexts/BudgetContext';

const UncategorizedBudgetCard = (props) => {
    const { getBudgetExpenses } = useBudgets();
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)
    if (amount === 0) return null;                                          //does not render if there is no amount
    return (
        <BudgetCard gray name='Uncategorized' amount={amount} {...props} />
    )
}

export default UncategorizedBudgetCard