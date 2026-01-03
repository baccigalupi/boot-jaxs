/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
} from '../components/offcanvas/offcanvas'
import { Button } from '../components/button/button'

const OffcanvasStart = () => {
  return (
    <Offcanvas
      id="offcanvas-start"
      placement="start"
      show={true}
      class="position-static"
    >
      <OffcanvasHeader>
        <OffcanvasTitle id="offcanvas-start-label">Offcanvas</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <p>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </p>
        <div>
          <Button variant="primary" onClick="on-click">
            Action
          </Button>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  )
}

const OffcanvasEnd = () => {
  return (
    <Offcanvas
      id="offcanvas-end"
      placement="end"
      show={true}
      class="position-static"
    >
      <OffcanvasHeader>
        <OffcanvasTitle id="offcanvas-end-label">Offcanvas End</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <p>
          Content for the right side offcanvas. This placement is the most
          common and appears from the right edge of the viewport.
        </p>
        <p>
          You can add any content here including forms, navigation menus, or any
          other components.
        </p>
      </OffcanvasBody>
    </Offcanvas>
  )
}

const OffcanvasTop = () => {
  return (
    <Offcanvas
      id="offcanvas-top"
      placement="top"
      show={true}
      class="position-static"
    >
      <OffcanvasHeader>
        <OffcanvasTitle id="offcanvas-top-label">Offcanvas Top</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <p>
          Content for the top offcanvas. This slides down from the top of the
          viewport. Perfect for notifications or contextual menus.
        </p>
      </OffcanvasBody>
    </Offcanvas>
  )
}

const OffcanvasBottom = () => {
  return (
    <Offcanvas
      id="offcanvas-bottom"
      placement="bottom"
      show={true}
      class="position-static"
    >
      <OffcanvasHeader>
        <OffcanvasTitle id="offcanvas-bottom-label">
          Offcanvas Bottom
        </OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <p>
          Content for the bottom offcanvas. This slides up from the bottom of
          the viewport. Great for mobile-style bottom sheets.
        </p>
      </OffcanvasBody>
    </Offcanvas>
  )
}

const meta: Meta = {
  title: 'Bootstrap/Offcanvas',
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

export const Start: Story = {
  render: () => renderJaxs(OffcanvasStart()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
} from './components/offcanvas/offcanvas'
import { Button } from './components/button/button'

<Offcanvas id="offcanvas-start" placement="start" show={true}>
  <OffcanvasHeader>
    <OffcanvasTitle id="offcanvas-start-label">Offcanvas</OffcanvasTitle>
  </OffcanvasHeader>
  <OffcanvasBody>
    <p>Some text as placeholder...</p>
    <Button variant="primary">Action</Button>
  </OffcanvasBody>
</Offcanvas>`,
      },
    },
  },
}

export const End: Story = {
  render: () => renderJaxs(OffcanvasEnd()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
} from './components/offcanvas/offcanvas'

<Offcanvas id="offcanvas-end" placement="end" show={true}>
  <OffcanvasHeader>
    <OffcanvasTitle id="offcanvas-end-label">Offcanvas End</OffcanvasTitle>
  </OffcanvasHeader>
  <OffcanvasBody>
    <p>Content for the right side offcanvas...</p>
  </OffcanvasBody>
</Offcanvas>`,
      },
    },
  },
}

export const Top: Story = {
  render: () => renderJaxs(OffcanvasTop()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
} from './components/offcanvas/offcanvas'

<Offcanvas id="offcanvas-top" placement="top" show={true}>
  <OffcanvasHeader>
    <OffcanvasTitle id="offcanvas-top-label">Offcanvas Top</OffcanvasTitle>
  </OffcanvasHeader>
  <OffcanvasBody>
    <p>Content for the top offcanvas...</p>
  </OffcanvasBody>
</Offcanvas>`,
      },
    },
  },
}

export const Bottom: Story = {
  render: () => renderJaxs(OffcanvasBottom()),
  parameters: {
    docs: {
      source: {
        code: `import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
} from './components/offcanvas/offcanvas'

<Offcanvas id="offcanvas-bottom" placement="bottom" show={true}>
  <OffcanvasHeader>
    <OffcanvasTitle id="offcanvas-bottom-label">Offcanvas Bottom</OffcanvasTitle>
  </OffcanvasHeader>
  <OffcanvasBody>
    <p>Content for the bottom offcanvas...</p>
  </OffcanvasBody>
</Offcanvas>`,
      },
    },
  },
}
