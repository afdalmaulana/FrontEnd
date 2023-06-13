// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Filter from './component/Filter';
import Timer from './component/Timer';
import { Home } from './page/Home';
import Todo from './page/Todo';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/filter" element={<Filter/>}/>
      <Route path="/timer" element={<Timer/>}/>
      <Route path="/todo" element={<Todo/>}/>
    </Routes>
    {/* <Home/> */}
    {/* <Timer/> */}
    {/* <Filter/> */}
    </>
  );
}

export default App;
