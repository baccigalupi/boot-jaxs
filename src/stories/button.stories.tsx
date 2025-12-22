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
  render: (args) => renderJaxs(Button(args)),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button } from './components/button/button'

<Button 
  label="Button"
  variant="primary"
/>`,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
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
  },
  args: {
    label: 'Button',
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
    label: 'Primary',
    variant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Primary" variant="primary" />`,
      },
    },
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Secondary" variant="secondary" />`,
      },
    },
  },
}

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Success" variant="success" />`,
      },
    },
  },
}

export const Danger: Story = {
  args: {
    label: 'Danger',
    variant: 'danger',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Danger" variant="danger" />`,
      },
    },
  },
}

export const Outline: Story = {
  args: {
    label: 'Outline Primary',
    variant: 'primary',
    outline: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Outline Primary" variant="primary" outline={true} />`,
      },
    },
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Large Button" variant="primary" size="lg" />`,
      },
    },
  },
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Small Button" variant="primary" size="sm" />`,
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button label="Disabled" variant="primary" disabled={true} />`,
      },
    },
  },
}

export const WithBadge: Story = {
  render: () => {
    return renderJaxs(
      <Button variant="primary">
        Notifications <Badge label="4" variant="light" />
      </Button>
    )
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
