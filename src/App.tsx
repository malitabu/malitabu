import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-[#f9ebe5]">
      <Hero />
      <Services />
      <Products />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;