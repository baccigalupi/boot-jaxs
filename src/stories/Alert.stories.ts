import type { Meta, StoryObj } from '@storybook/html'
import type { AlertProps } from '../components/Alert/Alert'
import { Alert } from '../components/Alert/Alert'

const meta = {
  title: 'Bootstrap/Alert',
  tags: ['autodocs'],
  render: (args) => Alert(args),
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    dismissible: { control: 'boolean' },
  },
  args: {
    message: 'This is an alert message',
    type: 'primary',
    dismissible: false,
  },
} satisfies Meta<AlertProps>

export default meta
type Story = StoryObj<AlertProps>

export const Primary: Story = {
  args: {
    message: 'A simple primary alert—check it out!',
    type: 'primary',
  },
}

export const Success: Story = {
  args: {
    message: 'Well done! You successfully completed the task.',
    type: 'success',
  },
}

export const Danger: Story = {
  args: {
    message: 'Oh snap! Something went wrong.',
    type: 'danger',
  },
}

export const Warning: Story = {
  args: {
    message: 'Warning! Better check yourself.',
    type: 'warning',
  },
}

export const Dismissible: Story = {
  args: {
    message: 'This alert can be dismissed!',
    type: 'info',
    dismissible: true,
  },
}
