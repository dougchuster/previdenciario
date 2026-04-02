import { useState } from 'react';
import { Gavel, ImageIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

/** Imagem da seção — arquivo em `public/images/uploads/aposentadoinss.webp`. */
const PAINPOINTS_IMAGE_SRC = '/images/uploads/aposentadoinss.webp';

/** Palavras-chave em vermelho */
const accentRed = 'font-semibold text-[#b91c1c]';

const challenges: {
  n: string;
  segments: { t: string; mark?: boolean }[];
}[] = [
  {
    n: '01',
    segments: [
      { t: 'Teve seu ' },
      { t: 'benefício negado', mark: true },
      { t: ' pelo ' },
      { t: 'INSS', mark: true },
      { t: ' sem uma ' },
      { t: 'explicação clara', mark: true },
      { t: '?' },
    ],
  },
  {
    n: '02',
    segments: [
      { t: 'Tem ' },
      { t: 'medo', mark: true },
      { t: ' de se aposentar com um ' },
      { t: 'valor muito menor', mark: true },
      { t: ' do que o esperado?' },
    ],
  },
  {
    n: '03',
    segments: [
      { t: 'Sente que está ' },
      { t: 'perdendo tempo', mark: true },
      { t: ' com a ' },
      { t: 'burocracia', mark: true },
      { t: ' das novas regras da previdência?' },
    ],
  },
  {
    n: '04',
    segments: [
      { t: 'Quer saber se o seu ' },
      { t: 'tempo de contribuição', mark: true },
      { t: ' já é suficiente para garantir a sua ' },
      { t: 'aposentadoria hoje', mark: true },
      { t: '?' },
    ],
  },
  {
    n: '05',
    segments: [
      { t: 'Prefere que um ' },
      { t: 'especialista analise o seu caso', mark: true },
      { t: ' para garantir que você ' },
      { t: 'não perca dinheiro', mark: true },
      { t: '?' },
    ],
  },
];

function ChallengeQuestion({
  segments,
}: {
  segments: { t: string; mark?: boolean }[];
}) {
  return (
    <p className="text-pretty font-sans text-base font-medium leading-snug tracking-tight text-on-surface sm:text-lg md:text-xl md:leading-[1.45]">
      {segments.map((s, i) =>
        s.mark ? (
          <span key={i} className={accentRed}>
            {s.t}
          </span>
        ) : (
          <span key={i}>{s.t}</span>
        ),
      )}
    </p>
  );
}

function PainPointsImage() {
  const [showFallback, setShowFallback] = useState(false);

  if (showFallback) {
    return (
      <div className="space-y-5 lg:sticky lg:top-24 lg:flex lg:h-full lg:flex-col">
        <div
          className="flex min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary-container/30 bg-gradient-to-br from-surface-container-high/90 to-surface-container-low px-6 py-12 text-center lg:min-h-0 lg:flex-1"
          role="img"
          aria-label="Área para imagem: verifique o arquivo em public/images/uploads/aposentadoinss.webp"
        >
          <ImageIcon className="h-10 w-10 text-primary-container/50" strokeWidth={1.25} aria-hidden />
          <p className="max-w-xs font-sans text-sm text-on-surface-variant">
            Verifique o arquivo em{' '}
            <code className="rounded bg-surface-container-highest px-1.5 py-0.5 text-xs text-on-surface">
              public/images/uploads/aposentadoinss.webp
            </code>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-none">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div
              key={idx}
              className="flex min-h-[160px] items-center justify-center rounded-2xl border-2 border-dashed border-primary-container/25 bg-gradient-to-br from-surface-container-high/70 to-surface-container-low/90 px-4 py-8 text-center"
            >
              <div className="space-y-2">
                <ImageIcon
                  className="mx-auto h-8 w-8 text-primary-container/45"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <p className="font-sans text-xs uppercase tracking-[0.18em] text-on-surface-variant/70">
                  Espaço para imagem {idx + 2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 lg:sticky lg:top-24 lg:flex lg:h-full lg:flex-col">
      <figure className="group relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(27,28,26,0.25)] ring-1 ring-black/[0.06] lg:flex-1">
        <img
          src={PAINPOINTS_IMAGE_SRC}
          alt="Aposentadoria e INSS — ilustração da seção"
          className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] lg:aspect-auto lg:min-h-0"
          loading="lazy"
          decoding="async"
          onError={() => setShowFallback(true)}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-inverse-surface/25 via-transparent to-transparent opacity-80"
          aria-hidden
        />
      </figure>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-none">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className="flex min-h-[160px] items-center justify-center rounded-2xl border border-outline-variant/45 bg-surface-container-low/70 shadow-[0_12px_32px_-20px_rgba(27,28,26,0.18)] ring-1 ring-black/[0.03] backdrop-blur-sm"
          >
            <div className="space-y-2 text-center">
              <ImageIcon
                className="mx-auto h-8 w-8 text-primary-container/50"
                strokeWidth={1.25}
                aria-hidden
              />
              <p className="font-sans text-xs uppercase tracking-[0.18em] text-on-surface-variant/70">
                Espaço para imagem {idx + 2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChallengesBlock() {
  return (
    <ul className="flex flex-col gap-5 md:gap-6">
      {challenges.map((item, idx) => (
        <motion.li
          key={item.n}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: idx * 0.08 }}
          whileHover={{ y: -3 }}
          className="group relative overflow-hidden rounded-2xl border border-red-200/70 bg-gradient-to-br from-white via-white to-red-50/[0.35] p-6 shadow-[0_10px_36px_-14px_rgba(185,28,28,0.08)] transition-[box-shadow,transform,border-color] duration-300 hover:border-red-300/90 hover:shadow-[0_18px_44px_-14px_rgba(185,28,28,0.12)] md:p-7"
        >
          <div
            className="pointer-events-none absolute left-0 top-1/2 z-[1] h-[68%] w-[2.5px] -translate-y-1/2 rounded-full bg-[#ef4444]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
          <div className="relative flex gap-4 md:gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-inverse-surface font-sans text-sm font-bold tabular-nums text-primary-container shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:h-[3.25rem] md:w-[3.25rem]">
              {item.n}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <ChallengeQuestion segments={item.segments} />
            </div>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

function ClosingHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-4xl px-2 text-center"
    >
      <p className="font-serif text-2xl leading-[1.25] text-on-surface sm:text-3xl md:text-4xl md:leading-[1.2] lg:text-[2.75rem] lg:leading-[1.15]">
        <span className="block">Se alguma resposta for sim,</span>
        <span className="mt-2 block font-semibold italic text-primary-container drop-shadow-[0_2px_24px_rgba(187,152,87,0.2)] md:mt-3">
          você não está sozinho.
        </span>
      </p>
      <div
        className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary-container/50 to-transparent md:mt-8 md:w-24"
        aria-hidden
      />
    </motion.div>
  );
}

function SolutionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative mx-auto w-full max-w-5xl px-0 sm:px-2"
    >
      <div className="relative overflow-hidden rounded-2xl border border-outline-variant/40 bg-gradient-to-b from-white via-surface-container-low/50 to-surface-container-high/95 shadow-[0_24px_64px_-20px_rgba(27,28,26,0.16),0_8px_32px_-12px_rgba(119,90,31,0.08)] ring-1 ring-black/[0.035]">
        <div
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/20 via-primary-container/70 to-primary/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-primary-container/[0.09] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-primary/[0.04] blur-2xl"
          aria-hidden
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="mb-8 flex flex-col items-center gap-4">
              <div className="inline-flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary-container via-primary-container/92 to-primary/90 text-on-primary-container shadow-[0_12px_32px_-8px_rgba(119,90,31,0.35)] ring-[3px] ring-white">
                <Gavel className="h-7 w-7" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
                Solução jurídica
              </p>
            </div>

            <h3 className="font-serif text-[1.75rem] leading-[1.18] text-on-surface sm:text-[2rem] md:text-[2.35rem] md:leading-[1.15] lg:text-[2.5rem]">
              Nós resolvemos a complexidade para você.
            </h3>

            <p className="mt-6 font-sans text-base leading-[1.75] text-on-surface-variant sm:mt-7 sm:text-[1.0625rem]">
              Nossa abordagem editorial e minuciosa permite identificar erros nos cálculos do INSS que{' '}
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary-container/14 px-2.5 py-0.5 font-semibold text-primary">
                90% dos segurados
              </span>{' '}
              desconhecem.
            </p>

            <motion.a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-animated-gradient mt-10 flex w-full max-w-lg items-center justify-center gap-3 rounded-sm px-8 py-4 text-center text-sm font-bold uppercase tracking-wide shadow-xl sm:mt-11 sm:text-base"
            >
              <span className="inline-flex shrink-0" aria-hidden>
                <FaWhatsapp size={22} />
              </span>
              Falar no WhatsApp agora
            </motion.a>

            <p className="mt-4 max-w-sm font-sans text-xs leading-relaxed text-on-surface-variant/75">
              Resposta rápida. Sem compromisso na primeira conversa.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PainPoints() {
  return (
    <section
      id="pain-points"
      className="relative overflow-hidden bg-surface bg-premium-noise py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(187,152,87,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <h2 className="font-serif text-3xl leading-tight text-on-surface md:text-4xl lg:text-[2.5rem]">
            Você se identifica com algum destes{' '}
            <span className="italic text-primary-container">desafios?</span>
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-on-surface-variant md:text-lg">
            O sistema previdenciário pode ser um labirinto. Não deixe que anos de trabalho sejam
            perdidos por falhas administrativas.
          </p>
        </motion.div>

        {/* Perguntas à esquerda / acima; imagem à direita / abaixo no mobile */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="min-w-0"
          >
            <ChallengesBlock />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="min-w-0 lg:flex"
          >
            <PainPointsImage />
          </motion.div>
        </div>

        <div className="mt-14 md:mt-16 lg:mt-20">
          <ClosingHeadline />
        </div>

        <div className="mt-10 md:mt-12 lg:mt-14">
          <SolutionCard />
        </div>
      </div>
    </section>
  );
}
