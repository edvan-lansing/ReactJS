import { Button } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botão reutilizável com suporte a variantes, tamanhos e acessibilidade.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Estilo visual do botão',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão',
    },
    color: {
      control: 'text',
      description: 'Cor do botão (token ou valor CSS) - usado se variant não for definido',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Botão ocupa 100% da largura',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label para acessibilidade',
    },
    children: {
      control: 'text',
      description: 'Conteúdo do botão',
    },
  },
};

const Template = (args) => <Button {...args} />;

// Story 1: Padrão
export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
  variant: 'primary',
};

// Story 2: Todos os variants
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

// Story 3: Todos os tamanhos
export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
    <Button size="small" variant="primary">Small</Button>
    <Button size="medium" variant="primary">Medium</Button>
    <Button size="large" variant="primary">Large</Button>
  </div>
);

// Story 4: Full Width
export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width Button',
  fullWidth: true,
  variant: 'primary',
};
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Botão ocupando 100% da largura do container.',
    },
  },
};

// Story 5: Desabilitado
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  variant: 'primary',
};

// Story 6: Com ARIA Label
export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  children: 'Salvar',
  variant: 'primary',
  ariaLabel: 'Salvar formulário e voltar para a listagem',
};
WithAriaLabel.parameters = {
  docs: {
    description: {
      story: 'Botão com aria-label para leitores de tela. Inspecione o HTML para ver o atributo.',
    },
  },
};

// Story 7: Com cor customizada (fallback)
export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
  children: 'Custom Color',
  color: '#ff6b6b',
};
WithCustomColor.parameters = {
  docs: {
    description: {
      story: 'Usando color prop diretamente (quando variant não é especificado).',
    },
  },
};

// Story 8: Estados interativos
export const Interactive = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3>Normal</h3>
      <Button variant="primary">Hover me</Button>
    </div>
    <div>
      <h3>Focus (pressione Tab)</h3>
      <Button variant="primary">Tab me</Button>
    </div>
    <div>
      <h3>Disabled</h3>
      <Button variant="primary" disabled>Can't click</Button>
    </div>
  </div>
);
Interactive.parameters = {
  docs: {
    description: {
      story: 'Interaja com os botões: hover, focus (Tab) e estado desabilitado.',
    },
  },
};
