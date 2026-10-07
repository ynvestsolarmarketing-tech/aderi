import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import logo from '../assets/logo.png';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <footer style={{ background: '#ffffff', padding: '6rem 0 3rem', color: '#334155', borderTop: '1px solid #e2e8f0' }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        <div className="footer-col-1">
          <a href="#home" className="footer-logo">
            <img src={logo} alt="Logotipo da ADERI Energia Solar por Assinatura" style={{ height: '50px', marginBottom: '2rem' }} />
          </a>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: '#74b814', textTransform: 'uppercase' }}>Contato</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <a href="mailto:contato@aderi.org" style={{ color: '#0f172a', textDecoration: 'none' }}>contato@aderi.org</a>
          </h3>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#64748b' }}>
            <a href="tel:+5508001234567" style={{ color: 'inherit', textDecoration: 'none' }}>+55 0800 123 4567</a>
          </h3>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://www.linkedin.com/company/aderi" target="_blank" rel="noopener noreferrer" style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://www.instagram.com/aderibahia/" target="_blank" rel="noopener noreferrer" style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>
        
        <div>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: '#74b814', textTransform: 'uppercase' }}>Links Rápidos</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#como-funciona" className="footer-link">Como Funciona</a>
            <a href="#parceiros" className="footer-link">Parceiros</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#blog" className="footer-link">Blog</a>
            <a href="/privacidade.html" className="footer-link">Política de Privacidade</a>
            <a href="/termos.html" className="footer-link">Termos de Uso</a>
          </div>
        </div>

        <div>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: '#74b814', textTransform: 'uppercase' }}>Inscreva-se</p>
          <p style={{ color: '#475569', marginBottom: '1rem' }}>Fique por dentro das novidades do setor de GD.</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', borderBottom: '1px solid #cbd5e1', paddingBottom: '0.5rem', position: 'relative' }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ex: joao@email.com" style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', flex: 1, fontSize: '0.95rem' }} />
            <button type="submit" style={{ background: 'transparent', border: 'none', color: '#74b814', cursor: 'pointer', fontWeight: 800, fontSize: '1.2rem' }}>→</button>
          </form>
          {status === 'success' && <p style={{ color: '#74b814', fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 600 }}>Inscrição realizada com sucesso!</p>}
          {status === 'error' && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 600 }}>Por favor, insira um e-mail válido.</p>}
        </div>
      </div>

      <div className="container footer-bottom" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} ADERI Energia. Todos os direitos reservados.
        </p>
        <p style={{ color: '#64748b', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          Feito com <Leaf size={14} color="#74b814" /> para um futuro sustentável.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
