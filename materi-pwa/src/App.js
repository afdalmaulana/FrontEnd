import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>Pacar saya</p>
          <h2>{count}</h2>
          <button onClick={increment}>Tambah</button>
          <button onClick={decrement}>Kurang</button>
        </div>
      </header>
    </div>
  );
}

export default App;
