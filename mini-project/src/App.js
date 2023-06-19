// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Landing/Home';
import NewBlog from './Landing/NewBlog';
import Membership from './Landing/Membership';
import PageRegister from './Landing/PageRegister';
import PageSign from './Landing/PageSign';
import PageTrending from './Landing/PageTrending';
import Terms from './Landing/Terms';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newBlog' element={<NewBlog/>}></Route>
        <Route path='/membership' element={<Membership/>}></Route>
        <Route path='/pageregister' element={<PageRegister/>}></Route>
        <Route path='/signPage' element={<PageSign/>}></Route>
        <Route path='/trending' element={<PageTrending/>}/>
        <Route path='/terms' element={<Terms/>}/>
      </Routes>
      
    </>
  );
}

export default App;
