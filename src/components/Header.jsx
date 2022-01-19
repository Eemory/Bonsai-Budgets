import React from 'react';
//styles
import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import logo from  '../imgs/Bonsai-Budgets.png';

const Header = ({setShowAddBudgetModal, openAddExpenseModal}) => {
    return (
            <Stack direction='horizontal' gap='2' className='mb-4'>
                <h1 className='me-auto'><img src={logo} /></h1>
                <Button onClick={() => setShowAddBudgetModal(true)} variant='primary'>Add Budget</Button>
                <Button onClick={openAddExpenseModal} variant='outline-primary' >Add Expense</Button>
            </Stack>
    )
}

export default Header
