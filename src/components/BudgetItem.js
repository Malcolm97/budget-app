import React from 'react';

const BudgetItem = ({ item }) => {
    return (
        <li>
            {item.item}: ${item.amount}
        </li>
    );
};

export default BudgetItem;
