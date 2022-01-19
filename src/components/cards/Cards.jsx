import React from 'react'
//components
import { BudgetCard, UncategorizedBudgetCard, TotalBudgetCard, } from '..';
import { UNCATEGORIZED_BUDGET_ID } from '../../contexts/BudgetContext';




const Cards = ({ budgets, getBudgetExpenses, openAddExpenseModal, setViewExpensesModalBudgetId }) => {

    return (

        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
                alignItems: "flex-start",
            }}
        >
            {budgets.map(budget => {
                const amount = getBudgetExpenses(budget.id).reduce(
                    (total, expense) => total + expense.amount,
                    0
                )
                return (
                    <BudgetCard
                        key={budget.id}
                        name={budget.name}
                        amount={amount}
                        max={budget.max}
                        onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                        onViewExpensesClick={() =>
                            setViewExpensesModalBudgetId(budget.id)
                        }
                    />
                )
            })}
            <UncategorizedBudgetCard
                onAddExpenseClick={openAddExpenseModal}
                onViewExpensesClick={() =>
                    setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
                }
            />
            <TotalBudgetCard />
        </div>
    )
}

export default Cards
