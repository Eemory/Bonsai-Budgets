import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './contexts/BudgetContext'

import App from './App';

ReactDom.render(
    <BudgetsProvider>
        <App />
    </BudgetsProvider>

    , document.getElementById('root'));