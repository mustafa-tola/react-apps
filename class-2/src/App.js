import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  let [counter,setCounter] = useState(0);
  return (
    <div className="App">
      <h3>Value of counter variable is: {counter}</h3>
      <br />
      <button onClick={() => setCounter(counter+1)}>Update Counter</button>
    </div>
  );
}

export default App;
 