/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import { CartProvider } from './context/CartContext';
import { CartIcon, CartDrawer } from './components/Cart';
import { ChatBot } from './components/ChatBot';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <CartIcon />
        <CartDrawer />
        <ChatBot />
        <WhatsAppButton />
      </Router>
    </CartProvider>
  );
}
