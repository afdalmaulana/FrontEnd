// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Landing/Home';
import NewBlog from './Landing/NewBlog';
import Membership from './Landing/Membership';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newBlog' element={<NewBlog/>}></Route>
        <Route path='/membership' element={<Membership/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
