import transactionReducer from "./TransReducer";

const React = require("react");
const {createContext, useReducer } = require("react")

const transactions = [
    {
        amount: 500,
        desc: "Cash"
    },
    {
        amount: -50,
        desc: "Cold Drink"
    },
    {
        amount: 100,
        desc: "Deposit"
    },
    {
        amount: -200,
        desc: "Utility Bill"
    },
]

export const transactionContext = createContext(transactions);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(transactionReducer, transactions);
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transaction.amount,
                desc: transaction.desc
            }
        })
    }
    return (
        <transactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </transactionContext.Provider>
    )
}