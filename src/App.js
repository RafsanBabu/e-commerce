import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Product />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
