import logo from './logo.svg';
import './App.css';
import {Message} from "./Message.js";
import { useState } from 'react';

const App = () => {
  let [counter,setCounter] = useState(0);
  let [isMorning,setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight':""}`}>
      <h1>Good {isMorning ? "Morning":"Night"}</h1>
      <Message counter={counter}/>
      <br />
      <button onClick={() => setCounter(counter+1)}>Update Counter</button>
      <button onClick={() => setMorning(!isMorning)}>Update Day Time</button>
    </div>
  );
}

export default App;