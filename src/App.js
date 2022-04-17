
import { Route, Routes} from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LoginSignup/Login/Login';
import Signup from './Pages/LoginSignup/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Shared/Footer/Footer';
import MenuDetails from './Shared/MenuDetails/MenuDetails';
import Navbar from './Shared/Navbar/Navbar';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
     
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/menudetails/:menuId' element={<MenuDetails />}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
