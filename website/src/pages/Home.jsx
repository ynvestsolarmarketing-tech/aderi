import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, MessageCircle, Banknote, ChevronDown } from 'lucide-react';

const InputWrapper = ({ icon, children }) => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
    <div style={{ position: 'absolute', left: '1rem', color: '#94a3b8', display: 'flex', alignItems: 'center' }}>
      {icon}
    </div>
    {children}
  </div>
);

const inputStyle = {
  width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem', color: '#334155', outline: 'none', boxSizing: 'border-box'
};

const selectStyle = {
  width: '100%', padding: '0.875rem 2.5rem 0.875rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem', color: '#64748b', outline: 'none', appearance: 'none', background: '#fff', boxSizing: 'border-box'
};

function Home() {
  const textRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 90%", "end 80%"]
  });
  const clipProgress = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if the user really selected an option or just passed the required somehow
    const formData = new FormData(e.target);
    const estado = formData.get('estado');
    const distribuidora = formData.get('distribuidora');
    const phone = formData.get('phone');
    
    // Simulating an error for phone numbers that are clearly too short
    if (phone && phone.length < 10) {
      setFormStatus('error');
      return;
    }

    // Simulate API call success
    setFormStatus('success');
  };

  return (
    <>
      <section id="home"
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          paddingTop: '6rem',
          paddingBottom: '4rem',
          background: 'linear-gradient(rgba(14, 23, 31, 0.4), rgba(14, 23, 31, 0.6)), url("/images/Hero.webp") center/cover no-repeat',
          color: '#ffffff'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', letterSpacing: '-1.5px', lineHeight: 1.05, fontWeight: 400 }}>
              <span style={{ fontWeight: 800 }}>Economize</span> com energia renovável <span style={{ fontWeight: 800 }}>sem investimento</span>
            </h1>
            
            <div className="hero-buttons-container">
              <button className="hero-button hero-btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('show-dev-modal'))}>
                Sobre nós <ArrowRight size={20} />
              </button>
              <a href="#como-funciona" className="hero-button hero-btn-secondary">
                Como Funciona
              </a>
            </div>
          </div>

          <div style={{ flex: '1 1 350px', maxWidth: '420px', background: '#ffffff', borderRadius: '24px', padding: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.25rem', color: '#1e293b', marginBottom: '1.5rem', fontWeight: 700 }}>Descubra o quanto você pode economizar</h3>
            
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#00cc00', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b' }}>Dados Recebidos!</h4>
                <p style={{ color: '#64748b', lineHeight: 1.5 }}>
                  Nossos especialistas analisarão o seu consumo e entrarão em contato em breve com sua simulação de economia.
                </p>
                <button 
                  onClick={() => setFormStatus(null)}
                  style={{ background: 'transparent', border: '1px solid #cbd5e1', padding: '0.75rem 1.5rem', borderRadius: '8px', color: '#475569', fontWeight: 600, cursor: 'pointer', marginTop: '1rem' }}
                >
                  Fazer nova simulação
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" required placeholder="Ex: João da Silva" style={{ ...inputStyle, padding: '0.75rem 1rem', background: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }} />
                  <input type="email" required placeholder="Ex: joao@email.com" style={{ ...inputStyle, padding: '0.75rem 1rem', background: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }} />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="tel" name="phone" required placeholder="Ex: (11) 99999-9999" style={{ ...inputStyle, padding: '0.75rem 1rem', background: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }} />
                  <input type="number" required placeholder="Ex: 500 (Valor da Conta)" style={{ ...inputStyle, padding: '0.75rem 1rem', background: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <select name="estado" required defaultValue="" style={{ ...selectStyle, padding: '0.75rem 1rem', background: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }}>
                    <option value="" disabled hidden>Estado (UF)</option>
                    <option value="AL" style={{color: '#000'}}>AL</option>
                    <option value="BA" style={{color: '#000'}}>BA</option>
                    <option value="CE" style={{color: '#000'}}>CE</option>
                    <option value="MA" style={{color: '#000'}}>MA</option>
                    <option value="PB" style={{color: '#000'}}>PB</option>
                    <option value="PE" style={{color: '#000'}}>PE</option>
                    <option value="PI" style={{color: '#000'}}>PI</option>
                    <option value="RN" style={{color: '#000'}}>RN</option>
                    <option value="SE" style={{color: '#000'}}>SE</option>
                  </select>
                  <select name="distribuidora" required defaultValue="" style={{ ...selectStyle, padding: '0.75rem 1rem', background: '#f8fafc', color: '#334155', borderColor: '#e2e8f0' }}>
                    <option value="" disabled hidden>Distribuidora</option>
                    <option value="neoenergia_coelba" style={{color: '#000'}}>Neoenergia Coelba (BA)</option>
                    <option value="enel_ce" style={{color: '#000'}}>Enel (CE)</option>
                    <option value="neoenergia_pe" style={{color: '#000'}}>Neoenergia (PE)</option>
                    <option value="neoenergia_cosern" style={{color: '#000'}}>Neoenergia Cosern (RN)</option>
                    <option value="equatorial_al" style={{color: '#000'}}>Equatorial (AL)</option>
                    <option value="equatorial_ma" style={{color: '#000'}}>Equatorial (MA)</option>
                    <option value="equatorial_pi" style={{color: '#000'}}>Equatorial (PI)</option>
                    <option value="energisa_pb" style={{color: '#000'}}>Energisa (PB)</option>
                    <option value="energisa_se" style={{color: '#000'}}>Energisa (SE)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <input type="checkbox" id="whatsapp" defaultChecked style={{ accentColor: 'var(--color-primary)' }} />
                  <label htmlFor="whatsapp" style={{ fontSize: '0.8rem', color: '#475569', cursor: 'pointer', lineHeight: 1.2, fontWeight: 500 }}>
                    Aceito receber informações da ADERI no WhatsApp
                  </label>
                </div>

                {formStatus === 'error' && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#ef4444', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, textAlign: 'center' }}>
                    Por favor, insira um telefone válido com DDD.
                  </div>
                )}

                <button type="submit" style={{ 
                  background: '#00cc00', color: '#ffffff', border: 'none', padding: '0.875rem', 
                  borderRadius: '8px', fontSize: '1rem', fontWeight: 700, marginTop: '0.5rem', cursor: 'pointer',
                  transition: 'transform 0.2s',
                  boxShadow: '0 4px 15px rgba(0, 204, 0, 0.3)'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Simular Economia
                </button>

                <p style={{ fontSize: '0.7rem', color: '#64748b', textAlign: 'center', margin: '0', lineHeight: 1.4 }}>
                  Ao enviar dados você concorda com nossos <a href="/termos.html" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 600 }}>Termos de Uso</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg)', textAlign: 'center' }}>
        <div className="container" ref={textRef} style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Base Layer (Faded text) */}
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-1px', lineHeight: 1.5, color: 'var(--color-text)', opacity: 0.15 }}>
            Reduza sua conta de luz sem precisar colocar a mão no bolso, fazer obras ou ficar preso a um contrato.
          </h2>

          {/* Reveal Layer (Blue blocks) */}
          <motion.h2 
            style={{ 
              position: 'absolute', top: 0, left: 0, right: 0,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-1px', lineHeight: 1.5,
              clipPath: useTransform(clipProgress, val => `inset(0 0 ${val} 0)`),
              WebkitClipPath: useTransform(clipProgress, val => `inset(0 0 ${val} 0)`)
            }}
          >
            <span style={{ 
              background: '#3b82f6', 
              color: '#ffffff', 
              padding: '0.2rem 0.5rem', 
              boxDecorationBreak: 'clone', 
              WebkitBoxDecorationBreak: 'clone' 
            }}>
              Reduza sua conta de luz sem precisar colocar a mão no bolso, fazer obras ou ficar preso a um contrato.
            </span>
          </motion.h2>

        </div>
      </section>
    </>
  );
}

export default Home;
