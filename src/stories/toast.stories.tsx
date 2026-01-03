/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import type { ToastProps } from '../components/toast/toast'
import { Toast, ToastHeader, ToastBody } from '../components/toast/toast'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/Toast',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <Toast show={true}>
        <ToastHeader onClick="close-toast">
          <strong class="me-auto">Toast title</strong>
        </ToastHeader>
        <ToastBody>This is a simple toast notification</ToastBody>
      </Toast>
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Toast, ToastHeader, ToastBody } from './components/toast/toast'

<Toast>
  <ToastHeader onClick="close-toast">
    <strong class="me-auto">Toast title</strong>
  </ToastHeader>
  <ToastBody>This is a simple toast notification</ToastBody>
</Toast>`,
      },
    },
  },
} satisfies Meta<ToastProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
