import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Quanto tempo demora o planejamento?',
    answer:
      'O estudo técnico completo leva em média de 7 a 15 dias úteis, dependendo da complexidade dos seus vínculos e documentação.',
  },
  {
    question: 'Vocês cobram pelo primeiro contato?',
    answer:
      'Não. Nosso primeiro atendimento é gratuito e totalmente informativo. Ele serve para ouvir sua história, entender sua dúvida previdenciária e orientar, com responsabilidade, os próximos passos possíveis para o seu caso. Sem compromisso financeiro nesse primeiro momento.',
  },
  {
    question: 'Já estou aposentado, ainda posso revisar?',
    answer:
      'Sim. Na maioria dos casos, existe um prazo de 10 anos (decadência) para pedir revisões. Analisamos oportunidades como inclusão de vínculos omitidos, reconhecimento de tempo especial e erros no cálculo do benefício.',
  },
  {
    question: 'Trabalhei no privado (RGPS) e no público (RPPS). Consigo somar o tempo?',
    answer:
      'Sim, essa soma é possível e se chama contagem recíproca de tempo de contribuição. Ela permite unir os períodos trabalhados no setor privado (INSS) e no serviço público para fins de aposentadoria. Exige averbações formais e análise técnica para definir qual regime é mais vantajoso.',
  },
  {
    question: 'As regras são diferentes para professores ou policiais?',
    answer:
      'Sim. Professores e profissionais da segurança pública têm regras específicas previstas na Constituição Federal. Há redução na idade mínima e no tempo de contribuição, com critérios que variam conforme o regime. Uma análise individualizada é fundamental para garantir o melhor benefício.',
  },
  {
    question: 'O que aconteceu com a Revisão da Vida Toda?',
    answer:
      'O STF julgou a tese improcedente em 2024, o que significa que ela não pode mais ser aplicada. Porém, existem outras oportunidades legítimas de revisão, como inclusão de vínculos omitidos, reconhecimento de tempo especial e correção de erros no cálculo.',
  },
  {
    question: 'Atendem clientes de outros estados?',
    answer:
      'Sim. Atuamos de forma 100% digital com segurança jurídica, atendendo clientes em todo o Brasil e até brasileiros residentes no exterior.',
  },
  {
    question: 'Quais documentos preciso reunir?',
    answer:
      'Depende do tipo de benefício, mas geralmente: RG, CPF, carteira de trabalho (física ou digital), CNIS (extrato previdenciário), contracheques e laudos médicos (se aplicável). Na primeira conversa, orientamos exatamente o que é necessário para o seu caso.',
  },
];

function FaqBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#1b1918]" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_110%_60%_at_50%_-15%,rgba(187,152,87,0.16),transparent_52%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_45%_at_50%_0%,rgba(255,250,240,0.06),transparent_48%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_85%,rgba(0,0,0,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(187,152,87,0.11) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(187,152,87,0.11) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '28px 28px',
          backgroundPosition: 'center',
          WebkitMaskImage:
            'radial-gradient(ellipse 78% 68% at 50% 50%, black 0%, black 48%, rgba(0,0,0,0.8) 62%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 78% 68% at 50% 50%, black 0%, black 48%, rgba(0,0,0,0.8) 62%, transparent 100%)',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-premium-noise opacity-50" aria-hidden />
    </>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 text-surface md:py-28">
      <FaqBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mb-12 max-w-4xl text-center md:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4" aria-hidden>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-primary-container/50 to-primary-container sm:w-16 md:w-24" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-primary-container/30 bg-primary-container/[0.08] text-primary-container shadow-[0_0_24px_rgba(187,152,87,0.15)] sm:h-11 sm:w-11">
              <HelpCircle className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={1.5} />
            </div>
            <span className="h-px w-10 bg-gradient-to-l from-transparent via-primary-container/50 to-primary-container sm:w-16 md:w-24" />
          </div>
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container/90">
            Tire suas dúvidas
          </p>
          <h2 className="font-serif text-3xl leading-[1.15] text-white drop-shadow-[0_2px_32px_rgba(187,152,87,0.1)] sm:text-4xl md:text-[2.65rem]">
            Dúvidas <span className="italic text-primary-container">frequentes</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-primary-container/40 to-transparent" aria-hidden />
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="overflow-hidden rounded-xl border border-white/20 bg-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.45),0_4px_16px_-6px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.06]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full min-w-0 items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-surface-container-low/60 sm:gap-4 sm:p-6 md:p-7"
                aria-expanded={openIndex === idx}
              >
                <span className="min-w-0 flex-1 text-pretty font-serif text-lg font-semibold leading-snug text-on-surface sm:text-xl md:text-2xl">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="border-t border-outline-variant/25 px-4 pb-5 pt-0 sm:px-6 sm:pb-6 md:px-7 md:pb-7">
                      <p className="pt-2 text-pretty font-sans text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-[1.125rem] lg:text-xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
