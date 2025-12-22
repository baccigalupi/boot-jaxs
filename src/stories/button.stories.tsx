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
    const { children, ...rest } = args
    return renderJaxs(<Button {...rest}>{children}</Button>)
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button } from './components/button/button'

<Button variant="primary" onClick="on-click">Primary</Button>`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
      ],
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
        code: `<Button variant="primary" onClick="on-click">Primary</Button>`,
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
        code: `<Button variant="secondary" onClick="on-click">Secondary</Button>`,
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
        code: `<Button variant="success" onClick="on-click">Success!</Button>`,
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
        code: `<Button variant="danger" onClick="on-click">Danger!</Button>`,
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
        code: `<Button outline={true} onClick="on-click">Outlined Button</Button>`,
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
        code: `<Button size="lg" onClick="on-click">Large</Button>`,
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
        code: `<Button size="sm" onClick="on-click">Small</Button>`,
      },
    },
  },
}

export const Disabled: Story = {
  render: () => {
    return renderJaxs(
      <Button disabled={true} onClick="on-click">
        Disabled
      </Button>,
    )
  },
  args: {
    children: <>Disabled</>,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button disabled={true} onClick="on-click">Disabled</Button>`,
      },
    },
  },
}

export const WithBadge: Story = {
  render: () => {
    return renderJaxs(
      <Button onClick="on-click">
        Notifications <Badge label="4" variant="danger" />
      </Button>,
    )
  },
  args: {
    children: (
      <>
        Notifications <Badge label="4" variant="danger" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Buttons can contain badges to display notification counts or other contextual information.',
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
