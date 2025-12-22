/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import type { ButtonProps } from '../components/button/button'
import { Button } from '../components/button/button'
import { Badge } from '../components/badge/badge'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/Button',
  tags: ['autodocs'],
  render: (args) => {
    const {children, ...rest} = args
    return renderJaxs(
      <Button {...rest}>{children}</Button>
    )
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button } from './components/button/button'

<Button 
  variant="primary"
>Primary</Button>`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: [undefined, 'sm', 'lg'],
    },
    outline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    children: { control: 'text' },
  },
  args: {
    variant: 'primary',
    outline: false,
    disabled: false,
    type: 'button',
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    children: <>Primary</>,
    variant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary">Primary</Button>`,
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    children: <>Secondary</>,
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="secondary">Secondary</Button>`,
      },
    },
  },
}

export const Success: Story = {
  args: {
    children: <>Success!</>,
    variant: 'success',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="success">Success!</Button>`,
      },
    },
  },
}

export const Danger: Story = {
  args: {
    children: <>Danger!</>,
    variant: 'danger',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="danger">Danger!</Button>`,
      },
    },
  },
}

export const Outline: Story = {
  args: {
    children: <>Outlined Button</>,
    outline: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button outline={true}>Outlined Button</Button>`,
      },
    },
  },
}

export const Large: Story = {
  args: {
    children: <>Large</>,
    size: 'lg',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button size="lg">Large</Button>`,
      },
    },
  },
}

export const Small: Story = {
  args: {
    children: <>Small</>,
    size: 'sm',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button size="sm">Small</Button>`,
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    children: <>Disabled</>,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button disabled={true}>Disabled</Button>`,
      },
    },
  },
}

export const WithBadge: Story = {
  render: () => {
    return renderJaxs(
      <Button>
        Notifications <Badge label="4" variant="danger" />
      </Button>
    )
  },
  args: {
    children: <>Notifications <Badge label="4" variant="danger" /></>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can contain badges to display notification counts or other contextual information.',
      },
      source: {
        language: 'tsx',
        code: `import { Button } from './components/button/button'
import { Badge } from './components/badge/badge'

<Button variant="primary">
  Notifications <Badge label="4" variant="light" />
</Button>`,
      },
    },
  },
}
