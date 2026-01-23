/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Collapse } from '../components/collapse/collapse'
import { CollapseButton } from '@components/collapse/button'

const meta = {
  title: 'Bootstrap/Collapse',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <>
        <CollapseButton collapseId="collapseExample">
          Toggle Collapse
        </CollapseButton>
        <Collapse id="collapseExample" class='collapsing'>
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

<>
  <CollapseButton collapseId="collapseExample">Toggle Collapse</CollapseButton>
  <Collapse id="collapseExample">
    <div class="card card-body">
      Some placeholder content for the collapse component.
    </div>
  </Collapse>
</>`,
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
        <CollapseButton collapseId="collapseDefault">
          Toggle Collapse
        </CollapseButton>
        <Collapse id="collapseDefault">
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
        code: `<CollapseButton collapseId="collapseDefault">Toggle Collapse</CollapseButton>
<Collapse id="collapseDefault">
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
        <CollapseButton collapseId="collapseShown">
          Toggle Collapse
        </CollapseButton>
        <Collapse id="collapseShown">
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
        code: `<CollapseButton collapseId="collapseShown">Toggle Collapse</CollapseButton>
<Collapse id="collapseShown">
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
        <CollapseButton collapseId="collapseHorizontal">
          Toggle Horizontal Collapse
        </CollapseButton>
        <div style="min-height: 120px;">
          <Collapse id="collapseHorizontal" horizontal={true}>
            <div class="card card-body">
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
        code: `<CollapseButton collapseId="collapseHorizontal">
  Toggle Horizontal Collapse
</CollapseButton>
<Collapse id="collapseHorizontal" horizontal={true}>
  <div class="card card-body">
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
        <CollapseButton collapseId="collapseFirst" class="me-2">
          Toggle First
        </CollapseButton>
        <CollapseButton collapseId="collapseSecond">
          Toggle Second
        </CollapseButton>
        <CollapseButton collapseId="collapseBoth">Toggle Both</CollapseButton>
        <div class="row mt-3">
          <div class="col">
            <Collapse id="collapseFirst">
              <div class="card card-body">
                This is the first collapsible element. It can be toggled
                independently.
              </div>
            </Collapse>
          </div>
          <div class="col">
            <Collapse id="collapseSecond">
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
        code: `<CollapseButton collapseId="collapseFirst">Toggle First</CollapseButton>
<CollapseButton collapseId="collapseSecond">Toggle Second</CollapseButton>

<Collapse id="collapseFirst">
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
