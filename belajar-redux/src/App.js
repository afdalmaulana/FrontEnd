import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Home from './Landing/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './Landing/Cart';


function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
