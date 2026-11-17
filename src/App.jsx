import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import { Home } from './Component/Home/Home';
import { About } from './Component/About/About';
import { Service } from './Component/Product/Service';
import { Product } from './Component/Product/Product';
import Contact from './Component/Contact/Contact';
import { Careers } from './Component/Carrier/Careers';
import ScrollToTop from './Component/ScrollToTop';

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
