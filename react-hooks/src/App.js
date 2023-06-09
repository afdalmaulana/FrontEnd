// import logo from './logo.svg';
import './App.css';
// import LandingClass from './pages/LandingClass';
// import {Routes, Route} from 'react-router-dom'
// import Landing from './pages/landing';
import LandingJs from './pages/LandingJs';
// import Item from './pages/item';
import LandingClass from './pages/LandingClass';
import Counter from './pages/Counter';
import Timer from './pages/timer';


function App() {
  const [count, increment, decrement] = Counter(0,1)

  return (
    <div className="App">
      {/* <h1>{count}</h1> */}
      {/* <button onClick={increment}>Ini Tombol Tambah</button> */}
      {/* <button onClick={decrement}>Ini Tombol Kurang</button> */}
      <Timer/>
      {/* <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/item" element={<Item/>}/>
      </Routes> */}
      {/* <LandingJs/> */}
      {/* <LandingClass/> */}
    </div>
  );
}

export default App;
