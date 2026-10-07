import React from 'react';

function Parceiros() {
  return (
    <>
      <section style={{ background: '#74b814', color: '#ffffff', paddingTop: 'clamp(8rem, 20vw, 12rem)', paddingBottom: '0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>Para donos de usinas</p>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1, color: '#ffffff', textTransform: 'uppercase', wordBreak: 'break-word' }}>
              Maximize a rentabilidade da sua usina sem dor de cabeça
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: 1.6, marginTop: '1.5rem' }}>
              Nós fazemos a gestão comercial da sua energia e garantimos a alocação dos créditos. Você aumenta seus lucros com risco zero de inadimplência.
            </p>
            <button style={{ 
              background: '#ffffff', color: '#0e171f', border: 'none', 
              padding: '1rem 2rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 700,
              cursor: 'pointer', marginTop: '2rem'
            }}
            onClick={() => window.dispatchEvent(new CustomEvent('show-dev-modal'))}
            >
              Seja Parceiro →
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(0.5rem, 2vw, 1.5rem)' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff', padding: 'clamp(1rem, 4vw, 2rem)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '160px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 900, lineHeight: 1 }}>+30%</span>
              <span style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)', fontWeight: 500, marginTop: '0.5rem', opacity: 0.9 }}>Rentabilidade extra</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff', padding: 'clamp(1rem, 4vw, 2rem)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '160px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 900, lineHeight: 1 }}>100%</span>
              <span style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)', fontWeight: 500, marginTop: '0.5rem', opacity: 0.9 }}>Gestão centralizada</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff', padding: 'clamp(1rem, 4vw, 2rem)', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '160px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 900, lineHeight: 1 }}>0%</span>
              <span style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)', fontWeight: 500, marginTop: '0.5rem', opacity: 0.9 }}>Risco de inadimplência</span>
            </div>
            <div style={{ background: 'url("/images/panoramic.jpg") center/cover', borderRadius: '16px', minHeight: '160px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            </div>
          </div>
        </div>

        {/* Imagem Panorâmica */}
        <div style={{ width: '100%', height: '400px', background: 'url("/images/panoramic.jpg") center/cover' }}></div>
      </section>
    </>
  );
}

export default Parceiros;
