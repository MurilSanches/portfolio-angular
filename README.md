# Portfolio Angular 2.0

Projeto pessoal em Angular v21 com SSR, i18n (pt-br/en), e ferramentas modernas de desenvolvimento.

## 🚀 Stack

- **Angular 21** com Zoneless change detection
- **SSR** com Express para deploy Vercel
- **Tailwind CSS** com tema customizado
- **ngx-translate** para internacionalização
- **TypeScript** com strict mode
- **Bun** como package manager
- **Biome** para linting e formatação
- **Vitest** para testes (opcional)

## 📦 Scripts

```bash
# Instalar dependências
bun install

# Servidor de desenvolvimento
bun start

# Build para produção
bun build

# Build com watch
bun watch

# Testes
bun test

# Servidor SSR local
bun run serve:ssr:portfolio-2

# Linting e formatação
bun run lint          # Verificar lint
bun run lint:fix       # Corrigir lint
bun run format         # Formatar código
bun run check          # Verificar lint + formato
bun run check:fix      # Corrigir tudo

# Deploy
bun run deploy         # Deploy para Vercel
```

## 🛠️ Ferramentas Modernas

### Bun
- **Package manager ultra-rápido**: Instala dependências 10x mais rápido que npm
- **Runtime TypeScript**: Executa TS sem compilação
- **Built-in test runner**: Compatível com Vitest

### Biome
- **Linting**: Regras modernas para TypeScript/JavaScript
- **Formatação**: Formatação consistente e rápida
- **Organização de imports**: Automática
- **Configuração**: `biome.json`

## 🎨 Features do Angular 21

- **Zoneless**: `provideZonelessChangeDetection()` para performance melhorada
- **Input/Output Signals**: `input()` e `output()` para reatividade moderna
- **@defer**: Lazy loading de componentes com placeholders
- **Standalone Components**: Componentes independentes
- **Hydration**: SSR com hidratação no cliente

## 🌐 Deploy

### Vercel (SSR)
```bash
# Deploy automático com vercel.json
bun run deploy
```

Configuração SSR em `vercel.json` e `api/ssr.ts`.

### Vercel Analytics
- **Auto-tracking**: Script injetado automaticamente
- **Performance**: Web vitals e Core Web Vitals
- **Privacy**: Sem cookies, GDPR compliant
- **Config**: Script em `src/index.html`

## 📁 Estrutura

```
src/
├── app/
│   ├── components/          # Standalone components
│   ├── services/            # I18nService, ThemeService
│   ├── data/               # Dados do portfólio
│   └── app.ts              # Componente principal
├── server.ts               # Express SSR
└── styles.css              # Tailwind + custom
public/
├── i18n/                   # pt-br.json, en.json
└── portfolio/              # Imagens dos projetos
```

## 🔧 Configurações

### Biome
- **Indentação**: 2 espaços
- **Quotes**: Single quotes
- **Semicolons**: Always
- **Line width**: 100 chars
- **Files**: TS, JS, JSON (ignora HTML)

### Bun
- **Lockfile**: `bun.lockb`
- **Registry**: npm padrão
- **Cache**: Automático

## 🌍 Internacionalização

- **ngx-translate** com HttpLoader customizado
- **Arquivos**: `public/i18n/pt-br.json`, `en.json`
- **Chaves**: Hierárquicas por seção
- **SSR**: Funciona no servidor

## 🎨 Tema

- **Rustic/Terror**: Inspirado em Resident Evil 4
- **Cores customizadas**: Ember, Blood, Night
- **Dark mode**: Automático via preferência do sistema
- **Toggle**: Via ThemeService

## 📱 Performance

- **Lazy loading**: @defer para sections pesadas
- **Zoneless**: Menos overhead do change detection
- **SSR**: Primeira pintura rápida
- **Build otimizado**: Chunks separados

## 🧪 Testes (Opcional)

```bash
# Configurar Vitest
bun add -D vitest @vitest/ui

# Executar testes
bun test
```

---

**Desenvolvido com ❤️ usando Angular 21 + Bun + Biome**
