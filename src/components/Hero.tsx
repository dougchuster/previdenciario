import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

function HeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[#1b1918]" aria-hidden />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/backgrounds/back2law.jpg')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1b1918]/82 via-[#1b1918]/68 to-[#1b1918]/88"
        aria-hidden
      />
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
        className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/images/grid-white3.webp')",
          backgroundSize: '420px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-premium-noise opacity-50" aria-hidden />
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(100dvh,920px)] min-w-0 flex-col overflow-hidden pb-0 pt-24 sm:pt-28 md:pt-20"
    >
      <HeroBackdrop />

      {/* Retrato como camada de “background” à direita — fora do fluxo, pode ocupar muito mais altura */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-[4] h-[min(52vh,460px)] w-[min(92vw,400px)] -translate-x-1/2 sm:h-[min(58vh,520px)] sm:w-[min(88vw,440px)] lg:left-auto lg:right-0 lg:h-[min(98vh,1180px)] lg:w-[min(54vw,960px)] lg:translate-x-0 xl:w-[min(52vw,1000px)]">
        <img
          src="/images/paula_matos_hero.png"
          alt="Drª Paula Matos — advocacia previdenciária"
          className="h-full w-full object-contain object-bottom object-center drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)] sm:object-right lg:object-right"
          width={960}
          height={1440}
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Degradê sobre o retrato; atrás do texto (z-20) */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-[15] h-1/2 min-h-[12rem] w-screen max-w-none -translate-x-1/2"
        style={{
          background:
            'linear-gradient(to top, #1b1918 0%, rgba(27, 25, 24, 0.82) 28%, rgba(27, 25, 24, 0.28) 58%, transparent 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-20 mx-auto w-full min-w-0 max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative z-30 flex min-w-0 max-w-full flex-col justify-center py-6 sm:py-8 lg:max-w-[65%] lg:py-12 lg:pr-6 xl:py-16"
        >
          <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4" aria-hidden>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-primary-container/55 to-primary-container sm:w-16 md:w-28" />
            <div className="relative flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
              <span className="absolute inset-0 rotate-45 rounded-sm border border-primary-container/35 bg-primary-container/[0.08] shadow-[0_0_28px_rgba(187,152,87,0.18)]" />
              <span className="relative h-2 w-2 rounded-full bg-primary-container shadow-[0_0_14px_rgba(187,152,87,0.65)]" />
            </div>
            <span className="h-px w-10 bg-gradient-to-l from-transparent via-primary-container/55 to-primary-container sm:w-16 md:w-28" />
          </div>

          <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary-container/95 sm:text-[11px]">
            Coimbra & Ruas · Direito previdenciário
          </p>

          <h1 className="font-serif text-[clamp(1.85rem,6vw+0.75rem,2.35rem)] leading-[1.12] text-surface drop-shadow-[0_4px_48px_rgba(0,0,0,0.35)] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-[3.5rem] lg:leading-[1.08]">
            Sua aposentadoria é um{' '}
            <span className="italic text-primary-container">patrimônio</span>, não apenas um
            benefício.
          </h1>

          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-surface/78 sm:mt-8 sm:text-lg md:text-xl">
            Proteja seu futuro com uma análise técnica rigorosa e personalizada. Buscamos o valor
            máximo permitido por lei, com transparência em cada etapa.
          </p>

          <div className="mt-4 h-px w-20 bg-gradient-to-r from-primary-container/50 to-transparent" aria-hidden />

          <div className="mt-8 inline-flex max-w-full items-center gap-2 rounded-full border border-primary-container/30 bg-primary-container/[0.08] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-container" />
            </span>
            <span className="font-sans text-xs font-medium text-primary-container/95 sm:text-sm">
              Vagas limitadas para análise gratuita este mês
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center">
            <motion.a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-animated-gradient inline-flex items-center justify-center rounded-sm px-8 py-4 text-center text-sm font-bold uppercase tracking-wide shadow-xl sm:min-w-[240px] sm:text-base"
            >
              Analisar meu caso agora
            </motion.a>
            <motion.a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-primary-container/40 bg-inverse-surface/55 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors hover:border-primary-container/55 hover:bg-inverse-surface/75 sm:min-w-[240px] sm:text-base"
            >
              <span className="inline-flex shrink-0" aria-hidden>
                <FaWhatsapp size={22} />
              </span>
              Falar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
