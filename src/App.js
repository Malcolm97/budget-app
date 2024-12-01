import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';

const App = () => {
    const [budgetItems, setBudgetItems] = useState([]);

    const addBudgetItem = (item) => {
        setBudgetItems([...budgetItems, item]);
    };

    return (
        <div>
            <h1>Budget App</h1>
            <BudgetForm addBudgetItem={addBudgetItem} />
            <BudgetList budgetItems={budgetItems} />
        </div>
    );
};

export default App;
