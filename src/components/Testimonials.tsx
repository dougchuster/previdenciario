import { Fragment, useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const BASE = '/images/uploads/depoimentos';

function photoSrc(filename: string) {
  return `${BASE}/${encodeURIComponent(filename)}`;
}

const testimonials: {
  quote: string;
  author: string;
  role: string;
  image?: string;
  initials: string;
}[] = [
  {
    quote:
      'Eu achava que minha aposentadoria ainda ia demorar anos. Com o Plano 7D, descobri que eu já tinha direito e nem sabia! A equipe foi atenciosa e cuidou de tudo com seriedade.',
    author: 'Uilson de Souza',
    role: 'Motorista',
    image: photoSrc('Uilson de Souza.jpg'),
    initials: 'US',
  },
  {
    quote:
      'O INSS tinha negado meu auxílio-doença mesmo com todos os laudos. A Dra. Paula entrou com processo judicial e em menos de dois anos eu estava com o benefício pago, inclusive os retroativos. Gratidão define.',
    author: 'Evandro',
    role: 'Bombeiro hidráulico',
    image: photoSrc('Evandro.jpg'),
    initials: 'E',
  },
  {
    quote:
      'Meu avô faleceu e a pensão da minha avó foi negada sem explicação. O escritório nos orientou com firmeza e conseguiu reverter a decisão. Hoje minha avó está tranquila e amparada.',
    author: 'Jessiany Araújo',
    role: 'Empresária',
    image: photoSrc('Jessiany Araújo.jpg'),
    initials: 'JA',
  },
  {
    quote:
      'Trabalhei no serviço público e no setor privado e não sabia como funcionava essa soma. A equipe do escritório Coimbra & Ruas fez tudo com clareza e me mostrou o melhor caminho para me aposentar.',
    author: 'Maylon Trindade',
    role: 'Engenheiro',
    image: photoSrc('Maylon Trindade.jpg'),
    initials: 'MT',
  },
  {
    quote:
      'O INSS alegou que eu não tinha direito à aposentadoria especial, mesmo trabalhando por anos em ambiente insalubre. Com laudos e documentos técnicos reunidos pelo escritório, conseguimos comprovar tudo. Hoje estou aposentada e tranquila.',
    author: 'Lirandina Rodrigues',
    role: 'Aposentadoria especial',
    image: photoSrc('Lirandina Rodrigues.jpg'),
    initials: 'LR',
  },
];

/* ─── Avatar ─── */
function Avatar({
  image,
  initials,
  author,
}: {
  image?: string;
  initials: string;
  author: string;
}) {
  if (image) {
    return (
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/30 bg-surface-container-high shadow-sm ring-2 ring-surface">
        <img
          src={image}
          alt={`Retrato de ${author}`}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary-container/35 to-primary/15 text-base font-bold text-primary shadow-sm ring-2 ring-surface"
      aria-hidden
    >
      {initials}
    </div>
  );
}

/* ─── Star rating inside each card ─── */
function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="Avaliação 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" strokeWidth={0} />
      ))}
    </div>
  );
}

/* ─── Card content shared between carousel & grid ─── */
function TestimonialCardContent({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <Quote className="h-6 w-6 text-primary/40" strokeWidth={1.5} />
        <StarRating />
      </div>
      <p className="mb-6 flex-1 font-serif text-base font-medium italic leading-[1.75] text-on-surface sm:text-lg">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-4 border-t border-outline-variant/40 pt-5">
        <Avatar image={t.image} initials={t.initials} author={t.author} />
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-on-surface">{t.author}</p>
          <p className="text-sm font-medium text-on-surface-variant">{t.role}</p>
        </div>
      </div>
    </>
  );
}

/* ─── Card styled for the carousel (fixed width) ─── */
const CAROUSEL_CARD =
  'group flex h-full w-[min(85vw,20rem)] shrink-0 flex-col rounded-xl border border-outline-variant/50 bg-surface p-6 shadow-md transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 sm:w-[20rem]';

function CarouselCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article className={CAROUSEL_CARD}>
      <TestimonialCardContent t={t} />
    </article>
  );
}

/* ─── Google rating badge ─── */
function GoogleRatingBadge() {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 text-center">
      <div
        className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-outline-variant/70 bg-surface-container-low px-5 py-3 shadow-sm"
        role="img"
        aria-label="Atendimento avaliado com cinco estrelas no Google"
      >
        <div className="flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" strokeWidth={0} />
          ))}
        </div>
        <span className="hidden h-8 w-px bg-outline-variant/70 sm:block" aria-hidden />
        <div className="text-left">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Google
          </p>
          <p className="font-semibold text-on-surface">
            5,0 <span className="font-normal text-on-surface-variant">· atendimento</span>
          </p>
        </div>
      </div>
      <p className="max-w-md text-xs leading-relaxed text-on-surface-variant">
        Nota referente às avaliações do perfil do escritório no Google — o mesmo padrão de
        excelência que você vê nos depoimentos abaixo.
      </p>
    </div>
  );
}

/* ─── Infinite Marquee Carousel (JS-driven for reliability) ─── */
function TestimonialCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const rafRef = useRef<number>(0);
  const speedRef = useRef(0.15); // px per frame (~9px/s at 60fps)
  const pausedRef = useRef(false);

  const measureAndStart = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;

    // Reset position
    positionRef.current = 0;
    inner.style.transform = 'translateX(0)';

    const halfWidth = inner.scrollWidth / 2;

    const step = () => {
      if (!pausedRef.current) {
        positionRef.current -= speedRef.current;
        // When we've scrolled one full set, reset seamlessly
        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current += halfWidth;
        }
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

  useLayoutEffect(() => {
    measureAndStart();
    return () => cancelAnimationFrame(rafRef.current);
  }, [measureAndStart]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <div
      ref={scrollerRef}
      className="relative -mx-3 min-w-0 sm:-mx-6 md:-mx-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent sm:w-20"
        aria-hidden
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent sm:w-20"
        aria-hidden
      />

      <div className="overflow-hidden px-3 sm:px-6 md:px-8">
        {/* Exactly 2 copies for seamless infinite loop */}
        <div ref={innerRef} className="flex shrink-0 gap-6 will-change-transform">
          {testimonials.map((t) => (
            <Fragment key={`a-${t.author}`}>
              <CarouselCard t={t} />
            </Fragment>
          ))}
          {testimonials.map((t) => (
            <Fragment key={`b-${t.author}`}>
              <CarouselCard t={t} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Static grid fallback (prefers-reduced-motion) ─── */
function TestimonialCardAnimated({
  t,
  delay = 0,
}: {
  t: (typeof testimonials)[number];
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay }}
      className="group flex h-full flex-col rounded-xl border border-outline-variant/50 bg-surface p-6 shadow-md transition-[border-color,box-shadow] hover:border-primary/30 hover:shadow-lg"
    >
      <TestimonialCardContent t={t} />
    </motion.article>
  );
}

function StaticGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, idx) => (
        <Fragment key={t.author}>
          <TestimonialCardAnimated t={t} delay={idx * 0.05} />
        </Fragment>
      ))}
    </div>
  );
}

/* ─── Main export ─── */
export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-surface bg-premium-noise py-24 md:py-28"
    >
      {/* Decorative top line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-container/25 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl text-on-surface sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Quem viveu na pele a{' '}
            <span className="italic text-primary">luta previdenciária</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-[1.0625rem]">
            Histórias reais de quem confiou no escritório para aposentadoria, benefícios por
            incapacidade, pensão e direitos junto ao INSS.
          </p>
        </motion.div>

        <GoogleRatingBadge />

        {reduceMotion ? <StaticGrid /> : <TestimonialCarousel />}
      </div>
    </section>
  );
}