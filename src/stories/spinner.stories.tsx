/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Spinner } from '../components/spinner/spinner'
import { Button } from '../components/button/button'

const BorderSpinner = () => {
  return (
    <div class="d-flex gap-3">
      <Spinner type="border" label="Loading..." />
      <Spinner type="border" variant="primary" label="Loading..." />
      <Spinner type="border" variant="success" label="Loading..." />
      <Spinner type="border" variant="danger" label="Loading..." />
    </div>
  )
}

const GrowSpinner = () => {
  return (
    <div class="d-flex gap-3">
      <Spinner type="grow" label="Loading..." />
      <Spinner type="grow" variant="primary" label="Loading..." />
      <Spinner type="grow" variant="success" label="Loading..." />
      <Spinner type="grow" variant="danger" label="Loading..." />
    </div>
  )
}

const SmallSpinners = () => {
  return (
    <div class="d-flex gap-3">
      <Spinner type="border" size="sm" label="Loading..." />
      <Spinner type="grow" size="sm" label="Loading..." />
      <Spinner type="border" variant="primary" size="sm" label="Loading..." />
      <Spinner type="grow" variant="success" size="sm" label="Loading..." />
    </div>
  )
}

const AllVariants = () => {
  return (
    <div class="d-flex flex-column gap-4">
      <div>
        <h6 class="mb-3">Border Spinners</h6>
        <div class="d-flex gap-3">
          <Spinner type="border" label="Default" />
          <Spinner type="border" variant="primary" label="Primary" />
          <Spinner type="border" variant="secondary" label="Secondary" />
          <Spinner type="border" variant="success" label="Success" />
          <Spinner type="border" variant="danger" label="Danger" />
          <Spinner type="border" variant="warning" label="Warning" />
          <Spinner type="border" variant="info" label="Info" />
        </div>
      </div>

      <div>
        <h6 class="mb-3">Grow Spinners</h6>
        <div class="d-flex gap-3">
          <Spinner type="grow" label="Default" />
          <Spinner type="grow" variant="primary" label="Primary" />
          <Spinner type="grow" variant="secondary" label="Secondary" />
          <Spinner type="grow" variant="success" label="Success" />
          <Spinner type="grow" variant="danger" label="Danger" />
          <Spinner type="grow" variant="warning" label="Warning" />
          <Spinner type="grow" variant="info" label="Info" />
        </div>
      </div>
    </div>
  )
}

const SpinnerInButton = () => {
  return (
    <div class="d-flex gap-2">
      <Button variant="primary" disabled>
        <Spinner type="border" size="sm" label="Loading..." class="me-2" />
        Loading...
      </Button>
      <Button variant="success" disabled>
        <Spinner type="grow" size="sm" label="Loading..." class="me-2" />
        Processing...
      </Button>
    </div>
  )
}

const CenterSpinner = () => {
  return (
    <div class="d-flex justify-content-center align-items-center" style="height: 200px;">
      <div class="text-center">
        <Spinner type="border" label="Loading..." class="mb-3" />
        <p class="text-muted">Please wait...</p>
      </div>
    </div>
  )
}

const MultipleSpinners = () => {
  return (
    <div>
      <h6 class="mb-3">Default Size</h6>
      <div class="d-flex gap-3 mb-4">
        <Spinner type="border" label="Loading..." />
        <Spinner type="border" variant="primary" label="Loading..." />
        <Spinner type="border" variant="success" label="Loading..." />
      </div>

      <h6 class="mb-3">Small Size</h6>
      <div class="d-flex gap-3 mb-4">
        <Spinner type="border" size="sm" label="Loading..." />
        <Spinner type="border" variant="primary" size="sm" label="Loading..." />
        <Spinner type="border" variant="success" size="sm" label="Loading..." />
      </div>

      <h6 class="mb-3">Grow Type Small</h6>
      <div class="d-flex gap-3">
        <Spinner type="grow" size="sm" label="Loading..." />
        <Spinner type="grow" variant="primary" size="sm" label="Loading..." />
        <Spinner type="grow" variant="success" size="sm" label="Loading..." />
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Bootstrap/Spinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
}

export default meta

type Story = StoryObj

export const Border: Story = {
  render: () => renderJaxs(BorderSpinner()),
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from './components/spinner/spinner'

<Spinner type="border" label="Loading..." />
<Spinner type="border" variant="primary" label="Loading..." />
<Spinner type="border" variant="success" label="Loading..." />
<Spinner type="border" variant="danger" label="Loading..." />`,
      },
    },
  },
}

export const Grow: Story = {
  render: () => renderJaxs(GrowSpinner()),
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from './components/spinner/spinner'

<Spinner type="grow" label="Loading..." />
<Spinner type="grow" variant="primary" label="Loading..." />
<Spinner type="grow" variant="success" label="Loading..." />
<Spinner type="grow" variant="danger" label="Loading..." />`,
      },
    },
  },
}

export const Small: Story = {
  render: () => renderJaxs(SmallSpinners()),
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from './components/spinner/spinner'

<Spinner type="border" size="sm" label="Loading..." />
<Spinner type="grow" size="sm" label="Loading..." />
<Spinner type="border" variant="primary" size="sm" label="Loading..." />
<Spinner type="grow" variant="success" size="sm" label="Loading..." />`,
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => renderJaxs(AllVariants()),
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from './components/spinner/spinner'

// Border Spinners
<Spinner type="border" label="Default" />
<Spinner type="border" variant="primary" label="Primary" />
<Spinner type="border" variant="secondary" label="Secondary" />
<Spinner type="border" variant="success" label="Success" />
<Spinner type="border" variant="danger" label="Danger" />
<Spinner type="border" variant="warning" label="Warning" />
<Spinner type="border" variant="info" label="Info" />

// Grow Spinners
<Spinner type="grow" label="Default" />
<Spinner type="grow" variant="primary" label="Primary" />
<Spinner type="grow" variant="secondary" label="Secondary" />
<Spinner type="grow" variant="success" label="Success" />
<Spinner type="grow" variant="danger" label="Danger" />
<Spinner type="grow" variant="warning" label="Warning" />
<Spinner type="grow" variant="info" label="Info" />`,
      },
    },
  },
}

export const InButton: Story = {
  render: () => renderJaxs(SpinnerInButton()),
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from './components/spinner/spinner'
import { Button } from './components/button/button'

<Button variant="primary" disabled>
  <Spinner type="border" size="sm" label="Loading..." class="me-2" />
  Loading...
</Button>
<Button variant="success" disabled>
  <Spinner type="grow" size="sm" label="Loading..." class="me-2" />
  Processing...
</Button>`,
      },
    },
  },
}

export const Centered: Story = {
  render: () => renderJaxs(CenterSpinner()),
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from './components/spinner/spinner'

<div class="d-flex justify-content-center align-items-center" style="height: 200px;">
  <div class="text-center">
    <Spinner type="border" label="Loading..." class="mb-3" />
    <p class="text-muted">Please wait...</p>
  </div>
</div>`,
      },
    },
  },
}

export const Sizing: Story = {
  render: () => renderJaxs(MultipleSpinners()),
  parameters: {
    docs: {
      source: {
        code: `import { Spinner } from './components/spinner/spinner'

<!-- Default Size -->
<Spinner type="border" label="Loading..." />
<Spinner type="border" variant="primary" label="Loading..." />
<Spinner type="border" variant="success" label="Loading..." />

<!-- Small Size -->
<Spinner type="border" size="sm" label="Loading..." />
<Spinner type="border" variant="primary" size="sm" label="Loading..." />
<Spinner type="border" variant="success" size="sm" label="Loading..." />

<!-- Grow Type Small -->
<Spinner type="grow" size="sm" label="Loading..." />
<Spinner type="grow" variant="primary" size="sm" label="Loading..." />
<Spinner type="grow" variant="success" size="sm" label="Loading..." />`,
      },
    },
  },
}
