/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { Badge, type BadgeProps } from '@components/badge/badge'
import { Button } from '@components/button/button'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/Badge',
  tags: ['autodocs'],
  render: (args) => renderJaxs(Badge(args)),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Badge } from './components/badge/badge'

<Badge 
  label="Badge text"
  variant="primary"
  pill={false}
/>`,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    pill: { control: 'boolean' },
  },
  args: {
    label: 'Badge',
    variant: 'primary',
    pill: false,
  },
} satisfies Meta<BadgeProps>

export default meta
type Story = StoryObj<BadgeProps>

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge label="Primary" variant="primary" />`,
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
        code: `<Badge label="Success" variant="success" />`,
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
        code: `<Badge label="Danger" variant="danger" />`,
      },
    },
  },
}

export const Pill: Story = {
  args: {
    label: 'Pill Badge',
    variant: 'info',
    pill: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Badge label="Pill Badge" variant="info" pill={true} />`,
      },
    },
  },
}

export const InButton: Story = {
  render: () => {
    return renderJaxs(
      <Button>
        Notifications
        <Badge variant="light" label="23" />
      </Button>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Badges can be used within buttons to display notification counts or other contextual information.',
      },
      source: {
        language: 'tsx',
        code: `import { Badge } from './components/badge/badge'

<button type="button" class="btn btn-primary">
  Notifications
  <Badge variant="light" label="23">
</button>`,
      },
    },
  },
}
