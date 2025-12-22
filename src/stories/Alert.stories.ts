import type { Meta, StoryObj } from '@storybook/html'
import type { AlertProps } from '../components/alert/alert'
import { Alert } from '../components/alert/alert'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/Alert',
  tags: ['autodocs'],
  render: (args) => renderJaxs(Alert(args)),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Alert } from './components/alert/alert'

<Alert 
  message="Your message here"
  type="primary"
  dismissible={false}
  id="default-alert"
/>`,
      },
    },
  },
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
    id: 'default-alert',
  },
} satisfies Meta<AlertProps>

export default meta
type Story = StoryObj<AlertProps>

export const Primary: Story = {
  args: {
    message: 'A simple primary alert—check it out!',
    type: 'primary',
    id: 'primary-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  message="A simple primary alert—check it out!"
  type="primary"
  id="primary-alert"
/>`,
      },
    },
  },
}

export const Success: Story = {
  args: {
    message: 'Well done! You successfully completed the task.',
    type: 'success',
    id: 'success-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  message="Well done! You successfully completed the task."
  type="success"
  id="success-alert"
/>`,
      },
    },
  },
}

export const Danger: Story = {
  args: {
    message: 'Oh snap! Something went wrong.',
    type: 'danger',
    id: 'danger-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  message="Oh snap! Something went wrong."
  type="danger"
  id="danger-alert"
/>`,
      },
    },
  },
}

export const Warning: Story = {
  args: {
    message: 'Warning! Better check yourself.',
    type: 'warning',
    id: 'warning-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  message="Warning! Better check yourself."
  type="warning"
  id="warning-alert"
/>`,
      },
    },
  },
}

export const Dismissible: Story = {
  args: {
    message: 'This alert can be dismissed!',
    type: 'info',
    dismissible: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  message="This alert can be dismissed!"
  type="info"
  dismissible={true}
  id="dismissible-alert"
/>`,
      },
    },
  },
}
