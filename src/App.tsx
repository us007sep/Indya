import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import { Store } from './Components/AppState';
import Home from './Components/Home';
import Navigation from './Components/Navbar';
import Product from './Components/Product';
import './Components/FirebaseSetup';
import Kurtis from './Components/kurtis';
import Lehngas from './Components/Lehngas&Sarees';
import ScrollToTop from './Components/ScrollToTop';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import Profile from './Components/Profile';


export default function App() {
  return (
    <>
      <Provider store={Store} >
      <BrowserRouter>
        <Navigation/>
        <ScrollToTop/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Products/:name' element={<Product/>}/>
          <Route path='/Kurtis' element={<Kurtis/>}/>
          <Route path='/Lehngas&Sarees' element={<Lehngas/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>    
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}
