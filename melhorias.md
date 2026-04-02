# Melhorias da Landing Page - Coimbra & Ruas

> Guia completo para o Sonnet implementar. Cada tarefa tem contexto, conteudo e instrucoes tecnicas.
> **Referencia de design**: consultar `design.md` na raiz do projeto para paleta, tipografia e padroes visuais.
> **Referencia de conteudo**: consultar `connteudo_direito_previdenciario.md` na raiz do projeto.

---

## INDICE DE TAREFAS

| #  | Tarefa                                        | Arquivo(s)                     | Prioridade |
|----|-----------------------------------------------|--------------------------------|------------|
| 1  | Expandir Specialties (6 -> 9 cards)           | `Specialties.tsx`              | ALTA       |
| 2  | Criar secao "Como Funciona" (Passo a Passo)   | Novo: `HowItWorks.tsx` + `App.tsx` | ALTA   |
| 3  | Expandir FAQ (3 -> 8 perguntas)               | `FAQ.tsx`                      | ALTA       |
| 4  | Melhorar formulario de contato                | `ContactForm.tsx`              | ALTA       |
| 5  | Criar secao "Resultados / Numeros"            | Novo: `Results.tsx` + `App.tsx`| MEDIA      |
| 6  | Criar secao "Por Que Nos Escolher"            | Novo: `WhyChooseUs.tsx` + `App.tsx` | MEDIA |
| 7  | Adicionar gatilho de urgencia no Hero          | `Hero.tsx`                     | MEDIA      |
| 8  | Melhorar Footer                               | `Footer.tsx` ou `MinimalFooter`| MEDIA      |
| 9  | Corrigir og:image para URL absoluta           | `index.html`                   | BAIXA      |
| 10 | Adicionar mais keywords SEO                   | `index.html`                   | BAIXA      |

---

## TAREFA 1: Expandir Specialties (6 -> 9 cards)

**Arquivo**: `src/components/Specialties.tsx`

**O que fazer**: Adicionar 3 novos cards ao array `specialties`. O documento de conteudo lista servicos que nao estao na pagina atual.

**Cards atuais** (manter todos):
1. Planejamento Previdenciario
2. Aposentadorias
3. Revisao de Beneficios
4. Pensao por Morte
5. BPC / LOAS
6. Servidor Publico (RPPS)

**Novos cards para adicionar**:

```typescript
{
  icon: HeartPulse, // importar de lucide-react
  title: "Auxilio-Doenca e Acidente",
  description: "Beneficios por incapacidade temporaria ou permanente. Acompanhamento de pericias e recursos contra indeferimentos.",
},
{
  icon: Baby, // importar de lucide-react
  title: "Auxilio-Maternidade",
  description: "Protecao financeira durante afastamento por parto, adocao ou guarda judicial. RGPS e RPPS.",
},
{
  icon: ShieldAlert, // importar de lucide-react
  title: "Defesa Contra Fraudes",
  description: "Emprestimos consignados indevidos, descontos irregulares e filiacoes fraudulentas. Protecao para idosos e pensionistas.",
},
```

**Instrucoes tecnicas**:
- Manter o grid `md:grid-cols-3` — com 9 cards fica 3x3 perfeito
- Manter exatamente o mesmo estilo visual dos cards existentes
- Importar os novos icones do `lucide-react`

---

## TAREFA 2: Criar secao "Como Funciona" (HowItWorks)

**Criar arquivo**: `src/components/HowItWorks.tsx`
**Editar**: `src/App.tsx` — inserir `<HowItWorks />` ENTRE `<WhatsAppCtaBanner />` e `<About />`

**Objetivo**: Reduzir ansiedade do visitante mostrando que o processo e simples.

**Conteudo dos 4 passos**:

| Passo | Icone sugerido  | Titulo                     | Descricao                                                                 |
|-------|-----------------|----------------------------|---------------------------------------------------------------------------|
| 01    | `MessageSquare` | Fale Conosco               | Entre em contato pelo WhatsApp ou formulario. O primeiro atendimento e gratuito e sem compromisso. |
| 02    | `FileSearch`    | Analise do Caso            | Nossa equipe avalia seu historico contributivo, documentos e identifica a melhor estrategia para o seu perfil. |
| 03    | `Route`         | Plano de Acao Personalizado | Voce recebe um plano claro com prazos, regras aplicaveis e o melhor caminho para seu beneficio. |
| 04    | `CheckCircle2`  | Resultado com Seguranca    | Acompanhamos todo o processo — administrativo ou judicial — ate a conquista do seu direito. |

**Estilo visual**:
- Fundo claro (`bg-surface bg-premium-noise`)
- Layout horizontal em desktop (4 cards em linha com setas/conectores entre eles), vertical em mobile
- Usar o mesmo padrao de conectores do `Benefits.tsx` (`ProcessConnector`)
- Cada card: icone dourado no topo (`text-primary-container`), numero do passo em badge, titulo em `font-serif`, descricao em `font-sans text-on-surface-variant`
- CTA no final: botao `btn-animated-gradient` com texto "Quero comecar minha analise" apontando para `#form`

**Header da secao**:
```
Kicker: "Passo a passo"
Titulo: "Como funciona nossa <span italic text-primary-container>consultoria?</span>"
```

---

## TAREFA 3: Expandir FAQ (3 -> 8 perguntas)

**Arquivo**: `src/components/FAQ.tsx`

**O que fazer**: Substituir o array `faqs` atual por este array expandido (manter as 3 existentes + adicionar 5 novas baseadas no documento de conteudo):

```typescript
const faqs = [
  {
    question: 'Quanto tempo demora o planejamento?',
    answer:
      'O estudo tecnico completo leva em media de 7 a 15 dias uteis, dependendo da complexidade dos seus vinculos e documentacao.',
  },
  {
    question: 'Vocês cobram pelo primeiro contato?',
    answer:
      'Nao. Nosso primeiro atendimento e gratuito e totalmente informativo. Ele serve para ouvir sua historia, entender sua duvida previdenciaria e orientar, com responsabilidade, os proximos passos possiveis para o seu caso. Sem compromisso financeiro nesse primeiro momento.',
  },
  {
    question: 'Ja estou aposentado, ainda posso revisar?',
    answer:
      'Sim. Na maioria dos casos, existe um prazo de 10 anos (decadencia) para pedir revisoes. Analisamos oportunidades como inclusao de vinculos omitidos, reconhecimento de tempo especial e erros no calculo do beneficio.',
  },
  {
    question: 'Trabalhei no privado (RGPS) e no publico (RPPS). Consigo somar o tempo?',
    answer:
      'Sim, essa soma e possivel e se chama contagem reciproca de tempo de contribuicao. Ela permite unir os periodos trabalhados no setor privado (INSS) e no servico publico para fins de aposentadoria. Exige averbacoes formais e analise tecnica para definir qual regime e mais vantajoso.',
  },
  {
    question: 'As regras sao diferentes para professores ou policiais?',
    answer:
      'Sim. Professores e profissionais da seguranca publica tem regras especificas previstas na Constituicao Federal. Ha reducao na idade minima e no tempo de contribuicao, com criterios que variam conforme o regime. Uma analise individualizada e fundamental para garantir o melhor beneficio.',
  },
  {
    question: 'O que aconteceu com a Revisao da Vida Toda?',
    answer:
      'O STF julgou a tese improcedente em 2024, o que significa que ela nao pode mais ser aplicada. Porem, existem outras oportunidades legitimas de revisao, como inclusao de vinculos omitidos, reconhecimento de tempo especial e correcao de erros no calculo.',
  },
  {
    question: 'Atendem clientes de outros estados?',
    answer:
      'Sim. Atuamos de forma 100% digital com seguranca juridica, atendendo clientes em todo o Brasil e ate brasileiros residentes no exterior.',
  },
  {
    question: 'Quais documentos preciso reunir?',
    answer:
      'Depende do tipo de beneficio, mas geralmente: RG, CPF, carteira de trabalho (fisica ou digital), CNIS (extrato previdenciario), contracheques e laudos medicos (se aplicavel). Na primeira conversa, orientamos exatamente o que e necessario para o seu caso.',
  },
];
```

**Instrucoes tecnicas**:
- Manter exatamente o mesmo componente visual (accordion com AnimatePresence)
- Apenas substituir o array `faqs`
- Manter `openIndex` iniciando em `0`

---

## TAREFA 4: Melhorar Formulario de Contato

**Arquivo**: `src/components/ContactForm.tsx`

**Mudancas**:

### 4a. Adicionar campo "Profissao"
Adicionar um campo de texto `profissao` entre Email e Assunto:
```typescript
// No FormState, adicionar:
profissao: string;

// No initialForm:
profissao: '',

// Campo no form:
<div>
  <label htmlFor="contact-profissao" className={labelClass}>
    Profissao
  </label>
  <input
    id="contact-profissao"
    name="profissao"
    value={form.profissao}
    onChange={(e) => setForm((f) => ({ ...f, profissao: e.target.value }))}
    className={fieldClass}
    placeholder="Ex: Servidor publico, autonomo, CLT..."
    type="text"
  />
</div>
```

### 4b. Adicionar selo de privacidade abaixo do botao
Substituir o texto atual "Voce sera direcionado ao WhatsApp..." por:
```tsx
<p className="text-center font-sans text-[0.7rem] leading-relaxed text-on-primary-container/70">
  <span className="inline-flex items-center gap-1">
    <Lock className="h-3 w-3" /> {/* importar Lock de lucide-react */}
    Seus dados estao protegidos. O contato e apenas informativo e nao gera compromisso.
  </span>
</p>
```

### 4c. Alterar titulo da coluna escura
Mudar o `<h2>` de "De o primeiro passo para sua tranquilidade" para:
```
"Receba uma analise <span italic text-primary-container>personalizada</span> do seu caso"
```
E o paragrafo de apoio para:
```
"Entenda onde voce esta e o que precisa para se aposentar com tranquilidade. Preencha o formulario e nossa equipe entrara em contato em ate 24h uteis."
```

### 4d. Atualizar buildWhatsAppMessage
Incluir o campo profissao na mensagem:
```typescript
function buildWhatsAppMessage(data: FormState): string {
  const lines = [
    'Ola! Vim pelo site e gostaria de uma pre-analise.',
    '',
    `*Nome:* ${data.name.trim() || '—'}`,
    `*Telefone (WhatsApp):* ${data.phone.trim() || '—'}`,
    `*E-mail:* ${data.email.trim() || '—'}`,
    `*Profissao:* ${data.profissao.trim() || '—'}`,
    `*Assunto:* ${data.subject}`,
    '',
    '*Mensagem:*',
    data.message.trim() || '—',
  ];
  return lines.join('\n');
}
```

---

## TAREFA 5: Criar secao "Resultados / Numeros"

**Criar arquivo**: `src/components/Results.tsx`
**Editar**: `src/App.tsx` — inserir `<Results />` ENTRE `<About />` e `<Benefits />`

**Conteudo**:

**Header da secao**:
```
Kicker: "Resultados"
Titulo: "Numeros que <span italic text-primary-container>falam por si</span>"
```

**4 metricas em cards**:

| Numero  | Label                          | Icone sugerido |
|---------|--------------------------------|----------------|
| 2.000+  | Familias atendidas             | `Users`        |
| 15+     | Anos de experiencia            | `Calendar`     |
| 98%     | Clientes satisfeitos           | `ThumbsUp`     |
| 100%    | Atendimento digital no Brasil  | `Globe`        |

**Estilo visual**:
- Fundo escuro (`#1b1918`) com gradientes radiais dourados (mesmo padrao do Benefits/FAQ)
- Layout: 4 cards em grid `md:grid-cols-2 lg:grid-cols-4`
- Cada card: numero grande em `font-serif text-4xl text-primary-container`, label em `font-sans text-sm text-surface/70`
- Cards com borda sutil `border-primary-container/20` e fundo `bg-[#2a2623]/60`
- Animacao `whileInView` com delay escalonado

---

## TAREFA 6: Criar secao "Por Que Nos Escolher"

**Criar arquivo**: `src/components/WhyChooseUs.tsx`
**Editar**: `src/App.tsx` — inserir `<WhyChooseUs />` ENTRE `<Results />` e `<Benefits />`

**Conteudo** (extraido do documento):

**Header**:
```
Kicker: "Diferenciais"
Titulo: "Por que escolher o <span italic text-primary-container>Coimbra & Ruas?</span>"
```

**3 blocos**:

| Icone          | Titulo                          | Descricao                                                                                                         |
|----------------|----------------------------------|------------------------------------------------------------------------------------------------------------------|
| `Heart`        | Atendimento Humanizado           | Cada cliente e tratado com atencao, respeito e empatia. Por tras de cada processo ha historias de vida e necessidades unicas. |
| `GraduationCap`| Experiencia e Conhecimento Tecnico | Nossa equipe domina as nuances dos regimes previdenciarios (RGPS e RPPS) e as constantes mudancas legislativas.    |
| `Eye`          | Transparencia e Compromisso      | Acompanhamos voce do inicio ao fim, com clareza, mantendo-o informado e buscando sempre o melhor resultado possivel. |

**Estilo visual**:
- Fundo claro (`bg-surface bg-premium-noise`)
- Grid `md:grid-cols-3` com cards brancos, borda sutil, sombra leve
- Icone grande dourado centralizado no topo de cada card
- Titulo em `font-serif text-xl text-on-surface`
- Descricao em `font-sans text-on-surface-variant`

---

## TAREFA 7: Adicionar Gatilho de Urgencia no Hero

**Arquivo**: `src/components/Hero.tsx`

**O que fazer**: Adicionar um badge/ribbon de urgencia logo acima dos botoes de CTA.

```tsx
{/* Adicionar ANTES do div dos botoes (antes de mt-10 flex flex-col gap-4) */}
<div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-container/30 bg-primary-container/[0.08] px-4 py-2 backdrop-blur-sm">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-container" />
  </span>
  <span className="font-sans text-xs font-medium text-primary-container/95 sm:text-sm">
    Vagas limitadas para analise gratuita este mes
  </span>
</div>
```

---

## TAREFA 8: Melhorar Footer

**Arquivo**: `src/components/Footer.tsx` (e possivelmente `src/components/ui/minimal-footer.tsx`)

**O que fazer**: Substituir o MinimalFooter por um footer completo.

**Estrutura do novo Footer**:

```
[Logo]                    [Links Rapidos]         [Contato]
Coimbra & Ruas            Inicio                  Av. Pau Brasil, Lote 10
Advocacia                 Especialidades          Sala 438, Le Quartier
Previdenciaria            Sobre                   Aguas Claras, Brasilia-DF
                          Depoimentos             +55 61 9694-2545
                          Duvidas                 contato@coimbraeruas.com.br
                          Contato

[Linha divisoria dourada]
(c) 2026 Coimbra & Ruas. Todos os direitos reservados.
```

**Estilo visual**:
- Fundo `#1b1918` (mesmo das secoes escuras)
- Grid `md:grid-cols-3` com gap generoso
- Logo: usar a mesma imagem da navbar (`/images/logo menu.webp`)
- Links: `text-surface/60 hover:text-primary-container transition-colors`
- Linha divisoria: `h-px bg-gradient-to-r from-transparent via-primary-container/30 to-transparent`
- Copyright: `text-surface/40 text-xs`
- Importar dados de contato de `@/src/contact`

---

## TAREFA 9: Corrigir og:image

**Arquivo**: `index.html`

**Substituir** (linhas 25-26):
```html
<meta property="og:image" content="/images/logo_coimbra.webp" />
```
**Por**:
```html
<meta property="og:image" content="https://coimbraeruas.com.br/images/logo_coimbra.webp" />
```

**Tambem corrigir** Twitter image (linha 33):
```html
<meta name="twitter:image" content="https://coimbraeruas.com.br/images/logo_coimbra.webp" />
```

---

## TAREFA 10: Adicionar Keywords SEO

**Arquivo**: `index.html`

**Substituir** a meta keywords existente pelo conteudo expandido (baseado no documento de conteudo):

```html
<meta name="keywords" content="advogado previdenciario, aposentadoria INSS, revisao de beneficios, pensao por morte, BPC LOAS, direito previdenciario Brasilia, planejamento previdenciario, advogado INSS Brasilia, servidor publico RPPS, auxilio-doenca, aposentadoria especial, Coimbra e Ruas, Dra. Paula Matos, planejamento previdenciario personalizado, quando posso me aposentar, consultoria previdenciaria online, melhor momento para se aposentar, contagem reciproca RGPS RPPS, aposentadoria para empresario, aposentadoria para MEI, regras de transicao RPPS, aposentadoria por invalidez, emprestimo consignado indevido, erro no calculo da aposentadoria, auxilio maternidade, defesa contra fraudes previdenciarias" />
```

---

## ORDEM DE INSERCAO NO App.tsx

Apos todas as tarefas, o `App.tsx` deve ficar:

```tsx
<Navbar />
<main>
  <Hero />              {/* existente */}
  <PainPoints />        {/* existente */}
  <Specialties />       {/* existente (expandido) */}
  <WhatsAppCtaBanner /> {/* existente */}
  <HowItWorks />        {/* NOVO - Tarefa 2 */}
  <About />             {/* existente */}
  <Results />           {/* NOVO - Tarefa 5 */}
  <WhyChooseUs />       {/* NOVO - Tarefa 6 */}
  <Benefits />          {/* existente */}
  <Testimonials />      {/* existente */}
  <FAQ />               {/* existente (expandido) */}
  <ContactForm />       {/* existente (melhorado) */}
</main>
<Footer />              {/* existente (melhorado) */}
<WhatsAppFloatingButton />
```

---

## NOTAS PARA O SONNET

1. **Consultar `design.md`** antes de criar qualquer componente novo para manter consistencia visual
2. **Importar dados de contato** sempre de `@/src/contact` (nunca hardcodar telefone/email)
3. **Animacoes**: usar `motion` de `motion/react` (NAO framer-motion). Sempre `viewport={{ once: true }}`
4. **Icones**: importar de `lucide-react`. WhatsApp de `react-icons/fa`
5. **Tailwind v4**: usar classes utilitarias, tokens definidos em `src/index.css` via `@theme`
6. **Responsividade**: mobile-first. Testar em `sm`, `md`, `lg`
7. **Acessibilidade**: `aria-hidden` em elementos decorativos, `aria-label` em botoes de icone
8. **Todos os novos componentes** devem ter `export default function NomeDoComponente()`
