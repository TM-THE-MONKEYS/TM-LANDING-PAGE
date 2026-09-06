# The Monkeys — Landing Page

Site institucional da [The Monkeys](https://www.instagram.com/themonkeysco/): sistemas de gestão (SaaS) e automações sob medida para pequenas e médias empresas.

> **Posicionamento:** tiramos processos manuais da operação e colocamos em um sistema — não vendemos “tecnologia” genérica.

## Stack

- [Next.js](https://nextjs.org) 15 (App Router)
- React 19
- Tailwind CSS 4 + tokens em `app/globals.css`
- `next-themes` (claro/escuro, padrão claro)
- Geist (tipografia)

## Desenvolvimento

Requer Node.js 22.x e [pnpm](https://pnpm.io) (o projeto define `packageManager` no `package.json`).

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros scripts:

```bash
pnpm build   # build de produção
pnpm start   # serve o build
pnpm lint    # ESLint
```

## Estrutura principal

| Caminho | Papel |
|---|---|
| `app/page.tsx` | Home (ordem das seções) |
| `lib/site.ts` | Nome, slogan, links (WhatsApp, Instagram, nav) |
| `components/hero.tsx` | Hero |
| `components/about-section.tsx` | Quem somos |
| `components/features-section.tsx` | Soluções |
| `components/technology-section.tsx` | Diferenciais |
| `components/cta-section.tsx` | Contato |
| `components/case-section.tsx` | Case (pronto; ativar na home após números reais) |
| `components/theme-toggle.tsx` | Alternar tema |

## Contato (config)

Valores em `lib/site.ts`:

- WhatsApp, e-mail e Instagram
- Slogan e description (SEO / footer)
- Links de navegação e páginas legais (`/privacy`, `/terms`, `/cookies`)

## Case / prova social

`components/case-section.tsx` existe, mas **não** está montado em `app/page.tsx` até o case da transportadora ter métricas reais. Quando estiver pronto:

```tsx
import { CaseSection } from "@/components/case-section"
// ...
<CaseSection />
```
