import React,{ createContext, useContext, useReducer } from "react"
import { transReducer } from "./TransReducer";

export const transContext = createContext([]);

export const TransProvider = ({children}) => {
    const [state,dispatch] = useReducer(transReducer,[])
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANS",
            payload: {
                id: transaction.id,
                amount: transaction.amount,
                desc: transaction.desc,
            }
        })
    }

    function deleteTransaction(id) {
        dispatch({
            type: "DEL_TRANSACTION",
            payload: id,
        })
    }
    return (
        <transContext.Provider
            value={{
                transactions: state,
                addTransaction,
                deleteTransaction
            }}
        >
            {children}
        </transContext.Provider>
    )
}