# TradeFlow Admin

Painel administrativo de demonstração para uma corretora online (estilo trading panel).
Construído como peça de portfólio: roda inteiramente no front-end, com dados mockados,
sem depender de backend.

## Stack

- React 18 + TypeScript + Vite
- Material UI (`@mui/material`)
- Redux Toolkit
- React Router DOM
- ApexCharts (`react-apexcharts`)
- date-fns

## Funcionalidades

- Login com sessão persistida em `localStorage` (mock — qualquer credencial entra).
- Dashboard com KPIs, gráficos de receita, depósitos por país.
- Listagem de usuários, financeiro (saques/depósitos), afiliados, campanhas, tasks, white-label, perfil.
- Tema light/dark via `ThemeContext`.
- Snackbar global gerenciado por Redux.
- Layout responsivo (`useMediaQuery`).

## Como rodar

```bash
npm install
npm run dev
```

A aplicação sobe em `http://localhost:5173`. Os campos do login já vêm
preenchidos com as credenciais de demonstração:

| Campo | Valor                |
| ----- | -------------------- |
| Email | `demo@tradeflow.dev` |
| Senha | `demo1234`           |

(Definidos em [`src/api/index.ts`](src/api/index.ts) como `DEMO_CREDENTIALS`.)

## Scripts

| Script           | Descrição                          |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Servidor de desenvolvimento (HMR). |
| `npm run build`  | Type-check + build de produção.    |
| `npm run preview`| Servir o build localmente.         |
| `npm run lint`   | ESLint nos arquivos `.ts`/`.tsx`.  |

## Estrutura

```
src/
├── api/            # Camada mock — substitui chamadas HTTP reais.
├── pages/          # Uma pasta por rota (Dashboard, Users, Financial, ...).
├── routes/         # Definição das rotas com react-router.
├── shared/
│   ├── components/ # Componentes reutilizáveis (charts, drawers, tables...).
│   ├── contexts/   # AuthContext + ThemeContext.
│   ├── interfaces/ # Tipos compartilhados.
│   └── layouts/    # BaseLayoutPage.
└── store/          # Redux store + slices.
```

## Aviso

Projeto reaproveitado como peça de portfólio. Os dados exibidos são fictícios
e gerados localmente. Não há integração com nenhum sistema real de pagamento,
KYC ou trading.

## Licença

MIT.
