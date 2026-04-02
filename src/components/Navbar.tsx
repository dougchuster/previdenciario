import { motion } from 'motion/react';
import { CONTACT_WHATSAPP_HREF } from '@/src/contact';

const linkFocus =
  'outline-none ring-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container/55 focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface';

const navLinks = [
  { label: 'Início', href: '#top' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Especialidades', href: '#specialties' },
  { label: 'Sobre', href: '#about' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Dúvidas', href: '#faq' },
] as const;

const linkClass = `font-sans text-[13px] font-medium tracking-tight text-white/75 transition-colors duration-300 hover:text-primary-container lg:text-sm ${linkFocus}`;

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full isolate border-0 border-transparent bg-inverse-surface/55 pt-[env(safe-area-inset-top)] shadow-[0_6px_28px_-4px_rgba(0,0,0,0.28),0_2px_12px_-2px_rgba(0,0,0,0.12)] outline-none backdrop-blur-xl backdrop-saturate-150 [backface-visibility:hidden] [transform:translateZ(0)]"
    >
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-2 px-4 py-3 sm:px-6 md:h-20 md:flex-row md:items-center md:justify-between md:gap-x-4 md:gap-y-0 md:py-0 lg:px-8">
        <div className="flex h-12 shrink-0 items-center justify-between gap-4 md:h-auto md:justify-start">
          <a href="#top" className={`flex shrink-0 items-center rounded-sm py-1 ${linkFocus}`}>
            <img
              src={encodeURI('/images/logo menu.webp')}
              alt="Coimbra & Ruas — Advocacia previdenciária"
              className="pointer-events-none h-10 w-auto max-w-[min(100%,220px)] select-none object-contain object-left md:h-11 lg:h-12"
              width={260}
              height={56}
              decoding="async"
              draggable={false}
            />
          </a>
          <motion.a
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`btn-animated-gradient shrink-0 rounded-sm px-4 py-2 text-xs font-medium md:hidden ${linkFocus}`}
          >
            Consultar
          </motion.a>
        </div>

        <div className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-2 md:flex lg:gap-x-5 xl:gap-x-6">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </div>

        <motion.a
          href={CONTACT_WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`btn-animated-gradient hidden shrink-0 rounded-sm px-6 py-2 text-sm font-medium md:inline-flex ${linkFocus}`}
        >
          Consultar especialista
        </motion.a>

        {/* Mobile: rolagem horizontal para não empilhar demais a barra */}
        <div className="flex w-full gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`shrink-0 whitespace-nowrap text-[12px] ${linkClass}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
