import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Com a ADERI, nossa empresa reduziu significativamente os custos mensais sem precisar instalar uma única placa solar no telhado. O atendimento é incrível e o modelo funciona perfeitamente.",
    name: "Carlos Almeida",
    role: "Diretor Operacional"
  },
  {
    text: "Migrar para a energia da ADERI foi a melhor decisão para o nosso negócio. O processo foi rápido, transparente e a economia na conta de luz é real e garantida.",
    name: "Mariana Costa",
    role: "Proprietária de Franquia"
  },
  {
    text: "O que mais me impressionou foi o custo zero de adesão e a falta de burocracia. Estamos usando energia limpa e economizando todos os meses com total tranquilidade.",
    name: "Roberto Silveira",
    role: "Gestor Financeiro"
  }
];

function Blog() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Muda a cada 6 segundos
    return () => clearInterval(interval);
  }, []);
  const marqueeContent = (
    <>
      <span style={{ color: '#74b814' }}>Energia Limpa</span> 
      <span>—</span>
      <span>Redução na Conta</span>
      <span>—</span>
      <div style={{ width: '120px', height: '40px', background: 'url("/images/hero.jpg") center/cover', borderRadius: '40px', display: 'inline-block', verticalAlign: 'middle' }}></div>
      <span>—</span>
      <span style={{ color: '#0284c7' }}>Foco no Cliente</span>
      <span>—</span>
      <span>Sustentabilidade</span>
      <span>—</span>
      <div style={{ width: '120px', height: '40px', background: 'url("/images/panoramic.jpg") center/cover', borderRadius: '40px', display: 'inline-block', verticalAlign: 'middle' }}></div>
      <span>—</span>
    </>
  );

  return (
    <>
      {/* Marquee (Scrolling text) */}
      <section style={{ padding: '2rem 0', background: 'var(--color-bg)', borderTop: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div className="marquee-container" style={{ width: '100%', display: 'flex' }}>
          <div className="marquee-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', paddingRight: '2rem' }}>{marqueeContent}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', paddingRight: '2rem' }}>{marqueeContent}</div>
          </div>
        </div>
      </section>

      {/* Seção de Notícias/Blog */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="blog-header-container">
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>Blog & Atualizações</p>
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', color: 'var(--color-dark)', textTransform: 'uppercase' }}>Fique por dentro das novidades</h2>
            </div>
            <button className="blog-view-all-btn" onClick={() => window.dispatchEvent(new CustomEvent('show-dev-modal'))}>
              Ver todas as matérias
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Card 1 */}
            <div style={{ background: 'var(--color-surface)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: 'url("/images/panoramic.jpg") center/cover' }}></div>
              <div style={{ padding: '2rem' }}>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>MERCADO</p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-dark)' }}>Como a energia solar está mudando o cenário corporativo</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>Descubra as vantagens e a economia real que empresas estão alcançando ao migrar para a GD.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div style={{ background: 'var(--color-surface)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: 'url("/images/hero.jpg") center/cover' }}></div>
              <div style={{ padding: '2rem' }}>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>SUSTENTABILIDADE</p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-dark)' }}>Redução de carbono: o papel das fontes renováveis</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>Entenda o impacto direto que a escolha da sua matriz energética tem no meio ambiente.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: 'var(--color-surface)', borderRadius: '16px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: 'url("/images/faq3.jpg") center/cover' }}></div>
              <div style={{ padding: '2rem' }}>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.5rem' }}>LEGISLAÇÃO</p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-dark)' }}>O Marco Legal da Geração Distribuída explicado</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>Tudo o que você precisa saber sobre as regras atuais e como elas beneficiam os consumidores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Feedback Section (Estilo Aerra) */}
      <section style={{ 
        position: 'relative', minHeight: '600px', 
        background: 'linear-gradient(to right, rgba(14,23,31,0.85) 0%, rgba(14,23,31,0.6) 100%), url("/images/testimonial.jpg") center/cover no-repeat',
        padding: '6rem 0'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', color: '#ffffff' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, color: '#ffffff', textTransform: 'uppercase' }}>
              Feedback
            </h2>
          </div>

          <div className="feedback-grid">
            {/* Espaço para o vídeo horizontal (16:9) */}
            <div style={{ 
              width: '100%', 
              aspectRatio: '16/9', 
              background: 'rgba(0,0,0,0.5)', 
              borderRadius: '16px', 
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              overflow: 'hidden'
            }}>
               <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', cursor: 'pointer' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
               </div>
               <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Área para Vídeo (1080x720)</span>
            </div>

            {/* Depoimentos Automáticos */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '300px' }}>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.4, marginBottom: '2rem', color: '#ffffff' }}>
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '2rem' }}>
                    {/* Imagem de Avatar Placeholder */}
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: '#ffffff', margin: 0 }}>{testimonials[activeTestimonial].name}</p>
                      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>{testimonials[activeTestimonial].role}</p>
                    </div>
                    <div style={{ marginLeft: 'auto', width: '40px', height: '40px', background: '#0284c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 800 }}>
                      "
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
