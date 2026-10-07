import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench } from 'lucide-react';

function DevModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShow = () => setIsOpen(true);
    window.addEventListener('show-dev-modal', handleShow);
    return () => window.removeEventListener('show-dev-modal', handleShow);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '1rem'
        }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{ 
              background: '#ffffff', borderRadius: '24px', padding: '2.5rem 2rem', 
              maxWidth: '400px', width: '100%', position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              textAlign: 'center'
            }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer',
                color: '#64748b', borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            >
              <X size={20} />
            </button>
            
            <div style={{ width: '70px', height: '70px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#0284c7' }}>
              <Wrench size={36} />
            </div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>
              Em Desenvolvimento
            </h3>
            
            <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1.05rem' }}>
              Esta funcionalidade ainda está sendo construída e estará disponível em breve!
            </p>
            
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: '#0284c7', color: '#ffffff', border: 'none',
                padding: '1rem', borderRadius: '8px', fontWeight: 700, fontSize: '1rem',
                width: '100%', cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.3)'
              }}
            >
              Entendi
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default DevModal;
