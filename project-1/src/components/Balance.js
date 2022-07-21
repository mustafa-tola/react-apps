import React,{useContext} from 'react'
import { transContext } from '../context/TransContext';

export const Balance = () => {
    const { transactions } = useContext(transContext);
    const changeableAmounts = transactions.map(transaction => transaction.amount);

    const totalChangeableAmount = changeableAmounts.reduce((acc, item) => (acc += +item), 0).toFixed(2);
    return (
        <div>
            <h3>Your Balance<br />${totalChangeableAmount}</h3>
        </div>
    )
}
