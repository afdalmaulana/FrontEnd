// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './Landing/Home';
import NewBlog from './Landing/NewBlog';
import Membership from './Landing/Membership';
import PageRegister from './Landing/PageRegister';
import PageSign from './Landing/PageSign';
import PageTrending from './Landing/PageTrending';
import Terms from './Landing/Terms';
import AccountSetting from './Landing/AccountSetting';
// import ChangePassword from './Landing/ChangePassword';
import Profile from './Landing/Profile';
// import BlogCategory from './Landing/BlogCategory';
import UserBookmark from './Landing/UserBookmark';
import Navbar from './Components/navbar/Navbar';
import Verify from './Landing/Verify';
import ResetPassword from './Landing/ResetPassword';
import UserAuth from './Components/UserAuth';
import ViewArticle from './Landing/ViewArticle';
// import UserAuth from './Components/UserAuth';
// import Pages from './Pages';


function App() {
  return (
    <>
<UserAuth>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newBlog' element={<NewBlog/>}></Route>
        <Route path='/membership' element={<Membership/>}></Route>
        <Route path='/pageregister' element={<PageRegister/>}></Route>
        <Route path='/signPage' element={<PageSign/>}></Route>
        <Route path='/trending' element={<PageTrending/>}/>
        <Route path='/accountsetting' element={<AccountSetting/>}/>
        {/* <Route path='/changePassword' element={<ChangePassword/>}/> */}
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/terms' element={<Terms/>}/>
        {/* <Route path='/category' element={<BlogCategory/>}/> */}
        <Route path='/userbookmark' element={<UserBookmark/>}/>
        <Route path='/verification/:token' element={<Verify/>}/>
        <Route path='/verification-change-email/:token' element={<Verify/>}/>
        <Route path='/reset-password/:token' element={<ResetPassword/>}/>
        <Route path='/viewarticle/:id' element={<ViewArticle/>}/>
        {/* /verification/:token */}
      </Routes>
      {/* <Pages/> */}
    {/* </UserAuthentication> */}
</UserAuth>
    </>
  );
}

export default App;
