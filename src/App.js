import React, { useState } from 'react';
import { CartContext } from './context/CartContext';
import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import Header from './Components/Header/Header';

function App() {
  const [cart, setCart] = useState({});
  
  return (
    <div>
      <CartContext.Provider value = { {cart, setCart} }>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product/:id" element={ <ProductPage /> } />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
