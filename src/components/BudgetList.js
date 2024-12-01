import React from 'react';
import BudgetItem from './BudgetItem';

const BudgetList = ({ budgetItems }) => {
    return (
        <ul>
            {budgetItems.map((item, index) => (
                <BudgetItem key={index} item={item} />
            ))}
        </ul>
    );
};

export default BudgetList;
