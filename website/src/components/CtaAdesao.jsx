import React from 'react';

function CtaAdesao() {
  return (
    <section style={{ padding: '6rem 2rem', background: '#0284c7', color: '#ffffff', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
          Custo Zero de Adesão
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', lineHeight: 1.6 }}>
          Você não paga absolutamente nada para se tornar cliente. Não há taxas escondidas, nem necessidade de obras. Comece a economizar na sua conta de luz hoje mesmo!
        </p>
        <button 
          style={{ 
            background: '#74b814', color: '#ffffff', border: 'none', 
            padding: '1.25rem 3rem', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 800,
            cursor: 'pointer', textTransform: 'uppercase', boxShadow: '0 10px 25px rgba(116, 184, 20, 0.4)',
            transition: 'transform 0.2s ease'
          }}
          onClick={() => window.dispatchEvent(new CustomEvent('show-dev-modal'))}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Quero Economizar Agora
        </button>
      </div>
    </section>
  );
}

export default CtaAdesao;
