/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Popover } from '../components/popover/popover'
import { Button } from '../components/button/button'

const PopoverTop = () => {
  return (
    <div class="position-relative" style="height: 200px; padding-top: 100px;">
      <Button onClick="open-popover" variant="secondary">
        Basic popover!
      </Button>
      <Popover show={true}>Popover content</Popover>
    </div>
  )
}

const meta: Meta = {
  title: 'Bootstrap/Popover',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Popovers are contextual overlays for displaying information. They require initialization with JavaScript in production. These examples show the static HTML structure.',
      },
      source: {
        language: 'tsx',
      },
    },
  },
}

export default meta

type Story = StoryObj

export const Top: Story = {
  render: () => renderJaxs(PopoverTop()),
  parameters: {
    docs: {
      source: {
        code: `import { Popover, PopoverHeader, PopoverBody } from './components/popover/popover'
import { Button } from './components/button/button'

<Button
  variant="secondary"
  data-bs-toggle="popover"
  data-bs-placement="top"
  data-bs-content="Top popover content"
>
  Popover on top
</Button>

<Popover placement="top" show={true}>
  <PopoverHeader>Popover top</PopoverHeader>
  <PopoverBody>
    This is a popover on the top.
  </PopoverBody>
</Popover>`,
      },
    },
  },
}
