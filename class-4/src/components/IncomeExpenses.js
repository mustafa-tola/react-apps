import React, { useContext } from 'react'
import "../App.css";
import { transactionContext } from '../context/TransContext';

export const IncomeExpenses = () => {
    const {transactions} = useContext(transactionContext);
    const getIncome = () => {
        let income = 0;
        for(var i = 0;i < transactions.length;i++) {
            if(transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for(var i = 0;i < transactions.length;i++) {
            if(transactions[i].amount < 0) {
                expense += transactions[i].amount;
            }
        }
        return expense;
    }
    return (
        <div className="expense-container">
            <h3>INCOME<br />{getIncome()}$</h3>
            <h3>EXPENSE<br />{getExpense()}$</h3>
        </div>
    )
}
