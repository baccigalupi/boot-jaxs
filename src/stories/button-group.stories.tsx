/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { ButtonGroup } from '../components/button-group/button-group'
import { ButtonToolbar } from '../components/button-group/button-toolbar'
import { ButtonGroupVertical } from '../components/button-group/button-group-vertical'
import { Button } from '../components/button/button'

const meta = {
  title: 'Bootstrap/ButtonGroup',
  tags: ['autodocs'],
  render: () => renderJaxs(
    <ButtonGroup ariaLabel="Basic example">
      <Button variant="primary" onClick="on-click">Left</Button>
      <Button variant="primary" onClick="on-click">Middle</Button>
      <Button variant="primary" onClick="on-click">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { ButtonGroup } from './components/button-group/button-group'
import { Button } from './components/button/button'

<ButtonGroup ariaLabel="Basic example">
  <Button variant="primary" onClick="on-click">Left</Button>
  <Button variant="primary" onClick="on-click">Middle</Button>
  <Button variant="primary" onClick="on-click">Right</Button>
</ButtonGroup>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => renderJaxs(
    <ButtonGroup ariaLabel="Basic example">
      <Button variant="primary" onClick="on-click">Left</Button>
      <Button variant="primary" onClick="on-click">Middle</Button>
      <Button variant="primary" onClick="on-click">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ButtonGroup ariaLabel="Basic example">
  <Button variant="primary" onClick="on-click">Left</Button>
  <Button variant="primary" onClick="on-click">Middle</Button>
  <Button variant="primary" onClick="on-click">Right</Button>
</ButtonGroup>`,
      },
    },
  },
}

export const MixedStyles: Story = {
  render: () => renderJaxs(
    <ButtonGroup ariaLabel="Basic mixed styles example">
      <Button variant="danger" onClick="on-click">Left</Button>
      <Button variant="warning" onClick="on-click">Middle</Button>
      <Button variant="success" onClick="on-click">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ButtonGroup ariaLabel="Basic mixed styles example">
  <Button variant="danger" onClick="on-click">Left</Button>
  <Button variant="warning" onClick="on-click">Middle</Button>
  <Button variant="success" onClick="on-click">Right</Button>
</ButtonGroup>`,
      },
    },
  },
}

export const Outlined: Story = {
  render: () => renderJaxs(
    <ButtonGroup ariaLabel="Basic outlined example">
      <Button variant="primary" outline={true} onClick="on-click">Left</Button>
      <Button variant="primary" outline={true} onClick="on-click">Middle</Button>
      <Button variant="primary" outline={true} onClick="on-click">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ButtonGroup ariaLabel="Basic outlined example">
  <Button variant="primary" outline={true} onClick="on-click">Left</Button>
  <Button variant="primary" outline={true} onClick="on-click">Middle</Button>
  <Button variant="primary" outline={true} onClick="on-click">Right</Button>
</ButtonGroup>`,
      },
    },
  },
}

export const Toolbar: Story = {
  render: () => renderJaxs(
    <ButtonToolbar ariaLabel="Toolbar with button groups">
      <ButtonGroup class="me-2" ariaLabel="First group">
        <Button variant="primary" onClick="on-click">1</Button>
        <Button variant="primary" onClick="on-click">2</Button>
        <Button variant="primary" onClick="on-click">3</Button>
        <Button variant="primary" onClick="on-click">4</Button>
      </ButtonGroup>
      <ButtonGroup class="me-2" ariaLabel="Second group">
        <Button variant="secondary" onClick="on-click">5</Button>
        <Button variant="secondary" onClick="on-click">6</Button>
        <Button variant="secondary" onClick="on-click">7</Button>
      </ButtonGroup>
      <ButtonGroup ariaLabel="Third group">
        <Button variant="info" onClick="on-click">8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ButtonToolbar ariaLabel="Toolbar with button groups">
  <ButtonGroup class="me-2" ariaLabel="First group">
    <Button variant="primary" onClick="on-click">1</Button>
    <Button variant="primary" onClick="on-click">2</Button>
    <Button variant="primary" onClick="on-click">3</Button>
    <Button variant="primary" onClick="on-click">4</Button>
  </ButtonGroup>
  <ButtonGroup class="me-2" ariaLabel="Second group">
    <Button variant="secondary" onClick="on-click">5</Button>
    <Button variant="secondary" onClick="on-click">6</Button>
    <Button variant="secondary" onClick="on-click">7</Button>
  </ButtonGroup>
  <ButtonGroup ariaLabel="Third group">
    <Button variant="info" onClick="on-click">8</Button>
  </ButtonGroup>
</ButtonToolbar>`,
      },
    },
  },
}

export const Large: Story = {
  render: () => renderJaxs(
    <ButtonGroup size="lg" ariaLabel="Large button group">
      <Button variant="primary" outline={true} onClick="on-click">Left</Button>
      <Button variant="primary" outline={true} onClick="on-click">Middle</Button>
      <Button variant="primary" outline={true} onClick="on-click">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ButtonGroup size="lg" ariaLabel="Large button group">
  <Button variant="primary" outline={true} onClick="on-click">Left</Button>
  <Button variant="primary" outline={true} onClick="on-click">Middle</Button>
  <Button variant="primary" outline={true} onClick="on-click">Right</Button>
</ButtonGroup>`,
      },
    },
  },
}

export const Small: Story = {
  render: () => renderJaxs(
    <ButtonGroup size="sm" ariaLabel="Small button group">
      <Button variant="primary" outline={true} onClick="on-click">Left</Button>
      <Button variant="primary" outline={true} onClick="on-click">Middle</Button>
      <Button variant="primary" outline={true} onClick="on-click">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ButtonGroup size="sm" ariaLabel="Small button group">
  <Button variant="primary" outline={true} onClick="on-click">Left</Button>
  <Button variant="primary" outline={true} onClick="on-click">Middle</Button>
  <Button variant="primary" outline={true} onClick="on-click">Right</Button>
</ButtonGroup>`,
      },
    },
  },
}

export const Vertical: Story = {
  render: () => renderJaxs(
    <ButtonGroupVertical ariaLabel="Vertical button group">
      <Button variant="primary" onClick="on-click">Button</Button>
      <Button variant="primary" onClick="on-click">Button</Button>
      <Button variant="primary" onClick="on-click">Button</Button>
      <Button variant="primary" onClick="on-click">Button</Button>
    </ButtonGroupVertical>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ButtonGroupVertical ariaLabel="Vertical button group">
  <Button variant="primary" onClick="on-click">Button</Button>
  <Button variant="primary" onClick="on-click">Button</Button>
  <Button variant="primary" onClick="on-click">Button</Button>
  <Button variant="primary" onClick="on-click">Button</Button>
</ButtonGroupVertical>`,
      },
    },
  },
}
