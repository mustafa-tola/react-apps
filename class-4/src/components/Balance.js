import React, { useContext } from 'react'
import { transactionContext } from '../context/TransContext';

export const Balance = () => {
    const { transactions } = useContext(transactionContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div>
            <h3>Your Balance<br />{total}$</h3>
        </div>
    )
}
