# Design System - Landing Page Coimbra & Ruas

> Referencia visual e tecnica para manter consistencia em toda a landing page.
> Framework: React + TypeScript | Tailwind CSS v4 (CSS-first @theme) | Motion (Framer Motion)

---

## 1. Paleta de Cores

### Cores Primarias (Dourado Juridico)

| Token                        | Hex       | Uso                                              |
|------------------------------|-----------|--------------------------------------------------|
| `--color-primary`            | `#775a1f` | Textos de destaque, bordas ativas, links hover   |
| `--color-primary-container`  | `#bb9857` | Badges, barras decorativas, destaques em italico  |
| `--color-on-primary-container` | `#463100` | Texto sobre fundo dourado (formulario, labels)   |

### Superficies (Tons Neutros Quentes)

| Token                              | Hex       | Uso                                        |
|------------------------------------|-----------|--------------------------------------------|
| `--color-surface`                  | `#fbf9f6` | Background principal (corpo da pagina)     |
| `--color-surface-container-low`    | `#f5f3f0` | Cards claros, containers secundarios       |
| `--color-surface-container-high`   | `#eae8e5` | Backgrounds de destaque leve               |
| `--color-surface-container-highest`| `#e4e2df` | Editorial quotes, badges de info           |

### Cores Escuras (Dark Sections)

| Token                        | Hex       | Uso                                              |
|------------------------------|-----------|--------------------------------------------------|
| `--color-inverse-surface`    | `#252221` | Navbar, paineis escuros, botoes sobre dourado    |
| `--color-on-surface`         | `#1b1c1a` | Texto principal (sobre fundo claro)              |
| Dark base (inline)           | `#1b1918` | Hero, Benefits, FAQ - secoes escuras             |
| Specialties bg (inline)      | `#3d3a33` | Secao de especialidades                          |

### Cores de Texto

| Token                        | Hex       | Uso                                              |
|------------------------------|-----------|--------------------------------------------------|
| `--color-on-surface`         | `#1b1c1a` | Titulos e texto principal                        |
| `--color-on-surface-variant` | `#4e4639` | Paragrafos secundarios, descricoes               |
| `--color-outline-variant`    | `#d1c5b4` | Bordas sutis, separadores                        |

### Cor de Erro

| Token              | Hex       | Uso                          |
|--------------------|-----------|------------------------------|
| `--color-error`    | `#ba1a1a` | Validacao de formulario      |

### Cor de Destaque Negativo (Pain Points)

| Classe           | Hex       | Uso                                    |
|------------------|-----------|----------------------------------------|
| `text-[#b91c1c]` | `#b91c1c` | Palavras-chave de dor (vermelho)       |

---

## 2. Tipografia

### Fontes

| Tipo  | Familia                                          | Pesos disponveis             |
|-------|--------------------------------------------------|------------------------------|
| Serif | `"Cormorant Infant", ui-serif, serif`            | 400, 500, 600, 700 + italic |
| Sans  | `"Inter", ui-sans-serif, sans-serif`             | 300, 400, 500, 600, 700     |

### Import Google Fonts
```
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
```

### Hierarquia Tipografica

| Elemento              | Fonte  | Tamanho (mobile -> desktop)           | Peso         | Uso                          |
|-----------------------|--------|---------------------------------------|--------------|------------------------------|
| H1 (Hero)             | Serif  | clamp(1.85rem, 6vw+0.75rem, 3.5rem)  | 400 (normal) | Headline principal           |
| H2 (Secoes)           | Serif  | 1.875rem -> 2.5rem-2.75rem           | 400 (normal) | Titulos de secao             |
| H3 (Cards/Sub)        | Serif  | 1.25rem -> 1.35rem                   | 500 (medium) | Titulos de cards             |
| Body                  | Sans   | 1rem -> 1.125rem                     | 400          | Texto corrido                |
| Body destaque         | Sans   | 1rem -> 1.25rem                      | 500-600      | Paragrafos de apoio (hero)   |
| Label / Kicker        | Sans   | 0.65rem -> 0.6875rem                 | 600-700      | Labels uppercase c/ tracking |
| Small / Caption       | Sans   | 0.75rem -> 0.875rem                  | 400-500      | Disclaimers, rodapes         |

### Regras de Estilo

- **Headings** (`h1`-`h6`): sempre `font-serif`
- **Body/UI**: sempre `font-sans`
- **Destaques em secao**: usar `italic text-primary-container` no span
- **Labels/Kickers**: `uppercase tracking-[0.2em-0.28em] text-[10px-11px] font-semibold`
- **Blockquotes**: `font-serif italic text-xl-2xl border-l-[3px] border-primary-container/40`

---

## 3. Espacamento e Border Radius

### Border Radius

| Token          | Valor      | Uso                              |
|----------------|------------|----------------------------------|
| `--radius-xs`  | `0.125rem` | Micro-detalhes                   |
| `--radius-sm`  | `0.25rem`  | Botoes primarios (`rounded-sm`)  |
| `--radius-md`  | `0.5rem`   | Inputs                           |
| `--radius-lg`  | `0.75rem`  | Badges                           |
| `rounded-xl`   | Tailwind   | Cards de especialidades          |
| `rounded-2xl`  | Tailwind   | Cards principais, containers     |
| `rounded-full` | Tailwind   | Avatares, badges circulares      |

### Espacamento de Secoes

| Contexto             | Padding vertical         |
|----------------------|--------------------------|
| Secoes padrao        | `py-24 md:py-28`         |
| Hero                 | `pt-24 sm:pt-28 md:pt-20`|
| Gap entre secoes     | Automatico (sem margin)  |

---

## 4. Sombras

| Contexto        | Valor                                                                    |
|-----------------|--------------------------------------------------------------------------|
| Cards leves     | `shadow-md` / `shadow-sm`                                               |
| Cards hover     | `shadow-lg`                                                              |
| Cards premium   | `shadow-[0_24px_64px_-16px_rgba(27,28,26,0.35)]`                        |
| Botoes CTA      | `shadow-xl` / `shadow-2xl`                                              |
| Navbar          | `shadow-[0_6px_28px_-4px_rgba(0,0,0,0.28),0_2px_12px_-2px_rgba(0,0,0,0.12)]` |
| WhatsApp float  | `shadow-[0_4px_20px_-4px_rgba(37,211,102,0.6)]`                         |

---

## 5. Componentes / Classes Utilitarias Custom

### `.btn-animated-gradient`
Botao principal de CTA. Gradiente animado de `primary` -> `primary-container` -> `primary`.
- Background-size: `200% auto`
- Hover: desliza gradiente para direita + sombra dourada
- Cor do texto: `#ffffff`
- Border-radius: `rounded-sm`
- Padding padrao: `px-8 py-4`

### `.bg-premium-noise`
Overlay de textura sutil usando SVG noise (`feTurbulence`).
- Pseudo-elemento `::before` com `opacity: 0.04`
- Aplicado em secoes de fundo claro (PainPoints, About, Testimonials, ContactForm)

### `.glass`
Efeito frosted glass: `bg-surface/80 backdrop-blur-md`

### `.editorial-quote`
Blockquote estilizado: `bg-surface-container-highest border-l-4 border-primary p-8 font-serif italic text-lg`

### `.bg-hero-overlay`
Overlay escuro: `linear-gradient(rgba(27,28,26,0.85), rgba(27,28,26,0.7))`

---

## 6. Padroes de Animacao (Motion/Framer Motion)

| Padrao                  | Propriedades                                           |
|-------------------------|--------------------------------------------------------|
| Fade in de secao        | `initial={{ opacity: 0, y: 16-24 }}` -> `whileInView` |
| Slide lateral           | `initial={{ opacity: 0, x: 28 }}` -> `whileInView`    |
| Card hover              | `whileHover={{ y: -3 a -4 }}`                         |
| Botao hover/tap         | `whileHover={{ scale: 1.02-1.04 }}` / `whileTap={{ scale: 0.97-0.99 }}` |
| Viewport trigger        | `viewport={{ once: true, margin: '-40px' a '-80px' }}`|
| Duracao padrao          | `0.4s - 0.65s`                                        |
| Delay escalonado        | `delay: idx * 0.06 - 0.1`                             |
| Ease padrao             | `'easeOut'` ou `[0.22, 1, 0.36, 1]`                   |

---

## 7. Padroes Visuais Recorrentes

### Ornamento Diamante (Hero + Benefits)
```
Linha horizontal -> Quadrado rotacionado 45deg com ponto central -> Linha horizontal
```
Usado como separador decorativo acima de titulos de secao.

### Barra Lateral Dourada (Cards)
`w-[2.5px] bg-[#b08d35]` no lado esquerdo de cards de especialidades.

### Barra Vermelha (Pain Points)
`w-[5px] bg-gradient-to-b from-red-600 via-red-500 to-red-400` no lado esquerdo.

### Gradientes Radiais de Fundo
Secoes escuras usam multiplos `radial-gradient` sobrepostos para criar profundidade:
- Brilho dourado superior: `rgba(187,152,87,0.16)` no topo
- Brilho branco suave: `rgba(255,250,240,0.06)`
- Escurecimento nos cantos: `rgba(0,0,0,0.35)`

### Grid Sutil (Textura)
`grid-white3.webp` em `background-size: 420px` com `opacity: 0.04-0.05`

---

## 8. Breakpoints (Tailwind padrao)

| Breakpoint | Largura minima | Uso principal                          |
|------------|----------------|----------------------------------------|
| `sm`       | 640px          | Layout 2 colunas em forms, CTA side-by-side |
| `md`       | 768px          | Grid 2-3 colunas, textos maiores      |
| `lg`       | 1024px         | Layout 2 colunas principal, sidebar    |
| `xl`       | 1280px         | Espacamentos maiores                   |

### Container
`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## 9. Icones

- **Biblioteca**: Lucide React (`lucide-react`) + React Icons (`react-icons/fa` para WhatsApp)
- **Stroke width padrao**: `1.15 - 1.5` (icones de card), `2 - 2.5` (icones de UI)
- **Tamanho padrao**: `h-5 w-5` (UI) / `h-7 w-7` a `h-11 w-11` (cards decorativos)
- **Cor padrao em secoes escuras**: `text-[#c2a35d]` ou `text-primary-container`
