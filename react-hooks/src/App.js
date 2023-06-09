// import logo from './logo.svg';
import './App.css';
import Counter from './pages/Counter';
import Timer from './pages/timer';


function App() {
  const [count, increment, decrement] = Counter(0,1)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Ini Tombol Tambah</button>
      <button onClick={decrement}>Ini Tombol Kurang</button>
      <Timer/>
    </div>
  );
}

export default App;
