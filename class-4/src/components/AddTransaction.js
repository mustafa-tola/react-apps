import React, { useContext, useState } from 'react'
import { transactionContext } from '../context/TransContext';

export const AddTransaction = () => {
    let {addTransaction} = useContext(transactionContext);
    const [desc,setDesc]= useState("");
    const [amount,setAmount] = useState(0);
    const handleAddition = (event) => {
        event.preventDefault();
        if(Number(amount) === 0) {
            alert("Enter value other than 0");
            return false;
        }
        addTransaction({
            amount:Number(amount),
            desc
        });
        setDesc("");
        setAmount(0);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br />
                    <input type="text" onChange={(event) => setDesc(event.target.value)} required value={desc}/>
                </label>
                <br />
                <label>
                    Enter Amount<br />
                    <input type="number" onChange={(event) => setAmount(event.target.value)} required value={amount}/>
                </label>
                <br />
                <input type="submit" value="Add transaction" />
            </form>
        </div>
    )
}
