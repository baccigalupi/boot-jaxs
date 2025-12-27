/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Card } from '@components/card/card'
import { CardBody } from '@components/card/card-body'
import { CardGroup } from '@components/card/card-group'
import { CardHeader } from '@components/card/card-header'
import { CardFooter } from '@components/card/card-footer'
import { CardText } from '@components/card/card-text'
import { Link } from '@components/link/link'

// Placeholder image
const ImageCap = ({ class: className }: { class: string }) => (
  <svg
    aria-label="Placeholder: Image cap"
    class={`bd-placeholder-img ${className}`}
    height="180"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text
      x="50%"
      y="50%"
      fill="#dee2e6"
      dominant-baseline="middle"
      text-anchor="middle"
      dy=".3em"
    >
      Placeholder image
    </text>
  </svg>
)

const meta = {
  title: 'Bootstrap/Card',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <Card class="w-50">
        <ImageCap class="card-img-top" />
        <CardBody>
          <h5 class="card-title">Card title</h5>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Link href="#" class="btn btn-primary">
            Go somewhere
          </Link>
        </CardBody>
      </Card>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Card } from './components/card/card'
import { CardBody } from './components/card/card-body'
import { CardText } from './components/card/card-text'
import { Button } from './components/button/button'

<Card class="w-50">
  <ImageCap class='card-img-top'/>
  <CardBody>
    <h5 class="card-title">Card title</h5>
    <CardText>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </CardText>
    <Link href="#" class="btn btn-primary">
      Go somewhere
    </Link>
  </CardBody>
</Card>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () =>
    renderJaxs(
      <Card class="w-50">
        <ImageCap class="card-img-top" />
        <CardBody>
          <h5 class="card-title">Card title</h5>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Link href="#" class="btn btn-primary">
            Go somewhere
          </Link>
        </CardBody>
      </Card>,
    ),
}

export const BodyOnly: Story = {
  render: () =>
    renderJaxs(
      <Card>
        <CardBody>This is some text within a card body.</CardBody>
      </Card>,
    ),
}

export const TitlesTextLinks: Story = {
  render: () =>
    renderJaxs(
      <Card class="w-25">
        <CardBody>
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </CardBody>
      </Card>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { Card } from './components/card/card'
import { CardBody } from './components/card/card-body'
import { CardText } from './components/card/card-text'
import { Button } from './components/button/button'

<Card class="w-25">
  <CardBody>
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <CardText>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </CardText>
    <a href="#" class="card-link">
      Card link
    </a>
    <a href="#" class="card-link">
      Another link
    </a>
  </CardBody>
</Card>
`,
      },
    },
  },
}

export const WithImagesOnBottom: Story = {
  render: () =>
    renderJaxs(
      <Card class="w-50">
        <CardBody>
          <h5 class="card-title">Image is on the bottom</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <CardText>
            Previous example showed the image at the top of the card. This is
            another option with the image on the bottom.
          </CardText>
        </CardBody>
        <ImageCap class="card-img-bottom" />
      </Card>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { Card } from './components/card/card'
import { CardBody } from './components/card/card-body'
import { CardText } from './components/card/card-text'

<Card class='w-50'>
  <CardBody>
    <h5 class="card-title">Image is on the bottom</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <CardText>
      Previous example showed the image at the top of the card. This is
      another option with the image on the bottom.
    </CardText>
  </CardBody>
  <ImageCap class="card-img-bottom"/>
</Card>
`,
      },
    },
  },
}

export const AsAListGroup: Story = {
  render: () =>
    renderJaxs(
      <Card class="w-25">
        <div class="card-header">Feature list header</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </Card>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { Card } from './components/card/card'

<Card class="w-25">
  <div class="card-header">
    Feature list header
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</Card>
`,
      },
    },
  },
}

export const WithHeaderFooter: Story = {
  render: () =>
    renderJaxs(
      <Card class="text-center">
        <CardHeader>Featured</CardHeader>
        <CardBody>
          <h5 class="card-title">Special title treatment</h5>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Link href="#" class="btn btn-primary">
            Go somewhere
          </Link>
        </CardBody>
        <CardFooter class="text-body-secondary">2 days ago</CardFooter>
      </Card>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { Card } from './components/card/card'
import { CardHeader } from './components/card/card-header'
import { CardFooter } from './components/card/card-footer'
import { CardText } from './components/card/card-text'

<Card class="text-center">
  <CardHeader>Featured</CardHeader>
  <CardBody>
    <h5 class="card-title">Special title treatment</h5>
    <CardText>
      With supporting text below as a natural lead-in to additional
      content.
    </CardText>
    <Link href="#" class="btn btn-primary">
      Go somewhere
    </Link>
  </CardBody>
  <CardFooter class="text-body-secondary">2 days ago</CardFooter>
</Card>
`,
      },
    },
  },
}

export const InCardGroup: Story = {
  render: () =>
    renderJaxs(
      <CardGroup class="row">
        <Card class="col col-sm-6 mb-3 mb-sm-0">
          <CardBody>
            <h5 class="card-title">Special title treatment</h5>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Link href="#" class="btn btn-primary">
              Go somewhere
            </Link>
          </CardBody>
        </Card>
        <Card class="col col-sm-6">
          <CardBody>
            <h5 class="card-title">Special title treatment</h5>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Link href="#" class="btn btn-primary">
              Go somewhere
            </Link>
          </CardBody>
        </Card>
      </CardGroup>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { Card } from './components/card/card'
import { CardFooter } from './components/card/card-footer'
import { CardBody } from './components/card/card-body'
import { CardText } from './components/card/card-text'
import { Link } from './components/button/link'

<CardGroup class='row'>
  <Card class="col col-sm-6 mb-3 mb-sm-0">
    <CardBody>
      <h5 class="card-title">Special title treatment</h5>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Link href="#" class="btn btn-primary">Go somewhere</Link>
    </CardBody>
  </Card>
  <Card class="col col-sm-6">
    <CardBody>
      <h5 class="card-title">Special title treatment</h5>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Link href="#" class="btn btn-primary">Go somewhere</Link>
    </CardBody>
  </Card>
</CardGroup>
`,
      },
    },
  },
}
