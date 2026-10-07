import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  { 
    id: 1, 
    title: 'Haverá troca de titularidade na conta de luz?', 
    text: 'Sim, a titularidade da conta de energia será transferida para a ADERI. Todo o processo é feito por nós junto à distribuidora, garantindo que você receba apenas uma fatura com o desconto aplicado e sem dores de cabeça.',
  },
  { 
    id: 2, 
    title: 'Quando começo a ver a economia?', 
    text: 'Assim que você aderir à ADERI e a troca de titularidade for concluída, a economia começará já na sua primeira fatura emitida. É imediato após a aprovação.',
  },
  { 
    id: 3, 
    title: 'Quem pode ser cliente da ADERI?', 
    text: 'Pessoas físicas e jurídicas (residencial, comercial ou rural) que possuam uma conta de energia com valor médio mensal superior a R$ 250,00.',
  },
  { 
    id: 4, 
    title: 'E se faltar energia na minha casa ou empresa?', 
    text: 'A responsabilidade pela manutenção da rede física continua sendo da distribuidora local (ex: Cemig, CPFL). A ADERI intermedeia o contato caso você precise relatar falhas e te ajuda a cobrar resoluções rápidas.',
  },
  {
    id: 5,
    title: 'Preciso fazer alguma obra ou instalar placas?',
    text: 'Não! Nenhuma obra é necessária e não instalamos nada no seu telhado. A energia é gerada em nossas usinas solares remotas e chega até você pela rede elétrica que já existe na sua rua.'
  }
];

function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section style={{ padding: '6rem 2rem', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ color: '#74b814', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Dúvidas Frequentes</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-1px', textAlign: 'center', marginBottom: '4rem', textTransform: 'uppercase' }}>
          Tudo o que você precisa saber
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqItems.map(item => (
            <div 
              key={item.id} 
              style={{ 
                background: '#ffffff', 
                borderRadius: '16px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                border: '1px solid rgba(0,0,0,0.05)',
                overflow: 'hidden'
              }}
            >
              <button 
                onClick={() => toggleFaq(item.id)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '1.5rem', 
                  background: 'transparent', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', paddingRight: '1rem' }}>{item.title}</span>
                {activeFaq === item.id ? <ChevronUp color="#74b814" size={24} style={{ flexShrink: 0 }} /> : <ChevronDown color="#94a3b8" size={24} style={{ flexShrink: 0 }} />}
              </button>
              
              <AnimatePresence>
                {activeFaq === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
                      {item.text}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
