import React, { useContext } from 'react'
import counterContext from './counterContext'

export const Child = () => {
    let counterValue = useContext(counterContext);
    return (
        <div>
            <h2>This is first child using counter context</h2>
            <h4>Counter Value is {counterValue[0]}</h4>
            <button onClick={() => counterValue[1](++counterValue[0])}>
                Increment Context Counter
            </button>
        </div>
    )
}
