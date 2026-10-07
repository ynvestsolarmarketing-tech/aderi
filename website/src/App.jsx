import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import ComoFunciona from './pages/ComoFunciona';
import Parceiros from './pages/Parceiros';
import CtaAdesao from './components/CtaAdesao';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import DevModal from './components/DevModal';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="como-funciona">
          <ComoFunciona />
        </div>
        <div id="parceiros">
          <Parceiros />
        </div>
        <div id="cta-adesao">
          <CtaAdesao />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="blog">
          <Blog />
        </div>
      </main>
      <Footer />
      <DevModal />
    </>
  );
}

export default App;
