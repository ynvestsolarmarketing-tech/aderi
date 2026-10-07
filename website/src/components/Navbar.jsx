import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#como-funciona');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay to close menu when clicking outside */}
      <div 
        className={`nav-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
      ></div>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass"
        style={{
          position: 'fixed', 
          top: '1rem', 
          left: '0', 
          right: '0',
          width: 'calc(100% - 2rem)', 
          maxWidth: '1200px',
          margin: '0 auto',
          zIndex: 100, 
          padding: '0.75rem 1.5rem',
          borderRadius: 'var(--radius-lg)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: '1px solid rgba(255,255,255,0.4)',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255,255,255,0.5)'
        }}
      >
        <div style={{ flex: 1, display: 'flex' }}>
          <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => setActiveLink('#home')}>
            <img src={logo} alt="Logotipo da ADERI Energia Solar por Assinatura" style={{ height: '35px' }} />
          </a>
        </div>
        
        <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {[
            { id: '#como-funciona', label: 'Como Funciona' },
            { id: '#parceiros', label: 'Seja Parceiro' },
            { id: '#faq', label: 'FAQ' },
            { id: '#blog', label: 'Blog' }
          ].map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a 
                key={link.id}
                href={link.id} 
                onClick={() => { setIsOpen(false); setActiveLink(link.id); }} 
                style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: isActive ? 600 : 500, 
                  color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '100px',
                  background: isActive ? '#ffffff' : 'transparent',
                  boxShadow: isActive ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }} 
              >
                {link.label}
              </a>
            );
          })}
        </div>
        
        <div className={`nav-cta ${isOpen ? 'active' : ''}`} style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.5rem' }}>
          <a href="#login" style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.9rem', 
            fontWeight: 600, 
            color: '#64748b', 
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('show-dev-modal')); }}
          onMouseOver={(e) => e.currentTarget.style.color = '#334155'}
          onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
          >
            <User size={18} />
            Login
          </a>
          <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }} onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('show-dev-modal')); }}>
            Assine Já
          </button>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
