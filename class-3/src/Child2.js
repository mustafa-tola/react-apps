import React, { useReducer } from 'react'
import counterReducer from "./counterReducer"

export const Child2 = () => {
    let [state,dispatch] = useReducer(counterReducer,1);
    return (
        <div>
            <h2>This is first child using counter reducer</h2>
            <h3>Value of counter is {state}</h3>
            <button onClick={() => dispatch("INCREMENT")}>Increment Reducer Counter</button>
        </div>
    )
}
