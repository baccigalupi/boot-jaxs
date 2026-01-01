/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Progress, ProgressBar } from '../components/progress/progress'

const BasicProgress = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <Progress>
        <ProgressBar value={0} />
      </Progress>
      <Progress>
        <ProgressBar value={25} />
      </Progress>
      <Progress>
        <ProgressBar value={50} />
      </Progress>
      <Progress>
        <ProgressBar value={75} />
      </Progress>
      <Progress>
        <ProgressBar value={100} />
      </Progress>
    </div>
  )
}

const ProgressWithLabels = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <Progress>
        <ProgressBar value={25} label="25%" />
      </Progress>
      <Progress>
        <ProgressBar value={50} label="50%" />
      </Progress>
      <Progress>
        <ProgressBar value={75} label="75%" />
      </Progress>
    </div>
  )
}

const ProgressHeights = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <Progress height={1}>
        <ProgressBar value={25} />
      </Progress>
      <Progress height={10}>
        <ProgressBar value={25} />
      </Progress>
      <Progress height={20}>
        <ProgressBar value={25} />
      </Progress>
      <Progress height="30px">
        <ProgressBar value={25} />
      </Progress>
    </div>
  )
}

const ProgressBackgrounds = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <Progress>
        <ProgressBar value={25} variant="success" />
      </Progress>
      <Progress>
        <ProgressBar value={50} variant="info" />
      </Progress>
      <Progress>
        <ProgressBar value={75} variant="warning" />
      </Progress>
      <Progress>
        <ProgressBar value={100} variant="danger" />
      </Progress>
    </div>
  )
}

const ProgressStriped = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <Progress>
        <ProgressBar value={10} striped />
      </Progress>
      <Progress>
        <ProgressBar value={25} variant="success" striped />
      </Progress>
      <Progress>
        <ProgressBar value={50} variant="info" striped />
      </Progress>
      <Progress>
        <ProgressBar value={75} variant="warning" striped />
      </Progress>
      <Progress>
        <ProgressBar value={100} variant="danger" striped />
      </Progress>
    </div>
  )
}

const ProgressAnimated = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <Progress>
        <ProgressBar value={75} animated />
      </Progress>
      <Progress>
        <ProgressBar value={50} variant="success" animated />
      </Progress>
      <Progress>
        <ProgressBar value={60} variant="warning" animated />
      </Progress>
    </div>
  )
}

const ProgressMultiple = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <Progress>
        <ProgressBar value={15} />
        <ProgressBar value={30} variant="success" />
        <ProgressBar value={20} variant="info" />
      </Progress>
      <Progress>
        <ProgressBar value={15} label="15%" />
        <ProgressBar value={30} variant="success" label="30%" />
        <ProgressBar value={20} variant="info" label="20%" />
      </Progress>
      <Progress>
        <ProgressBar value={20} striped />
        <ProgressBar value={15} variant="success" striped />
        <ProgressBar value={25} variant="info" striped />
        <ProgressBar value={10} variant="warning" striped />
      </Progress>
    </div>
  )
}

const meta: Meta = {
  title: 'Bootstrap/Progress',
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

export const Default: Story = {
  render: () => renderJaxs(BasicProgress()),
  parameters: {
    docs: {
      source: {
        code: `import { Progress, ProgressBar } from './components/progress/progress'

<Progress>
  <ProgressBar value={0} />
</Progress>
<Progress>
  <ProgressBar value={25} />
</Progress>
<Progress>
  <ProgressBar value={50} />
</Progress>
<Progress>
  <ProgressBar value={75} />
</Progress>
<Progress>
  <ProgressBar value={100} />
</Progress>`,
      },
    },
  },
}

export const WithLabels: Story = {
  render: () => renderJaxs(ProgressWithLabels()),
  parameters: {
    docs: {
      source: {
        code: `import { Progress, ProgressBar } from './components/progress/progress'

<Progress>
  <ProgressBar value={25} label="25%" />
</Progress>
<Progress>
  <ProgressBar value={50} label="50%" />
</Progress>
<Progress>
  <ProgressBar value={75} label="75%" />
</Progress>`,
      },
    },
  },
}

export const Heights: Story = {
  render: () => renderJaxs(ProgressHeights()),
  parameters: {
    docs: {
      source: {
        code: `import { Progress, ProgressBar } from './components/progress/progress'

<Progress height={1}>
  <ProgressBar value={25} />
</Progress>
<Progress height={10}>
  <ProgressBar value={25} />
</Progress>
<Progress height={20}>
  <ProgressBar value={25} />
</Progress>
<Progress height="30px">
  <ProgressBar value={25} />
</Progress>`,
      },
    },
  },
}

export const Backgrounds: Story = {
  render: () => renderJaxs(ProgressBackgrounds()),
  parameters: {
    docs: {
      source: {
        code: `import { Progress, ProgressBar } from './components/progress/progress'

<Progress>
  <ProgressBar value={25} variant="success" />
</Progress>
<Progress>
  <ProgressBar value={50} variant="info" />
</Progress>
<Progress>
  <ProgressBar value={75} variant="warning" />
</Progress>
<Progress>
  <ProgressBar value={100} variant="danger" />
</Progress>`,
      },
    },
  },
}

export const Striped: Story = {
  render: () => renderJaxs(ProgressStriped()),
  parameters: {
    docs: {
      source: {
        code: `import { Progress, ProgressBar } from './components/progress/progress'

<Progress>
  <ProgressBar value={10} striped />
</Progress>
<Progress>
  <ProgressBar value={25} variant="success" striped />
</Progress>
<Progress>
  <ProgressBar value={50} variant="info" striped />
</Progress>
<Progress>
  <ProgressBar value={75} variant="warning" striped />
</Progress>
<Progress>
  <ProgressBar value={100} variant="danger" striped />
</Progress>`,
      },
    },
  },
}

export const Animated: Story = {
  render: () => renderJaxs(ProgressAnimated()),
  parameters: {
    docs: {
      source: {
        code: `import { Progress, ProgressBar } from './components/progress/progress'

<Progress>
  <ProgressBar value={75} animated />
</Progress>
<Progress>
  <ProgressBar value={50} variant="success" animated />
</Progress>
<Progress>
  <ProgressBar value={60} variant="warning" animated />
</Progress>`,
      },
    },
  },
}

export const Multiple: Story = {
  render: () => renderJaxs(ProgressMultiple()),
  parameters: {
    docs: {
      source: {
        code: `import { Progress, ProgressBar } from './components/progress/progress'

<Progress>
  <ProgressBar value={15} />
  <ProgressBar value={30} variant="success" />
  <ProgressBar value={20} variant="info" />
</Progress>

<Progress>
  <ProgressBar value={15} label="15%" />
  <ProgressBar value={30} variant="success" label="30%" />
  <ProgressBar value={20} variant="info" label="20%" />
</Progress>

<Progress>
  <ProgressBar value={20} striped />
  <ProgressBar value={15} variant="success" striped />
  <ProgressBar value={25} variant="info" striped />
  <ProgressBar value={10} variant="warning" striped />
</Progress>`,
      },
    },
  },
}
