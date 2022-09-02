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
import Profile from './Components/Profile';
import { useContext } from 'react';
import { UserContext } from './Components/UserContext';
import LogOut from './Components/LogOut';
import Accessories from './Components/Accessories';
import NewArrivals from './Components/NewArrivals';
import Search from './Components/Search';
import DPChange from './Components/DPChange';


export default function App() {
  const userCont = useContext(UserContext);
  const UserExist = userCont && userCont.uid;
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
          <Route path='/Accessories' element={<Accessories/>}/>
          <Route path='/NewArrivals' element={<NewArrivals/>}/>
          {!UserExist && <Route path='/Login' element={<Login/>}/>}
          {!UserExist && <Route path='/SignUp' element={<SignUp/>}/>}
          {UserExist && <Route path='/Profile' element={<Profile/>}/>}
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<Navigate to="/Home" replace/>}/>
          <Route path='/LogOut' element={<LogOut/>}/>
          <Route path='/Search/:name' element={<Search/>}/>
          <Route path='/DPChange' element={<DPChange/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}
