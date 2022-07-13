import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import { Store } from './Components/AppState';
import Home from './Components/Home';
import Navigation from './Components/Navbar';
import Product from './Components/Product';
import './Components/FirebaseSetup';


export default function App() {
  return (
    <>
      <Provider store={Store} >
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}
