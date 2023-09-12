import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Product from './Pages/Product';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Minicart from './Components/Minicart/Minicart';

import { useCart } from './Hooks/useCart';

const App = () => {
  const {
    addToCart,
    isMinicartOpen,
    cartItems,
    openModal,
    closeModal,
    removeFromCart,
    updateCartItemQuantity,
  } = useCart();

  return (
    <div className="app">
      <BrowserRouter>
        <Header openModal={openModal} />
        <main className="appBody container">
          <Routes>
            <Route
              path="/produto/:id"
              element={<Product openModal={openModal} addToCart={addToCart} />}
            />
          </Routes>
        </main>
        <Footer />
        {isMinicartOpen && (
          <Minicart
            onClose={closeModal}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateCartItemQuantity={updateCartItemQuantity}
          />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;