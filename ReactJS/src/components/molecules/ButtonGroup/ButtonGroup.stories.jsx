import { ButtonGroup } from './index';

export default {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Agrupa dois botões com suporte a variantes, layouts mobile e acessibilidade.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Direção dos botões (row ou column)',
    },
    firstLabel: { control: 'text', description: 'Texto do primeiro botão' },
    secondLabel: { control: 'text', description: 'Texto do segundo botão' },
    firstVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante do primeiro botão',
    },
    secondVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Variante do segundo botão',
    },
    mobileLayout: {
      control: 'select',
      options: ['stack', 'swap'],
      description: 'Comportamento em mobile (stack = ordem normal, swap = invertida)',
    },
    spaceBetween: {
      control: 'boolean',
      description: 'Espaço máximo entre botões',
    },
    firstAriaLabel: { control: 'text', description: 'ARIA label para acessibilidade do primeiro botão' },
    secondAriaLabel: { control: 'text', description: 'ARIA label para acessibilidade do segundo botão' },
  },
};

// Template base
const Template = (args) => <ButtonGroup {...args} />;

// Story 1: Padrão (como na Home)
export const Default = Template.bind({});
Default.args = {
  firstLabel: 'Cadastro',
  secondLabel: 'Usuários Cadastrados',
  firstVariant: 'primary',
  secondVariant: 'secondary',
  onFirstClick: () => alert('Cadastro clicado'),
  onSecondClick: () => alert('Usuários clicado'),
};
Default.parameters = {
  docs: {
    description: {
      story: 'ButtonGroup padrão com dois botões. Exemplo de uso na Home.',
    },
  },
};

// Story 2: Com todos os variants
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <div>
      <h3>Primary + Secondary</h3>
      <ButtonGroup
        firstLabel="Ação 1"
        secondLabel="Ação 2"
        firstVariant="primary"
        secondVariant="secondary"
        onFirstClick={() => alert('Ação 1')}
        onSecondClick={() => alert('Ação 2')}
      />
    </div>
    <div>
      <h3>Primary + Outline</h3>
      <ButtonGroup
        firstLabel="Confirmar"
        secondLabel="Cancelar"
        firstVariant="primary"
        secondVariant="outline"
        onFirstClick={() => alert('Confirmar')}
        onSecondClick={() => alert('Cancelar')}
      />
    </div>
    <div>
      <h3>Outline + Ghost</h3>
      <ButtonGroup
        firstLabel="Editar"
        secondLabel="Descartar"
        firstVariant="outline"
        secondVariant="ghost"
        onFirstClick={() => alert('Editar')}
        onSecondClick={() => alert('Descartar')}
      />
    </div>
    <div>
      <h3>Ghost + Primary</h3>
      <ButtonGroup
        firstLabel="Mais opções"
        secondLabel="Salvar"
        firstVariant="ghost"
        secondVariant="primary"
        onFirstClick={() => alert('Mais opções')}
        onSecondClick={() => alert('Salvar')}
      />
    </div>
  </div>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: 'Demonstra as 4 variantes disponíveis: primary, secondary, outline, ghost.',
    },
  },
};

// Story 3: Mobile layouts
export const MobileLayouts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
    <div>
      <h3>Stack (padrão - ordem normal em mobile)</h3>
      <ButtonGroup
        firstLabel="Voltar"
        secondLabel="Próximo"
        firstVariant="outline"
        secondVariant="primary"
        mobileLayout="stack"
        onFirstClick={() => alert('Voltar')}
        onSecondClick={() => alert('Próximo')}
      />
    </div>
    <div>
      <h3>Swap (ordem invertida em mobile)</h3>
      <ButtonGroup
        firstLabel="Voltar"
        secondLabel="Próximo"
        firstVariant="outline"
        secondVariant="primary"
        mobileLayout="swap"
        onFirstClick={() => alert('Voltar')}
        onSecondClick={() => alert('Próximo')}
      />
    </div>
  </div>
);
MobileLayouts.parameters = {
  docs: {
    description: {
      story: 'Redimensione para <768px para ver o comportamento mobile. Stack mantém ordem, Swap inverte.',
    },
  },
};

// Story 4: Com ARIA labels
export const WithAccessibility = Template.bind({});
WithAccessibility.args = {
  firstLabel: 'Cadastro',
  secondLabel: 'Usuários Cadastrados',
  firstVariant: 'primary',
  secondVariant: 'secondary',
  firstAriaLabel: 'Ir para o formulário de cadastro de novo usuário',
  secondAriaLabel: 'Ver lista de usuários já cadastrados no sistema',
  onFirstClick: () => alert('Cadastro'),
  onSecondClick: () => alert('Usuários'),
};
WithAccessibility.parameters = {
  docs: {
    description: {
      story: 'ButtonGroup com aria-labels para leitores de tela. Inspecione o HTML para ver os atributos.',
    },
  },
};

// Story 5: Botão único
export const SingleButton = Template.bind({});
SingleButton.args = {
  firstLabel: 'Confirmar',
  firstVariant: 'primary',
  onFirstClick: () => alert('Confirmado'),
};
SingleButton.parameters = {
  docs: {
    description: {
      story: 'Sem secondLabel, renderiza apenas um botão.',
    },
  },
};

// Story 6: Direção coluna
export const ColumnDirection = Template.bind({});
ColumnDirection.args = {
  direction: 'column',
  firstLabel: 'Ação Principal',
  secondLabel: 'Ação Secundária',
  firstVariant: 'primary',
  secondVariant: 'outline',
  onFirstClick: () => alert('Principal'),
  onSecondClick: () => alert('Secundária'),
};
ColumnDirection.parameters = {
  docs: {
    description: {
      story: 'ButtonGroup em coluna (vertical).',
    },
  },
};

// Story 7: Space Between
export const SpaceBetween = Template.bind({});
SpaceBetween.args = {
  firstLabel: 'Voltar',
  secondLabel: 'Avançar',
  firstVariant: 'outline',
  secondVariant: 'primary',
  spaceBetween: true,
  onFirstClick: () => alert('Voltar'),
  onSecondClick: () => alert('Avançar'),
};
SpaceBetween.parameters = {
  docs: {
    description: {
      story: 'Com spaceBetween=true, botões ocupam espaço máximo disponível.',
    },
  },
};
