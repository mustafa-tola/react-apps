import React, { useContext } from 'react'
import { transactionContext } from '../context/TransContext'

export const TransactionList = () => {
    let { transactions } = useContext(transactionContext);
    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                            <li>
                                <span>{transObj.desc}</span>
                                <span>{transObj.amount}$</span>
                                <button>x</button>
                            </li>
                            
                    )
                })}
            </ul>
        </div>
    )
}
