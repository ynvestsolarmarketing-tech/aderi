import React from 'react';

function Parceiros() {
  return (
    <>
      <section style={{ background: 'var(--color-dark)', color: 'var(--color-text-inverse)', padding: '8rem 0 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>Torne-se um Parceiro</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.2 }}>
              Aproveitando o poder do sol para construir um futuro sustentável
            </h2>
            <button style={{ 
              background: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', 
              padding: '1rem 2rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 700,
              cursor: 'pointer', marginTop: '2rem'
            }}>
              Seja Parceiro →
            </button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'var(--color-primary)', color: 'var(--color-dark)', padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '200px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>+30%</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Rentabilidade extra</span>
            </div>
            <div style={{ background: 'var(--color-bg)', color: 'var(--color-dark)', padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '200px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>100%</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Gestão centralizada</span>
            </div>
            <div style={{ background: 'var(--color-secondary)', color: 'var(--color-dark)', padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '200px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>0%</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Inadimplência repassada</span>
            </div>
            <div style={{ background: 'url("/images/hero.jpg") center/cover', borderRadius: '16px', height: '200px' }}>
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
