import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Product from './Pages/Product';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Header */}
        <main className="container">
          <Routes>
            <Route path="/produto/:id" element={<Product />} />
          </Routes>
        </main>
        {/* Footer */}
      </BrowserRouter>
    </>
  );
};

export default App;
