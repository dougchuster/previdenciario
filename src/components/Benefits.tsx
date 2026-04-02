import { ShieldCheck, TrendingUp, History, ChevronRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const benefits = [
  {
    step: '01',
    icon: ShieldCheck,
    title: 'Segurança Jurídica',
    description:
      'A certeza de que seu pedido está sendo fundamentado nas leis mais recentes e favoráveis.',
  },
  {
    step: '02',
    icon: TrendingUp,
    title: 'Maximização do Valor',
    description:
      'Não aceite o primeiro valor que o INSS propõe. Nós buscamos o teto máximo possível.',
  },
  {
    step: '03',
    icon: History,
    title: 'Agilidade no Processo',
    description:
      'Documentação organizada e protocolos corretos evitam exigências e demoras desnecessárias.',
  },
];

function ProcessConnector({ orientation }: { orientation: 'horizontal' | 'vertical' }) {
  if (orientation === 'horizontal') {
    return (
      <div
        className="hidden w-14 shrink-0 flex-col items-center justify-center gap-0 self-stretch py-4 lg:flex xl:w-20"
        aria-hidden
      >
        <div className="flex w-full items-center gap-0">
          <div className="h-px flex-1 bg-gradient-to-r from-primary-container/25 via-primary-container/80 to-primary-container" />
          <ChevronRight
            className="h-7 w-7 shrink-0 text-primary-container drop-shadow-[0_0_10px_rgba(187,152,87,0.4)]"
            strokeWidth={2.5}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center py-1 lg:hidden" aria-hidden>
      <div className="flex flex-col items-center">
        <div className="h-8 w-px bg-gradient-to-b from-primary-container/60 via-primary-container to-primary-container/40" />
        <ChevronDown className="-mt-0.5 h-6 w-6 text-primary-container" strokeWidth={2.5} />
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="relative mx-auto mb-10 max-w-4xl text-center md:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="mb-4 flex items-center gap-3 sm:gap-4" aria-hidden>
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-primary-container/50 to-primary-container sm:w-16 md:w-24" />
          <div className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
            <span className="absolute inset-0 rotate-45 rounded-sm border border-primary-container/35 bg-primary-container/[0.07] shadow-[0_0_24px_rgba(187,152,87,0.12)]" />
            <span className="relative h-2 w-2 rounded-full bg-primary-container/90 shadow-[0_0_12px_rgba(187,152,87,0.6)]" />
          </div>
          <span className="h-px w-10 bg-gradient-to-l from-transparent via-primary-container/50 to-primary-container sm:w-16 md:w-24" />
        </div>
        <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container/90">
          Benefícios
        </p>
        <h2 className="font-serif text-3xl leading-[1.15] text-white drop-shadow-[0_2px_32px_rgba(187,152,87,0.12)] sm:text-4xl md:text-[2.75rem]">
          O que você ganha ao entrar em contato{' '}
          <span className="italic text-primary-container">agora?</span>
        </h2>
      </motion.div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 text-surface md:py-28">
      {/* Base #1b1918 + iluminação suave radial no topo */}
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
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/images/grid-white3.webp')",
          backgroundSize: '420px',
        }}
        aria-hidden
      />
      <div className="bg-premium-noise pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle />

        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-center">
          {benefits.map((benefit, idx) => (
            <div key={benefit.step} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="relative flex min-w-0 flex-1 flex-col rounded-2xl border border-primary-container/35 bg-[#2a2623]/85 p-6 shadow-[0_20px_56px_-12px_rgba(187,152,87,0.14),0_8px_32px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-white/[0.08] backdrop-blur-[2px] transition-[transform,box-shadow] duration-300 hover:shadow-[0_24px_64px_-10px_rgba(187,152,87,0.18),0_10px_36px_-8px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      'radial-gradient(120% 80% at 50% 0%, rgba(187,152,87,0.1), transparent 55%)',
                  }}
                  aria-hidden
                />
                <span className="relative mb-4 inline-flex w-fit rounded-md border border-primary-container/35 bg-primary-container/[0.12] px-2.5 py-1 font-sans text-xs font-semibold tracking-widest text-primary-container shadow-[0_0_20px_rgba(187,152,87,0.08)]">
                  {benefit.step}
                </span>
                <div className="relative mb-4 inline-block scale-105 text-primary-container">
                  <benefit.icon className="h-12 w-12" strokeWidth={1.25} />
                </div>
                <h3 className="relative mb-3 font-serif text-xl text-white">{benefit.title}</h3>
                <p className="relative text-sm font-sans leading-relaxed text-surface/70">
                  {benefit.description}
                </p>
              </motion.article>
              {idx < benefits.length - 1 && (
                <>
                  <ProcessConnector orientation="vertical" />
                  <ProcessConnector orientation="horizontal" />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 px-1 text-center sm:mt-16 md:mt-20">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-animated-gradient inline-block w-full max-w-md rounded-sm px-6 py-4 text-center text-base font-bold shadow-2xl sm:w-auto sm:max-w-none sm:px-10 sm:py-5 sm:text-lg"
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            QUERO UMA ANÁLISE DO MEU CASO
          </motion.a>
        </div>
      </div>
    </section>
  );
}
