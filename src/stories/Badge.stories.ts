import type { Meta, StoryObj } from '@storybook/html'
import type { BadgeProps } from '../components/Badge/Badge'
import { Badge } from '../components/Badge/Badge'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/Badge',
  tags: ['autodocs'],
  render: (args) => renderJaxs(Badge(args)),
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
}

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
}

export const Danger: Story = {
  args: {
    label: 'Danger',
    variant: 'danger',
  },
}

export const Pill: Story = {
  args: {
    label: 'Pill Badge',
    variant: 'info',
    pill: true,
  },
}
