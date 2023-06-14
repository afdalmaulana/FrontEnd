// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Landing/Home';
import NewBlog from './Landing/NewBlog';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newBlog' element={<NewBlog/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
