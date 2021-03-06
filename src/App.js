import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import MenuDetails from './Pages/CateringMenu/MenuDetails/MenuDetails';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LoginSignup/Login/Login';
import Signup from './Pages/LoginSignup/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Navbar from './Shared/Navbar/Navbar';
import NotFound from './Shared/NotFound/NotFound';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {

  return (
    <div>

      <div className='sticky top-0 z-50 bg-base-100/95'><Navbar /></div>
      <Wrapper>

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/menudetails/:menuId' element={<MenuDetails />}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/about' element={<About />}></Route >
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
