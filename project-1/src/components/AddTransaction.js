import React, { useContext, useState } from 'react'
import { transContext } from '../context/TransContext';

export const AddTransaction = () => {
    const {addTransaction} = useContext(transContext);
    const [amount,setAmount] = useState(0);
    const [desc,setDesc] = useState("");

    const submitTransaction = (event) => {
        event.preventDefault();
        if(amount == 0) {
            alert("Enter amount other than 0");
        }
        else {
            addTransaction({
                id: Math.random(),
                amount,
                desc
            })
        }
        setAmount(0);
        setDesc("");
    }
    return (
        <div>
            <h3>Add new Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={(e) => submitTransaction(e)}>
                <label>
                    Enter Description:<br />
                    <input type="text" required onChange={(e) => setDesc(e.target.value)} value={desc}/>
                </label>
                <br />
                <label>
                    Enter Amount:<br />
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} value={amount}/>
                </label>
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}
