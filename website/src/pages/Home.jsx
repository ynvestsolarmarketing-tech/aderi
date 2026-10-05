import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.webp';

function Home() {
  return (
    <>
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          paddingTop: '6rem',
          background: 'linear-gradient(rgba(14, 23, 31, 0.4), rgba(14, 23, 31, 0.6)), url("/images/hero.jpg") center/cover no-repeat',
          color: 'var(--color-text-inverse)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <h1 style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', letterSpacing: '-2px', lineHeight: 0.9, maxWidth: '900px' }}>
            Energia Renovável
          </h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
            <p style={{ fontSize: '1.25rem', maxWidth: '400px', fontWeight: 500, lineHeight: 1.5 }}>
              Nossa missão é fornecer energia limpa, acessível e sustentável para as comunidades através da Geração Distribuída.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button style={{ 
                background: '#ffffff', color: 'var(--color-dark)', border: 'none', 
                padding: '1.5rem 2rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem',
                flex: 1
              }}>
                Sobre nós <ArrowRight size={20} />
              </button>
              <a href="#como-funciona" style={{ 
                background: 'var(--color-primary)', color: 'var(--color-dark)', border: 'none', 
                padding: '1.5rem 2rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', flex: 1
              }}>
                Como Funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Missão (Estilo Aerra - Fundo branco com bolha verde) */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg)', textAlign: 'center' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{
             position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
             width: '200px', height: '200px', background: 'var(--color-primary)', borderRadius: '50%',
             zIndex: 0, opacity: 0.8
          }}></div>
          
          <h2 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: '900px', margin: '0 auto', fontWeight: 600, letterSpacing: '-1px', lineHeight: 1.3 }}>
            Com foco em <span style={{ fontWeight: 800 }}>eficiência</span> e inovação, nós projetamos e operamos modelos modernos de geração que trazem valor a longo prazo para comunidades, negócios e nosso planeta.
          </h2>
        </div>
      </section>
    </>
  );
}

export default Home;
