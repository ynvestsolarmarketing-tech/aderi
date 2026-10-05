import React from 'react';

function Blog() {
  return (
    <>
      {/* Marquee (Scrolling text) */}
      <section style={{ padding: '2rem 0', background: 'var(--color-bg)', borderTop: '1px solid var(--color-surface)' }}>
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '2rem', color: 'var(--color-dark)', fontWeight: 700, fontSize: '1.5rem' }}>
          <span style={{ color: 'var(--color-secondary)' }}>Energia Limpa</span> 
          <span>—</span>
          <span>Redução na Conta</span>
          <span>—</span>
          <div style={{ width: '120px', height: '40px', background: 'url("/images/hero.jpg") center/cover', borderRadius: '40px', display: 'inline-block', verticalAlign: 'middle' }}></div>
          <span>—</span>
          <span style={{ color: 'var(--color-secondary)' }}>Foco no Cliente</span>
          <span>—</span>
          <span>Sustentabilidade</span>
        </div>
      </section>

      {/* Seção de Notícias/Blog */}
      <section style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>Blog & Atualizações</p>
              <h2 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px', color: 'var(--color-dark)' }}>Fique por dentro das novidades</h2>
            </div>
            <button style={{ background: 'var(--color-dark)', color: 'var(--color-text-inverse)', padding: '1rem 2rem', border: 'none', borderRadius: '4px', fontWeight: 700, cursor: 'pointer' }}>
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
        background: 'linear-gradient(to right, rgba(14,23,31,0.8) 0%, rgba(14,23,31,0.2) 100%), url("/images/testimonial.jpg") center/cover no-repeat',
        display: 'flex', alignItems: 'center'
      }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', color: 'var(--color-text-inverse)' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1 }}>
              Feedback
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.4, marginBottom: '2rem' }}>
              "Com a ADERI, nossa empresa reduziu significativamente os custos mensais sem precisar instalar uma única placa solar no telhado. O atendimento é incrível e o modelo funciona perfeitamente."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop") center/cover' }}></div>
              <div>
                <p style={{ fontWeight: 700 }}>Carlos Almeida</p>
                <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Diretor Operacional</p>
              </div>
              <div style={{ marginLeft: 'auto', width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-dark)', fontWeight: 800 }}>
                "
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
