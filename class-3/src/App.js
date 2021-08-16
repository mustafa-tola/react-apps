import logo from './logo.svg';
import './App.css';
import { Parent } from "./Parent";
import counterContext from './counterContext';
import { useState } from 'react';

function App() {
  let countState = useState(1);
  return (
    <counterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
