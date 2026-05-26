# Portfolio — Documentação

Portfólio profissional premium para Desenvolvedor Fullstack Pleno.  
Stack: **React + Vite + TailwindCSS + Framer Motion**

---

## Como iniciar

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento (http://localhost:5173)
npm run dev

# 3. Gerar build de produção (pasta /dist)
npm run build

# 4. Pré-visualizar build de produção
npm run preview
```

---

## Estrutura de pastas

```
portfolio/
├── public/ 
│   ├──icons/
│       ├── icones.gvs  # Arquivos estáticos (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx     # Barra de navegação fixa
│   │   │   └── SocialSidebar.jsx  # Ícones sociais fixos (canto inferior esquerdo)
│   │   └── sections/
│   │       ├── Hero.jsx       # Seção inicial (hero)
│   │       ├── Sobre.jsx      # Seção "Sobre"
│   │       ├── Skills.jsx     # Seção de tecnologias
│   │       ├── Experiencia.jsx # Timeline de experiências
│   │       ├── Projetos.jsx   # Cards de projetos
│   │       └── Contato.jsx    # Seção de contato + rodapé
│   ├── data/
│   │   └── content.js         # ★ ARQUIVO PRINCIPAL DE CONTEÚDO
│   ├── hooks/
│   │   └── useScrollSpy.js    # Hook para detectar seção ativa no scroll
│   ├── App.jsx                # Raiz da aplicação (ordem das seções)
│   ├── main.jsx               # Entry point React
│   └── index.css              # Estilos globais + variáveis CSS
├── tailwind.config.js         # Configuração do Tailwind (cores, fontes)
├── vite.config.js             # Configuração do Vite
└── DOCUMENTATION.md           # Este arquivo
```

---

## Onde editar cada coisa

### ★ Textos, links e dados pessoais
**Arquivo:** `src/data/content.js`

Este é o arquivo central de conteúdo. Edite aqui:

| O que editar | Variável |
|---|---|
| Nome, cargo, tagline, bio | `personal` |
| Links de navegação | `navLinks` |
| GitHub, LinkedIn, Email | `social` |
| Tecnologias e stacks | `skills` |
| Histórico de experiências | `experiences` |
| Projetos do portfólio | `projects` |

---

### Tecnologias / Skills
Em `src/data/content.js`, edite o objeto `skills`:

```js
export const skills = {
  frontend: {
    label: 'Front-end',
    items: [
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'CSS', icon: '/icons/css.svg' },
      { name: 'HTML', icon: '/icons/html.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
    ],
  },
```

Para adicionar uma categoria nova, adicione um novo bloco com `label` e `items`.

---

### Experiências
Em `src/data/content.js`, edite o array `experiences`:

```js
export const experiences = [
  {
    id: 1,                         // ID único
    period: '2022 — Presente',     // Período de tempo
    role: 'Cargo / Posição',       // Cargo
    company: 'Nome da Empresa',    // Empresa
    description: 'Descrição...',   // Texto descritivo
    tags: ['Tag1', 'Tag2'],        // Tags de área/tecnologia
  },
  // ...
];
```

---

### Projetos
Em `src/data/content.js`, edite o array `projects`:

```js
export const projects = [
  {
    id: 1,
    name: 'Nome do Projeto',
    description: 'Descrição do projeto...',
    stack: ['React', 'Node.js', 'Docker'],    // Tecnologias usadas
    url: 'https://link-do-projeto.com',        // URL do projeto
    featured: true,                            // true = card grande (2 primeiros)
  },
  // ...
];
```

Projetos com `featured: true` aparecem como cards grandes no topo.  
Projetos com `featured: false` aparecem como cards menores abaixo.

---

### Links sociais
Em `src/data/content.js`:

```js
export const social = {
  github: 'https://github.com/seu-usuario',
  linkedin: 'https://linkedin.com/in/seu-usuario',
  email: 'mailto:seuemail@exemplo.com',
};
```

---

## Onde editar cores

**Arquivo:** `src/index.css` (variáveis CSS)

```css
:root {
  --surface: #0a0a0a;         /* Fundo principal */
  --surface-1: #111111;       /* Fundo de cards */
  --border: #2a2a2a;          /* Bordas */
  --border-subtle: #1e1e1e;   /* Bordas sutis */
  --text-primary: #f0f0f0;    /* Texto principal */
  --text-secondary: #a0a0a0;  /* Texto secundário */
  --text-muted: #606060;      /* Texto muted/labels */
}
```

Também em **`tailwind.config.js`** nas extensões de cores.

---

## Onde editar fontes

**Arquivo:** `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:...');
```

A fonte principal é **Open Sans**. A fonte de código/labels é **JetBrains Mono**.  
Para trocar, edite a URL do Google Fonts e atualize `tailwind.config.js → theme.extend.fontFamily`.

---

## Onde editar animações

As animações usam **Framer Motion**. Cada seção tem suas próprias variantes de animação definidas localmente.

Para ajustar velocidade: edite `duration` (em segundos)  
Para ajustar delay: edite `delay`  
Para desativar uma animação: remova o `motion.div` e use `div` normal

Arquivo de referência de animação global: `src/index.css` (keyframes CSS simples)

---

## Onde editar a ordem das seções

**Arquivo:** `src/App.jsx`

```jsx
<main>
  <Hero />
  <Sobre />
  <Skills />
  <Experiencia />
  <Projetos />
  <Contato />
</main>
```

Reordene ou remova componentes conforme necessário.

---

## Como adicionar uma nova seção

1. Crie `src/components/sections/MinhaSecao.jsx`
2. Siga o padrão dos outros componentes (useRef + useInView + motion)
3. Importe e adicione em `src/App.jsx`
4. Adicione o link em `src/data/content.js → navLinks`

---

## Deploy

Para deploy, gere o build e suba a pasta `/dist` para qualquer host estático:

```bash
npm run build
# Faça upload da pasta /dist para: Vercel, Netlify, GitHub Pages, etc.
```

Para Vercel/Netlify: conecte o repositório e configure `npm run build` + `dist` como diretório de saída.

---

## Tecnologias utilizadas

| Tecnologia | Versão | Função |
|---|---|---|
| React | 18+ | UI Framework |
| Vite | 6+ | Build tool / Dev server |
| TailwindCSS | 3+ | Utility CSS |
| Framer Motion | 12+ | Animações |
| Lucide React | 0.383 | Ícones (disponível mas não usado por padrão) |
