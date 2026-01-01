# DevClub Register

Sistema de Cadastro de Usuários com fluxo multi-etapas, foco em UX, reutilização de componentes e arquitetura escalável.

## Descrição
Aplicação React para cadastro, edição, listagem e confirmação de usuários, construída seguindo Atomic Design, com componentes reutilizáveis, responsivos, estilização via tokens e boas práticas de acessibilidade.

## Funcionalidades
- Cadastro de usuário em múltiplas etapas
- Edição de usuários com otimização de estado
- Listagem de usuários com estados de loading e erro
- Exclusão de usuário com atualização otimista
- Hooks de dados customizados (`useUsers`, `useUser`)
- Tratamento de erros padronizado na camada de API

## Qualidade técnica
- **Design System:** Button com variantes (primary, secondary, outline, ghost)
- **ButtonGroup reutilizável** com:
  - segundo botão opcional
  - suporte a `space-between`
  - layout responsivo (stack / swap)
- **Acessibilidade:** aria-labels, `:focus-visible`, navegação por teclado
- **Responsividade:** layouts mobile-first
- **Documentação de componentes:** Storybook
- **Gerenciamento de estado:** Redux Toolkit
- **Testes:** Vitest + React Testing Library (jsdom, jest-dom) e Storybook Test Runner

## Tecnologias Utilizadas
- React
- Styled-components
- Redux Toolkit
- Vite
- Vitest / React Testing Library
- Storybook

## Hooks principais
- `useUsers`: lista usuários e expõe `users`, `loading`, `error`, `refresh`, `removeUser` (com atualização otimista)
- `useUser(id)`: carrega e atualiza um usuário, expondo `data`, `setData`, `loading`, `error`, `saving`, `refresh` e `save`

## Componentes principais

### Button
Botão reutilizável com variantes semânticas:

- `primary` — ação principal
- `secondary` — ação secundária
- `outline` — ação alternativa
- `ghost` — ação mínima

```jsx
<Button variant="primary" ariaLabel="Confirmar cadastro">
  Confirmar
</Button>
```

## Como rodar

Instalação:

```bash
npm install
```

Dev server:

```bash
npm run dev
```

Storybook:

```bash
npm run storybook
```

Testes:

```bash
# roda todos os testes (app + storybook runner)
npm run test -- --watch=false

# modo watch
npm run test:watch
```

Cobertura:

```bash
npm run test -- --coverage
```
