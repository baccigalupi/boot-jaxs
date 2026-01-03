/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import type { TooltipProps } from '../components/tooltip/tooltip'
import { Tooltip } from '../components/tooltip/tooltip'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/Tooltip',
  tags: ['autodocs'],
  render: () => renderJaxs(<Tooltip>Tooltip text</Tooltip>),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tooltip } from './components/tooltip/tooltip'

<Tooltip>Tooltip text</Tooltip>`,
      },
    },
  },
} satisfies Meta<TooltipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}