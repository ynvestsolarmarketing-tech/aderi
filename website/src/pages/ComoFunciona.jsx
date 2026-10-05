import React, { useState, useEffect } from 'react';
import { Sun, Wind, Battery, DollarSign } from 'lucide-react';

const pillars = [
  {
    id: 1,
    title: 'Reduzindo emissões e ajudando contra a mudança climática',
    desc: 'Um passo importante rumo a um planeta verde e sustentável.',
    bg: 'var(--color-secondary)',
    color: '#fff',
  },
  {
    id: 2,
    title: 'Energia 100% limpa injetada na rede elétrica',
    desc: 'Produzimos energia em nossas usinas e transferimos os créditos para você.',
    bg: 'var(--color-dark)',
    color: '#fff',
  },
  {
    id: 3,
    title: 'Sem necessidade de instalações no seu telhado',
    desc: 'Aproveite a energia solar ou eólica sem custos com obras e equipamentos.',
    bg: 'url("/images/panoramic.jpg") center/cover',
    color: '#fff',
    shadow: true
  },
  {
    id: 4,
    title: 'Economia garantida todos os meses na sua conta',
    desc: 'Os créditos de energia abatem o valor total da sua fatura atual.',
    bg: 'var(--color-primary)',
    color: 'var(--color-dark)',
  }
];

function ComoFunciona() {
  const [activeCard, setActiveCard] = useState(1);

  // Auto-rotate logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev === 4 ? 1 : prev + 1));
    }, 4000); // Rotates every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      
      {/* Seção dos 4 Pilares / Grid Vertical Dinâmico (Accordion) */}
      <section style={{ display: 'flex', minHeight: '600px', width: '100%', overflow: 'hidden' }}>
        {pillars.map((pillar) => {
          const isActive = activeCard === pillar.id;
          return (
            <div 
              key={pillar.id}
              onClick={() => setActiveCard(pillar.id)}
              style={{ 
                flex: isActive ? '3' : '1', 
                background: pillar.bg, 
                padding: '4rem 2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: isActive ? 'space-between' : 'flex-end', 
                color: pillar.color,
                transition: 'flex 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {isActive && (
                <div style={{ animation: 'fadeIn 0.6s ease forwards' }}>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2, letterSpacing: '-1px' }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '1rem', opacity: 0.8, maxWidth: '300px' }}>
                    {pillar.desc}
                  </p>
                </div>
              )}
              
              <span style={{ 
                fontSize: 'clamp(4rem, 6vw, 8rem)', 
                fontWeight: 800, 
                lineHeight: 1, 
                opacity: 0.9, 
                textShadow: pillar.shadow ? '0 4px 20px rgba(0,0,0,0.8)' : 'none',
                marginTop: isActive ? '0' : 'auto'
              }}>
                {pillar.id}
              </span>
            </div>
          );
        })}
      </section>

      {/* Vantagens / Serviços em 3 Colunas */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>Vantagens do Plano</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-1px', maxWidth: '600px', marginBottom: '4rem' }}>
            Empoderando consumidores com energia limpa, confiável e barata.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              { icon: <Sun size={24} color="var(--color-dark)" />, title: 'Sem Instalações', desc: 'Sua energia vem direto das nossas usinas e chega até você pela rede atual.' },
              { icon: <Wind size={24} color="var(--color-dark)" />, title: 'Zero Investimento', desc: 'Não é preciso comprar placas solares nem alterar a estrutura da casa.' },
              { icon: <DollarSign size={24} color="var(--color-dark)" />, title: 'Economia Mensal', desc: 'A energia é abatida na sua fatura com um desconto atrativo, todo mês.' }
            ].map((item, i) => (
              <div key={i}>
                <div style={{ width: '80px', height: '50px', background: 'var(--color-surface)', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{item.desc}</p>
                <a href="#faq" style={{ color: 'var(--color-dark)', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>Saber mais →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ComoFunciona;
