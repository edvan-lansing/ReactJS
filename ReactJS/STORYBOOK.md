# Guia de Instalação e Uso do Storybook

## Instalação rápida

```bash
# Na raiz do projeto React
npx storybook@latest init
```

Storybook vai detectar que é um projeto Vite + React e configurar automaticamente.

## Rodar o Storybook

```bash
npm run storybook
```

Abre em `http://localhost:6006`

## Arquivos de Stories criados

- `src/components/atoms/button/Button.stories.jsx` — 8 histórias do Button
- `src/components/molecules/ButtonGroup/ButtonGroup.stories.jsx` — 7 histórias do ButtonGroup

## O que está documentado

### Button Stories
1. **Default** — botão básico
2. **AllVariants** — primary, secondary, outline, ghost
3. **AllSizes** — small, medium, large
4. **FullWidth** — ocupando 100%
5. **Disabled** — estado desabilitado
6. **WithAriaLabel** — acessibilidade
7. **WithCustomColor** — cores customizadas
8. **Interactive** — estados (hover, focus, disabled)

### ButtonGroup Stories
1. **Default** — exemplo da Home (cadastro + usuários)
2. **AllVariants** — combinações de variantes
3. **MobileLayouts** — stack vs swap em mobile
4. **WithAccessibility** — aria-labels
5. **SingleButton** — sem secondLabel
6. **ColumnDirection** — direção coluna
7. **SpaceBetween** — espaço máximo entre botões

## Comandos extras

```bash
# Build estático do Storybook (deploy)
npm run build-storybook

# Rodar testes visuais (se configurado)
npm run test:storybook
```

## Próximas melhorias opcionais

- [ ] Addon @storybook/addon-a11y para testes de acessibilidade
- [ ] Addon @storybook/addon-interactions para testes automatizados
- [ ] Addon @storybook/addon-coverage para cobertura de componentes
- [ ] Documentação em Markdown com exemplos de código
