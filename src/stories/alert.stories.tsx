/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { type AlertProps, Alert } from '@components/alert/alert'

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
  dismissible={false}
  id="default-alert"
>
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</Alert>
`,
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    dismissible: { control: 'boolean' },
  },
  args: {
    children: (
      <>
        A simple alert with{' '}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </>
    ),
    variant: 'primary',
    dismissible: false,
    id: 'default-alert',
  },
} satisfies Meta<AlertProps>

export default meta
type Story = StoryObj<AlertProps>

export const Primary: Story = {
  args: {
    children: (
      <>
        A simple alert with{' '}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </>
    ),
    id: 'primary-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  dismissible={false}
  id="default-alert"
>
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</Alert>`,
      },
    },
  },
}

export const Success: Story = {
  args: {
    children: (
      <>
        A simple alert with{' '}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </>
    ),
    variant: 'success',
    id: 'success-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  type="success"
  id="success-alert"
>
  Well done! You successfully completed the task.
</Alert>`,
      },
    },
  },
}

export const Danger: Story = {
  args: {
    children: (
      <>
        A simple alert with{' '}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </>
    ),
    variant: 'danger',
    id: 'danger-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  type="danger"
  id="danger-alert"
>
  Oh snap! Something went wrong.
</Alert>`,
      },
    },
  },
}

export const Warning: Story = {
  args: {
    children: (
      <>
        A simple alert with{' '}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </>
    ),
    variant: 'warning',
    id: 'warning-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  type="warning"
  id="warning-alert"
>
  Warning! Better check yourself.
</Alert>`,
      },
    },
  },
}

export const Dismissible: Story = {
  args: {
    children: (
      <>
        A simple alert with{' '}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </>
    ),
    variant: 'info',
    dismissible: true,
    id: 'dismissible-alert',
  },
  parameters: {
    docs: {
      source: {
        code: `<Alert 
  type="info"
  dismissible={true}
  id="dismissible-alert"
>
  This alert can be dismissed!
</Alert>`,
      },
    },
  },
}
