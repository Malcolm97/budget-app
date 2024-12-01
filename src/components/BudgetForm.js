import React, { useState } from 'react';

const BudgetForm = ({ addBudgetItem }) => {
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBudgetItem({ item, amount });
        setItem('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default BudgetForm;
