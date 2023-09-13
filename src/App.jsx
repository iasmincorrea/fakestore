import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Product from './Pages/Product';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Minicart from './Components/Minicart/Minicart';

import { useCart } from './Hooks/useCart';
import Home from './Pages/Home';
import NotFound from './Components/NotFound/NotFound';

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
      <BrowserRouter basename="/fakestore">
        <Header openModal={openModal} />
        <main className="appBody container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/produto/:id"
              element={<Product openModal={openModal} addToCart={addToCart} />}
            />
            <Route path="*" element={<NotFound />} />
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
