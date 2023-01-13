import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Section1/Section1';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ProductDetail from './components/Product_Detail/ProductDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/detail/:productid" element={<ProductDetail/>}/>
            {/* <Route path="/view" element={} /> */}
        </Routes>
        </BrowserRouter>
      {/* <Section1/>
      <Products/> */}
    </div>
  );
}

export default App;
