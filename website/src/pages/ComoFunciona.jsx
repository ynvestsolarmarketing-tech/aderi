import React, { useState, useEffect, useRef } from 'react';
import { Sun, Wind, Battery, DollarSign, ClipboardEdit, FileText, CheckCircle, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pillars = [
  {
    id: 1,
    title: 'Sua energia é produzida',
    desc: 'A ADERI disponibiliza energia renovável para atender o consumo da sua casa ou negócio.',
    bg: 'rgba(0,0,0,0.03)',
    color: 'var(--color-text)',
    hasBoxes: true,
    image: '/images/panoramic.jpg'
  },
  {
    id: 2,
    title: 'Sua economia começa na geração',
    desc: 'A energia produzida é convertida em créditos, que são utilizados para reduzir os custos da sua eletricidade.',
    bg: '#ff8c00',
    color: '#ffffff',
    hasBoxes: true,
    image: '/images/Hero.webp'
  },
  {
    id: 3,
    title: 'Nada muda na sua rotina',
    desc: 'A energia continua chegando normalmente pela rede elétrica. Você não precisa instalar equipamentos ou alterar a forma como utiliza a energia.',
    bg: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/panoramic.jpg") center/cover',
    color: '#ffffff',
    shadow: true
  },
  {
    id: 4,
    title: 'Tudo fica mais simples',
    desc: 'Sua cobrança é feita diretamente pela ADERI, com acompanhamento e pagamento de forma digital e prática.',
    bg: '#0284c7',
    color: '#ffffff',
    hasBoxes: true,
    image: '/images/Hero.webp'
  }
];

function ComoFunciona() {
  const [activeCard, setActiveCard] = useState(1);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 90%", "end 50%"]
  });
  const clipProgress = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

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

      <div ref={titleRef} style={{ padding: '2rem 0', background: 'var(--color-bg, #ffffff)', overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <h2 style={{ 
          fontSize: 'clamp(3rem, 12vw, 15rem)', 
          fontWeight: 900, 
          color: 'rgba(150, 150, 150, 0.15)', 
          letterSpacing: '-2px',
          textTransform: 'uppercase',
          margin: 0,
          lineHeight: 1,
          whiteSpace: 'nowrap'
        }}>
          COMO FUNCIONA
        </h2>
        
        <motion.h2 
          style={{ 
            position: 'absolute', top: '2rem', left: 0, right: 0,
            fontSize: 'clamp(3rem, 12vw, 15rem)', 
            fontWeight: 900, 
            letterSpacing: '-2px',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1,
            whiteSpace: 'nowrap',
            display: 'flex',
            justifyContent: 'center',
            pointerEvents: 'none',
            clipPath: useTransform(clipProgress, val => `inset(0 ${val} 0 0)`),
            WebkitClipPath: useTransform(clipProgress, val => `inset(0 ${val} 0 0)`)
          }}
        >
          <span style={{ color: '#ff8c00' }}>
            COMO FUNCIONA
          </span>
        </motion.h2>
      </div>
      
      <section className="pillars-container">
        {pillars.map((pillar) => {
          const isActive = activeCard === pillar.id;
          return (
            <div 
              key={pillar.id}
              onClick={() => setActiveCard(pillar.id)}
              onMouseEnter={() => setActiveCard(pillar.id)}
              className={`pillar-card ${isActive ? 'active' : ''}`}
              style={{ 
                background: pillar.bg, 
                color: pillar.color,
                borderRight: '1px solid var(--color-border)'
              }}
            >
              <div className="pillar-content" style={{ animation: 'fadeIn 0.6s ease forwards', display: 'flex', flexDirection: 'column', gap: pillar.hasBoxes ? '2rem' : '0' }}>
                {pillar.hasBoxes ? (
                  <>
                    <div>
                      <h3 style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-1px', textTransform: 'uppercase' }}>
                        {pillar.title}
                      </h3>
                      <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.6 }}>
                        {pillar.desc}
                      </p>
                    </div>
                    <div className="pillar-image" style={{ 
                      width: '100%', 
                      background: `url("${pillar.image}") center/cover`, 
                      borderRadius: '24px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                    }}></div>
                  </>
                ) : (
                  <>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2, letterSpacing: '-1px', textTransform: 'uppercase' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '1rem', opacity: 0.8, maxWidth: '300px' }}>
                      {pillar.desc}
                    </p>
                  </>
                )}
              </div>
              
              <span className="pillar-number" style={{ 
                fontWeight: 800, 
                lineHeight: 1, 
                textShadow: pillar.shadow ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                marginTop: 'auto',
                paddingTop: '2rem'
              }}>
                {pillar.id}
              </span>
            </div>
          );
        })}
      </section>

      {/* Passo a Passo Section Redesigned */}
      <section style={{ padding: '6rem 2rem 3rem 2rem', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
            <p style={{ color: '#74b814', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Passo a Passo
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', textTransform: 'uppercase', lineHeight: 1.1 }}>
              Jornada Simples e Rápida
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Step 1 */}
            <motion.div 
              whileHover={{ y: -8 }}
              style={{ 
                position: 'relative', overflow: 'hidden', padding: '3rem 2.5rem', 
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)', 
                borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.03)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: '#0284c7' }}></div>
              <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', fontSize: '10rem', fontWeight: 900, color: 'rgba(2, 132, 199, 0.05)', lineHeight: 1 }}>1</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ background: '#0284c7', width: '72px', height: '72px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.5)' }}>
                  <ClipboardEdit size={36} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>Preencha seus dados</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Insira suas informações e clique em <span style={{ fontWeight: 700, color: '#0284c7' }}>"Simular Economia"</span>. Descubra na hora o quanto você pode economizar.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              whileHover={{ y: -8 }}
              style={{ 
                position: 'relative', overflow: 'hidden', padding: '3rem 2.5rem', 
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)', 
                borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.03)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: '#ff8c00' }}></div>
              <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', fontSize: '10rem', fontWeight: 900, color: 'rgba(255, 140, 0, 0.05)', lineHeight: 1 }}>2</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ background: '#ff8c00', width: '72px', height: '72px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 10px 25px rgba(255, 140, 0, 0.5)' }}>
                  <FileText size={36} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>Envie os documentos</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Nos encaminhe sua <span style={{ fontWeight: 700 }}>conta de energia atual</span> e um <span style={{ fontWeight: 700 }}>documento de identidade</span> para validação rápida.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              whileHover={{ y: -8 }}
              style={{ 
                position: 'relative', overflow: 'hidden', padding: '3rem 2.5rem', 
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)', 
                borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.03)',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: '#74b814' }}></div>
              <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', fontSize: '10rem', fontWeight: 900, color: 'rgba(116, 184, 20, 0.05)', lineHeight: 1 }}>3</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ background: '#74b814', width: '72px', height: '72px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 10px 25px rgba(116, 184, 20, 0.5)' }}>
                  <CheckCircle size={36} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.2 }}>Assine o termo</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  Pronto! <span style={{ fontWeight: 700 }}>Assine o termo de adesão</span> que enviaremos pelo WhatsApp, através da plataforma ClickSign. Simples assim.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0 6rem 0', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
        <div className="glow-bg" style={{ right: '-20%', top: '20%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#74b814', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>Vantagens do Plano</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-1px', maxWidth: '600px', marginBottom: '4rem', color: 'var(--color-text)', textTransform: 'uppercase' }}>
            Empoderando consumidores com energia limpa, confiável e barata.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {[
              { icon: <Sun size={36} color="#ffffff" />, title: 'Nada muda na sua casa', desc: 'A energia continua chegando pelos mesmos fios da rua. Ninguém vai na sua casa instalar nada.', bg: '#74b814' },
              { icon: <Wind size={36} color="#ffffff" />, title: 'Custo Zero', desc: 'Você não paga taxa de adesão, não compra placas solares e não precisa fazer nenhuma obra.', bg: '#ff8c00' },
              { icon: <DollarSign size={36} color="#ffffff" />, title: 'Desconto Garantido', desc: 'Todo mês, você recebe créditos que diminuem o valor final da sua conta de luz automaticamente.', bg: '#0284c7' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }} 
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: item.bg }}></div>
                <div style={{ 
                  background: item.bg, 
                  width: '72px', height: '72px', 
                  borderRadius: '20px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '2rem',
                  boxShadow: `0 10px 25px ${item.bg}50`
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a', lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ComoFunciona;
