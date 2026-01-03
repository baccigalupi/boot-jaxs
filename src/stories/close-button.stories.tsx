/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import {
  CloseButton,
  type CloseButtonProps,
} from '../components/close-button/close-button'

const meta = {
  title: 'Bootstrap/CloseButton',
  tags: ['autodocs'],
  render: (args) => renderJaxs(<CloseButton {...args} />),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { CloseButton } from './components/close-button/close-button'

<CloseButton onClick="handle-close" />`,
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    white: { control: 'boolean' },
    dismissible: { control: 'boolean' },
    onClick: { control: 'text' },
  },
  args: {
    disabled: false,
    white: false,
    dismissible: true,
    onClick: 'handle-close',
  },
} satisfies Meta<CloseButtonProps>

export default meta
type Story = StoryObj<CloseButtonProps>

export const Default: Story = {
  args: {
    onClick: 'handle-close',
  },
  parameters: {
    docs: {
      source: {
        code: `<CloseButton onClick="handle-close" />`,
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    onClick: 'handle-close',
  },
  parameters: {
    docs: {
      source: {
        code: `<CloseButton disabled={true} onClick="handle-close" />`,
      },
    },
  },
}

export const White: Story = {
  render: () =>
    renderJaxs(
      <div class="bg-dark p-3">
        <CloseButton white={true} onClick="handle-close" />
      </div>,
    ),
  parameters: {
    docs: {
      description: {
        story: 'Use the white variant for close buttons on dark backgrounds.',
      },
      source: {
        code: `<div class="bg-dark p-3">
  <CloseButton white={true} onClick="handle-close" />
</div>`,
      },
    },
  },
}

export const WhiteDisabled: Story = {
  render: () =>
    renderJaxs(
      <div class="bg-dark p-3">
        <CloseButton white={true} disabled={true} onClick="handle-close" />
      </div>,
    ),
  parameters: {
    docs: {
      description: {
        story: 'White close button in disabled state on dark background.',
      },
      source: {
        code: `<div class="bg-dark p-3">
  <CloseButton white={true} disabled={true} onClick="handle-close" />
</div>`,
      },
    },
  },
}
