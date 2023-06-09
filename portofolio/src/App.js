import './App.css';
// import image from './image/fanny.png'
import {Routes, Route} from 'react-router-dom'
import About from './About';
import HomePage from './homePage';
import Profile from './profile';
// import html from './image/html5.png'
// import image2 from './image/css.png'
// import jss from './image/js.png'
// import gt from './image/gt.png'
// import rc from './image/reactjs.png'
// import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
