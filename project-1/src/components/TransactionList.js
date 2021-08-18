import React, { useContext } from 'react'
import { transContext } from '../context/TransContext'

export const TransactionList = () => {
    const { transactions,deleteTransaction } = useContext(transContext);
    return (
        <div>
            <h3>Transaction History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transaction, index) => {
                    return (
                        <li className={transaction.amount > 0 ? "income": "expense"}>
                            <span>{transaction.desc}</span>
                            <span>${Math.abs(transaction.amount)}</span>
                            <button onClick={() => deleteTransaction(transaction.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
