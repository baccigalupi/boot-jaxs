/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import type { HeaderProps } from '../components/header/header'
import { Header } from '../components/header/header'

const meta = {
  title: 'Bootstrap/Header',
  tags: ['autodocs'],
  render: (args) =>
    renderJaxs(<Header level={args.level}>This is a heading</Header>),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Header } from './components/header/header'

<Header level="h1">This is a heading</Header>
`,
      },
    },
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  args: {
    level: 'h1',
  },
} satisfies Meta<HeaderProps>

export default meta

type Story = StoryObj<HeaderProps>

export const Default: Story = {}

export const SemanticVsVisual: Story = {
  render: () =>
    renderJaxs(
      <div>
        <Header level="h1" class="h3">
          Semantic h1 styled as h3
        </Header>
        <Header level="h3" class="h1">
          Semantic h3 styled as h1
        </Header>
        <Header level="h4" class="h2">
          Semantic h4 styled as h2
        </Header>
      </div>,
    ),
  parameters: {
    docs: {
      description: {
        story:
          'You can use Bootstrap typography classes (h1-h6) to style headers with different visual sizes while maintaining the correct semantic heading level for accessibility.',
      },
      source: {
        language: 'tsx',
        code: `import { Header } from './components/header/header'

<Header level="h1" class="h3">
  Semantic h1 styled as h3
</Header>
<Header level="h3" class="h1">
  Semantic h3 styled as h1
</Header>
<Header level="h4" class="h2">
  Semantic h4 styled as h2
</Header>`,
      },
    },
  },
}
