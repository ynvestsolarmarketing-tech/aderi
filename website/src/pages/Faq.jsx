import React, { useState, useEffect } from 'react';

const faqItems = [
  { 
    id: 1, 
    title: 'Troca de titularidade', 
    text: 'Sim, a titularidade da conta de energia será transferida para a ADERI. Todo o processo é feito por nós junto à distribuidora, garantindo que você receba apenas uma fatura com o desconto aplicado.',
    img: '/images/faq1.jpg'
  },
  { 
    id: 2, 
    title: 'Início da economia', 
    text: 'Assim que você aderir à ADERI e a troca de titularidade for concluída, a economia começará já na sua primeira fatura emitida.',
    img: '/images/faq2.jpg'
  },
  { 
    id: 3, 
    title: 'Quem pode ser cliente', 
    text: 'Pessoas físicas e jurídicas (residencial, comercial ou rural) com conta superior a R$ 250 mensais.',
    img: '/images/faq3.jpg'
  },
  { 
    id: 4, 
    title: 'Falta de energia', 
    text: 'A responsabilidade pela rede continua sendo da distribuidora local. A ADERI intermedeia o contato caso precise relatar falhas.',
    img: '/images/faq4.jpg'
  },
];

function Faq() {
  const [activeFaq, setActiveFaq] = useState(1);

  // Rotação automática a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFaq((prev) => (prev === faqItems.length ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeItem = faqItems.find(i => i.id === activeFaq) || faqItems[0];

  return (
    <section style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>Dúvidas Frequentes</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-1px', maxWidth: '600px', marginBottom: '4rem' }}>
          Respondemos as principais questões sobre Geração Distribuída
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Lista de itens gigantes estilo Aerra */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqItems.map(item => (
              <div 
                key={item.id} 
                onClick={() => setActiveFaq(item.id)}
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)', 
                  fontWeight: 700, 
                  letterSpacing: '-1px',
                  // Cor mais visível quando inativo (muted) e preta quando ativo
                  color: activeFaq === item.id ? 'var(--color-dark)' : 'var(--color-secondary)',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.title}
              </div>
            ))}
            <button style={{ 
              background: 'transparent', color: 'var(--color-dark)', border: '1px solid var(--color-dark)', 
              padding: '1rem 2rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 700,
              cursor: 'pointer', marginTop: '2rem', width: 'fit-content'
            }}>
              Ver todas as dúvidas →
            </button>
          </div>

          {/* Área de resposta com imagem dinâmica */}
          <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '16px', transition: 'all 0.3s ease' }}>
            <img 
              key={activeItem.img} // Força o react a re-renderizar a imagem (se quiser animação pode usar CSS)
              src={activeItem.img} 
              alt={activeItem.title} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', animation: 'fadeIn 0.5s ease' }} 
            />
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', lineHeight: 1.6, animation: 'fadeIn 0.5s ease' }}>
              {activeItem.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
