import { Calendar, Globe, ThumbsUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

const metrics = [
  { value: '2.000+', label: 'Famílias atendidas', icon: Users },
  { value: '10+', label: 'Anos de experiência', icon: Calendar },
  { value: '98%', label: 'Clientes satisfeitos', icon: ThumbsUp },
  { value: '100%', label: 'Atendimento digital no Brasil', icon: Globe },
] as const;

export default function Results() {
  return (
    <section id="results" className="relative overflow-hidden py-24 text-surface md:py-28">
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
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/images/grid-white3.webp')",
          backgroundSize: '420px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-premium-noise opacity-40" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-12"
        >
          <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-container/90">
            Resultados
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Números que <span className="italic text-primary-container">falam por si</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {metrics.map((m, idx) => (
            <motion.article
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="relative flex min-w-0 flex-col items-center rounded-2xl border border-primary-container/35 bg-[#2a2623]/85 p-6 text-center shadow-[0_20px_56px_-12px_rgba(187,152,87,0.14),0_8px_32px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-white/[0.08] backdrop-blur-[2px] transition-[transform,box-shadow] duration-300 hover:shadow-[0_24px_64px_-10px_rgba(187,152,87,0.18),0_10px_36px_-8px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'radial-gradient(120% 80% at 50% 0%, rgba(187,152,87,0.1), transparent 55%)',
                }}
                aria-hidden
              />
              <m.icon
                className="relative mb-4 h-12 w-12 text-primary-container"
                strokeWidth={1.25}
                aria-hidden
              />
              <p className="relative font-serif text-[2.1rem] leading-none tabular-nums text-primary-container md:text-[2.35rem]">
                {m.value}
              </p>
              <p className="relative mt-3 max-w-[14rem] font-sans text-sm leading-relaxed text-surface/70">
                {m.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
