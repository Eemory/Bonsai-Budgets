import React, { useState } from 'react'
//components
import { Header, Cards, AddBudgetModal, AddExpenseModal, ViewExpensesModal } from './components';
import { useBudgets } from './contexts/BudgetContext';
//styles
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
    const [ViewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
    const { budgets, expenses, getBudgetExpenses } = useBudgets();

    const openAddExpenseModal = (budgetId) => {
        setShowAddExpenseModal(true)
        setAddExpenseModalBudgetId(budgetId)
    }

    return (
        <Container className='my-4'>
            <Header setShowAddBudgetModal={setShowAddBudgetModal} openAddExpenseModal={openAddExpenseModal} />
            <Cards
                budgets={budgets}
                getBudgetExpenses={getBudgetExpenses}
                openAddExpenseModal={openAddExpenseModal}
                setViewExpensesModalBudgetId={setViewExpensesModalBudgetId}
            />
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
            <AddExpenseModal show={showAddExpenseModal} handleClose={() => setShowAddExpenseModal(false)} defaultBudgetId={addExpenseModalBudgetId} />
            <ViewExpensesModal budgetId={ViewExpensesModalBudgetId} handleClose={() => setViewExpensesModalBudgetId()} />
        </Container>
    )
}

export default App
