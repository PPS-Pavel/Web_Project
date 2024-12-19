import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./layout/Nav.js";
import PizzaPage from './pages/PizzaPage';
import DrinkPage from './pages/DrinkPage';
import ComboPage from './pages/ComboPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactsPage from './pages/ContactsPage';
import CartPage from './pages/CartPage';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.title === item.title);
      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  const updateQuantity = (title, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(title);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.title === title ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <Router>
      <Nav />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<PizzaPage addToCart={addToCart} />} />
            <Route path="/drinks" element={<DrinkPage addToCart={addToCart} />} />
            <Route path="/combos" element={<ComboPage addToCart={addToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} 
            updateQuantity={updateQuantity} clearCart={clearCart}/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
