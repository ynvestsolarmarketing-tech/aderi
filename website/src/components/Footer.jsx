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
    <footer style={{ background: 'var(--color-dark)', padding: '6rem 0 3rem', color: 'var(--color-text-inverse)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
        <div>
          <a href="#home">
            <img src={logo} alt="ADERI Logo" style={{ height: '50px', filter: 'brightness(0) invert(1)', marginBottom: '2rem' }} />
          </a>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>Contato</p>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <a href="mailto:contato@aderi.org" style={{ color: 'inherit', textDecoration: 'none' }}>contato@aderi.org</a>
          </h3>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
            <a href="tel:+5508001234567" style={{ color: 'inherit', textDecoration: 'none' }}>+55 0800 123 4567</a>
          </h3>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#" style={{ color: 'var(--color-primary)' }}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--color-primary)' }}>Instagram</a>
          </div>
        </div>
        
        <div>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>Links Rápidos</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#como-funciona" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Como Funciona</a>
            <a href="#parceiros" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Parceiros</a>
            <a href="#faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>FAQ</a>
            <a href="#blog" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Blog</a>
            <a href="/privacidade.html" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Política de Privacidade</a>
            <a href="/termos.html" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Termos de Uso</a>
          </div>
        </div>

        <div>
          <p style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>Inscreva-se</p>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Fique por dentro das novidades do setor de GD.</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', borderBottom: '1px solid var(--color-text-muted)', paddingBottom: '0.5rem', position: 'relative' }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Seu e-mail" style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', flex: 1 }} />
            <button type="submit" style={{ background: 'transparent', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontWeight: 700 }}>→</button>
          </form>
          {status === 'success' && <p style={{ color: 'var(--color-primary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>Inscrição realizada com sucesso!</p>}
          {status === 'error' && <p style={{ color: '#ff4d4d', fontSize: '0.8rem', marginTop: '0.5rem' }}>Por favor, insira um e-mail válido.</p>}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Leaf color="var(--color-primary)" size={48} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '3rem', letterSpacing: '-1px' }}>ADERI</span>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} ADERI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
