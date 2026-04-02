import type { CSSProperties } from 'react';
import {
  Baby,
  Calendar,
  FileText,
  Heart,
  HeartPulse,
  Landmark,
  ShieldAlert,
  UserCheck,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';

/** Fundo escuro aplicado inline para não ser sobrescrito pelo pipeline do Tailwind v4. */
const specialtiesSectionStyle: CSSProperties = {
  backgroundColor: '#3d3a33',
  backgroundImage: [
    'radial-gradient(ellipse 130% 75% at 50% 0%, rgba(255, 191, 100, 0.2) 0%, rgba(255, 170, 80, 0.06) 38%, transparent 62%)',
    'radial-gradient(rgba(255, 255, 255, 0.085) 1px, transparent 1px)',
    'linear-gradient(180deg, #454238 0%, #3d3a33 42%, #2a2824 100%)',
  ].join(', '),
  backgroundSize: '100% 100%, 20px 20px, 100% 100%',
  backgroundRepeat: 'no-repeat, repeat, no-repeat',
  backgroundPosition: 'center top, 0 0, center',
  isolation: 'isolate',
};

/** Topo do card: esquerda → brilho no canto superior direito; centro → centro; direita → canto superior esquerdo */
const CARD_RADIAL_ORIGIN = ['100% 0%', '50% 0%', '0% 0%'] as const;

const specialties = [
  {
    icon: Calendar,
    title: "Planejamento Previdenciário",
    description: "Estudo técnico para descobrir a melhor data e o maior valor para sua aposentadoria.",
  },
  {
    icon: UserCheck,
    title: "Aposentadorias",
    description: "Por idade, tempo de contribuição, especial ou por incapacidade. Análise completa de vínculos.",
  },
  {
    icon: FileText,
    title: "Revisão de Benefícios",
    description: "Revisão da Vida Toda e outras teses para aumentar o valor do que você já recebe.",
  },
  {
    icon: Users,
    title: "Pensão por Morte",
    description: "Garantia de amparo aos dependentes com agilidade e sensibilidade jurídica.",
  },
  {
    icon: Heart,
    title: "BPC / LOAS",
    description: "Benefício para idosos ou pessoas com deficiência em situação de vulnerabilidade.",
  },
  {
    icon: Landmark,
    title: "Servidor Público (RPPS)",
    description: "Regras específicas para servidores municipais, estaduais e federais.",
  },
  {
    icon: HeartPulse,
    title: "Auxílio-Doença e Acidente",
    description:
      "Benefícios por incapacidade temporária ou permanente. Acompanhamento de perícias e recursos contra indeferimentos.",
  },
  {
    icon: Baby,
    title: "Auxílio-Maternidade",
    description:
      "Proteção financeira durante afastamento por parto, adoção ou guarda judicial. RGPS e RPPS.",
  },
  {
    icon: ShieldAlert,
    title: "Defesa Contra Fraudes",
    description:
      "Empréstimos consignados indevidos, descontos irregulares e filiações fraudulentas. Proteção para idosos e pensionistas.",
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="relative overflow-hidden pt-24 pb-32 text-white md:pb-40"
      style={specialtiesSectionStyle}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-[3] h-[5px] w-[4.5rem] -translate-x-1/2 rounded-b-lg"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,230,180,0.15), #f0d080, #e8b050, #f0d080, rgba(255,230,180,0.15))',
          boxShadow:
            '0 0 28px 12px rgba(255, 195, 90, 0.45), 0 4px 20px rgba(255, 180, 60, 0.25)',
        }}
        aria-hidden
      />
      <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 font-serif text-4xl text-white sm:text-5xl md:text-[2.85rem] md:leading-tight">
            Especialidades <span className="italic text-primary-container">Previdenciárias</span>
          </h2>
          <div className="mx-auto h-px w-24 bg-primary-container/90" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {specialties.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/[0.14] bg-[rgba(67,64,56,0.42)] p-6 shadow-[0_8px_28px_-10px_rgba(0,0,0,0.42)] backdrop-blur-xl backdrop-saturate-150 transition-[box-shadow,transform,border-color] hover:border-white/20 hover:shadow-[0_10px_32px_-12px_rgba(0,0,0,0.38)] sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-xl"
                style={{
                  background: `radial-gradient(ellipse 115% 85% at ${CARD_RADIAL_ORIGIN[idx % 3]}, rgba(130, 122, 105, 0.38) 0%, rgba(100, 95, 82, 0.12) 38%, transparent 62%)`,
                }}
                aria-hidden
              />
              {/* Barra dourada — metade da espessura anterior; extremidades arredondadas */}
              <div
                className="pointer-events-none absolute left-0 top-1/2 z-[1] h-[68%] w-[2.5px] -translate-y-1/2 rounded-full bg-[#b08d35]"
                aria-hidden
              />
              <div className="relative z-[2] flex flex-1 flex-col items-center px-6 text-center">
                <item.icon
                  className="mb-4 h-11 w-11 shrink-0 text-[#c2a35d]"
                  strokeWidth={1.15}
                />
                <h3 className="mb-3 max-w-full font-serif text-xl font-medium leading-snug text-[#c2a35d] md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="max-w-full font-sans text-sm leading-relaxed text-white">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
