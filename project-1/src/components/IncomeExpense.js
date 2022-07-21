import React, { useContext } from 'react'
import { transContext } from "../context/TransContext"

export const IncomeExpense = () => {
    const { transactions } = useContext(transContext);

    const changeableAmounts = transactions.map(transaction => transaction.amount);



    const totalIncome = changeableAmounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)

        // .toFixed(2);

    const totalExpense = (
        changeableAmounts.filter(item => +item < 0).reduce((acc, item) => (Math.abs(acc += +item)), 0)
    )
    console.log(changeableAmounts)

    return (
        <div className="income-expense-container">
            <h3>Income<br />${+totalIncome}</h3>
            <h3>Expense<br />${totalExpense}</h3>
        </div>
    )
}
