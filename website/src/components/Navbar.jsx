import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      width: '100%', zIndex: 100, padding: '1.5rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      color: 'var(--color-text-inverse)'
    }}>
      <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logo} alt="ADERI Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
      </a>
      
      {/* Mobile Toggle */}
      <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '3rem' }}>
        <a href="#como-funciona" onClick={() => setIsOpen(false)} style={{ fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>Como Funciona</a>
        <a href="#parceiros" onClick={() => setIsOpen(false)} style={{ fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>Seja Parceiro</a>
        <a href="#faq" onClick={() => setIsOpen(false)} style={{ fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>FAQ</a>
        <a href="#blog" onClick={() => setIsOpen(false)} style={{ fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>Blog</a>
      </div>
      <div className={`nav-cta ${isOpen ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{ 
          background: 'var(--color-primary)', color: 'var(--color-dark)', border: 'none', 
          padding: '0.75rem 1.5rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 700,
          cursor: 'pointer'
        }}>
          Assine Já
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
