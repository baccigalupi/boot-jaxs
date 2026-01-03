/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Placeholder } from '../components/placeholder/placeholder'
import { Card, CardBody } from '../components/card/card'
import { Button } from '../components/button/button'

const BasicPlaceholder = () => {
  return (
    <div>
      <p aria-hidden="true">
        <Placeholder width={6} /> <Placeholder width={8} />{' '}
        <Placeholder width={6} /> <Placeholder width={7} />{' '}
        <Placeholder width={4} /> <Placeholder width={6} />{' '}
        <Placeholder width={8} />
      </p>
    </div>
  )
}

const PlaceholderCard = () => {
  return (
    <div class="row">
      <div class="col-6">
        <Card>
          <CardBody>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button variant="primary" onClick="on-click">
              Go somewhere
            </Button>
          </CardBody>
        </Card>
      </div>
      <div class="col-6">
        <Card aria-hidden="true">
          <CardBody>
            <h5 class="card-title">
              <Placeholder width={55} />
            </h5>
            <p class="card-text">
              <Placeholder width={7} /> <Placeholder width={4} />{' '}
              <Placeholder width={4} /> <Placeholder width={6} />{' '}
              <Placeholder width={8} />
            </p>
            <Button onClick="on-click" variant="primary" disabled>
              <Placeholder width={6} />
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

const PlaceholderSizes = () => {
  return (
    <div>
      <p aria-hidden="true">
        <Placeholder size="lg" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder size="sm" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder size="xs" width={12} />
      </p>
    </div>
  )
}

const PlaceholderVariants = () => {
  return (
    <div>
      <p aria-hidden="true">
        <Placeholder width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="primary" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="secondary" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="success" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="danger" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="warning" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="info" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="light" width={12} />
      </p>
      <p aria-hidden="true">
        <Placeholder variant="dark" width={12} />
      </p>
    </div>
  )
}

const PlaceholderGlowAnimation = () => {
  return (
    <div>
      <p class="placeholder-glow">
        <Placeholder width={12} />
      </p>
    </div>
  )
}

const PlaceholderWaveAnimation = () => {
  return (
    <div>
      <p class="placeholder-wave">
        <Placeholder width={12} />
      </p>
    </div>
  )
}

const PlaceholderWithAnimation = () => {
  return (
    <div>
      <h6>Glow Animation</h6>
      <p aria-hidden="true">
        <Placeholder animation="glow" width={7} />{' '}
        <Placeholder animation="glow" width={4} />{' '}
        <Placeholder animation="glow" width={4} />{' '}
        <Placeholder animation="glow" width={6} />{' '}
        <Placeholder animation="glow" width={8} />
      </p>

      <h6 class="mt-4">Wave Animation</h6>
      <p aria-hidden="true">
        <Placeholder animation="wave" width={7} />{' '}
        <Placeholder animation="wave" width={4} />{' '}
        <Placeholder animation="wave" width={4} />{' '}
        <Placeholder animation="wave" width={6} />{' '}
        <Placeholder animation="wave" width={8} />
      </p>
    </div>
  )
}

const FullExample = () => {
  return (
    <div class="row g-3">
      <div class="col-md-6">
        <Card>
          <CardBody>
            <h5 class="card-title">Loaded Content</h5>
            <p class="card-text">
              This is an example of fully loaded content. The text and button
              are visible and interactive.
            </p>
            <Button onClick="on-click" variant="primary">
              Read more
            </Button>
          </CardBody>
        </Card>
      </div>
      <div class="col-md-6">
        <Card aria-hidden="true">
          <CardBody>
            <div class="h5 placeholder-glow">
              <Placeholder width={75} />
            </div>
            <p class="card-text placeholder-glow">
              <Placeholder width={7} /> <Placeholder width={4} />{' '}
              <Placeholder width={4} /> <Placeholder width={6} />{' '}
              <Placeholder width={8} /> <Placeholder width={7} />{' '}
              <Placeholder width={4} />
            </p>
            <Button variant="primary" disabled={true} tabindex="-1">
              <Placeholder width={6} />
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Bootstrap/Placeholder',
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
  render: () => renderJaxs(BasicPlaceholder()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'

<p aria-hidden="true">
  <Placeholder width={6} /> <Placeholder width={8} /> <Placeholder width={6} />
  <Placeholder width={7} /> <Placeholder width={4} /> <Placeholder width={6} />
  <Placeholder width={8} />
</p>`,
      },
    },
  },
}

export const CardExample: Story = {
  render: () => renderJaxs(PlaceholderCard()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'
import { Card, CardBody } from './components/card/card'
import { Button } from './components/button/button'

<Card aria-hidden="true">
  <CardBody>
    <h5 class="card-title">
      <Placeholder width={55} />
    </h5>
    <p class="card-text">
      <Placeholder width={7} /> <Placeholder width={4} />
      <Placeholder width={4} /> <Placeholder width={6} />
      <Placeholder width={8} />
    </p>
    <Button variant="primary" disabled>
      <Placeholder width={6} />
    </Button>
  </CardBody>
</Card>`,
      },
    },
  },
}

export const Sizes: Story = {
  render: () => renderJaxs(PlaceholderSizes()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'

<p aria-hidden="true">
  <Placeholder size="lg" width={12} />
</p>
<p aria-hidden="true">
  <Placeholder width={12} />
</p>
<p aria-hidden="true">
  <Placeholder size="sm" width={12} />
</p>
<p aria-hidden="true">
  <Placeholder size="xs" width={12} />
</p>`,
      },
    },
  },
}

export const Variants: Story = {
  render: () => renderJaxs(PlaceholderVariants()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'

<p aria-hidden="true">
  <Placeholder width={12} />
</p>
<p aria-hidden="true">
  <Placeholder variant="primary" width={12} />
</p>
<p aria-hidden="true">
  <Placeholder variant="secondary" width={12} />
</p>
<p aria-hidden="true">
  <Placeholder variant="success" width={12} />
</p>
<p aria-hidden="true">
  <Placeholder variant="danger" width={12} />
</p>`,
      },
    },
  },
}

export const GlowAnimation: Story = {
  render: () => renderJaxs(PlaceholderGlowAnimation()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'

<p class="placeholder-glow">
  <Placeholder width={12} />
</p>`,
      },
    },
  },
}

export const WaveAnimation: Story = {
  render: () => renderJaxs(PlaceholderWaveAnimation()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'

<p class="placeholder-wave">
  <Placeholder width={12} />
</p>`,
      },
    },
  },
}

export const WithAnimations: Story = {
  render: () => renderJaxs(PlaceholderWithAnimation()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'

<p aria-hidden="true">
  <Placeholder animation="glow" width={7} />
  <Placeholder animation="glow" width={4} />
  <Placeholder animation="glow" width={4} />
  <Placeholder animation="glow" width={6} />
  <Placeholder animation="glow" width={8} />
</p>

<p aria-hidden="true">
  <Placeholder animation="wave" width={7} />
  <Placeholder animation="wave" width={4} />
  <Placeholder animation="wave" width={4} />
  <Placeholder animation="wave" width={6} />
  <Placeholder animation="wave" width={8} />
</p>`,
      },
    },
  },
}

export const FullCard: Story = {
  render: () => renderJaxs(FullExample()),
  parameters: {
    docs: {
      source: {
        code: `import { Placeholder } from './components/placeholder/placeholder'
import { Card, CardBody } from './components/card/card'
import { Button } from './components/button/button'

<Card aria-hidden="true">
  <CardBody>
    <div class="h5 placeholder-glow">
      <Placeholder width={75} />
    </div>
    <p class="card-text placeholder-glow">
      <Placeholder width={7} /> <Placeholder width={4} />
      <Placeholder width={4} /> <Placeholder width={6} />
      <Placeholder width={8} /> <Placeholder width={7} />
      <Placeholder width={4} />
    </p>
    <Button variant="primary" disabled tabindex="-1">
      <Placeholder width={6} />
    </Button>
  </CardBody>
</Card>`,
      },
    },
  },
}
