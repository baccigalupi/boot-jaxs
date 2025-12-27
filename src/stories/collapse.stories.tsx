/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Collapse } from '../components/collapse/collapse'
import { Button } from '../components/button/button'

const meta = {
  title: 'Bootstrap/Collapse',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <>
        <Button onClick="toggle-collapse">Toggle Collapse</Button>
        <Collapse id="collapseExample" show={false}>
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </Collapse>
      </>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Collapse } from './components/collapse/collapse'
import { Button } from './components/button/button'

<Button onClick="toggle-collapse">Toggle Collapse</Button>
<Collapse id="collapseExample" show={false}>
  <div class="card card-body">
    Some placeholder content for the collapse component.
  </div>
</Collapse>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () =>
    renderJaxs(
      <>
        <Button onClick="toggle-collapse">Toggle Collapse</Button>
        <Collapse id="collapseDefault" show={false}>
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </Collapse>
      </>,
    ),
  parameters: {
    docs: {
      source: {
        code: `<Button onClick="toggle-collapse">Toggle Collapse</Button>
<Collapse id="collapseDefault" show={false}>
  <div class="card card-body">
    Some placeholder content for the collapse component.
  </div>
</Collapse>`,
      },
    },
  },
}

export const InitiallyShown: Story = {
  render: () =>
    renderJaxs(
      <>
        <Button onClick="toggle-collapse">Toggle Collapse</Button>
        <Collapse id="collapseShown" show={true}>
          <div class="card card-body">
            This collapse panel is initially visible because show is set to
            true.
          </div>
        </Collapse>
      </>,
    ),
  parameters: {
    docs: {
      source: {
        code: `<Button onClick="toggle-collapse">Toggle Collapse</Button>
<Collapse id="collapseShown" show={true}>
  <div class="card card-body">
    This collapse panel is initially visible.
  </div>
</Collapse>`,
      },
    },
  },
}

export const Horizontal: Story = {
  render: () =>
    renderJaxs(
      <div>
        <Button onClick="toggle-horizontal-collapse">
          Toggle Horizontal Collapse
        </Button>
        <div style="min-height: 120px;">
          <Collapse id="collapseHorizontal" show={false} horizontal={true}>
            <div class="card card-body" style="width: 300px;">
              This is a horizontal collapse. The content collapses horizontally
              instead of vertically.
            </div>
          </Collapse>
        </div>
      </div>,
    ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the horizontal prop to make the collapse animate horizontally instead of vertically.',
      },
      source: {
        code: `<Button onClick="toggle-horizontal-collapse">
  Toggle Horizontal Collapse
</Button>
<Collapse id="collapseHorizontal" show={false} horizontal={true}>
  <div class="card card-body" style="width: 300px;">
    This is a horizontal collapse.
  </div>
</Collapse>`,
      },
    },
  },
}

export const MultipleTargets: Story = {
  render: () =>
    renderJaxs(
      <div>
        <Button onClick="toggle-first" class="me-2">
          Toggle First
        </Button>
        <Button onClick="toggle-second">Toggle Second</Button>
        <Button onClick="toggle-both">Toggle Both</Button>
        <div class="row mt-3">
          <div class="col">
            <Collapse id="collapseFirst" show={false}>
              <div class="card card-body">
                This is the first collapsible element. It can be toggled
                independently.
              </div>
            </Collapse>
          </div>
          <div class="col">
            <Collapse id="collapseSecond" show={false}>
              <div class="card card-body">
                This is the second collapsible element. It can be toggled
                independently.
              </div>
            </Collapse>
          </div>
        </div>
      </div>,
    ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple collapse components can be controlled independently.',
      },
      source: {
        code: `<Button onClick="toggle-first">Toggle First</Button>
<Button onClick="toggle-second">Toggle Second</Button>

<Collapse id="collapseFirst" show={false}>
  <div class="card card-body">
    This is the first collapsible element.
  </div>
</Collapse>

<Collapse id="collapseSecond" show={false}>
  <div class="card card-body">
    This is the second collapsible element.
  </div>
</Collapse>`,
      },
    },
  },
}
