// import logo from './logo.svg';
import './App.css';
// import Bio from './Bio';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
// import Profile from './profile';
// apabila di import harus di awali dengan huruf kapital

// export default function App(){
// ini adalah contoh export function javascript menjadi component reactjs
// }
function App() {
  return (
    <>
    {/* <div className="App">
      <form>
        <Bio />
        <button>Submit</button>
        <p className='hasil'>Result </p>
      </form>
      </div> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
      </>
  )
}
    // <div className="App">
      // <header className="App-header">
      // <h1>Hello World!</h1>
      // <h2>{angka}</h2> 
      // {/* coding di atas adalah jsx (react element) apabila ada curly bracket {} */}
      // <h3>5 x 5 = {5*5}</h3>
      // <Profile /> 
      // {/* coding di atas adalah contoh pemanggilan component dari profile.js */}
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
          // Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        // >
          // Learn React
        // </a>
      // </header>
    // </div>
  // );
// }

export default App;
