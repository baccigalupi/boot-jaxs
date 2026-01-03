/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import {
  Popover,
  PopoverHeader,
  PopoverBody,
} from '../components/popover/popover'
import { Button } from '../components/button/button'

const PopoverTop = () => {
  return (
    <div class="position-relative" style="height: 200px; padding-top: 100px;">
      <Button
        variant="secondary"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover content"
      >
        Popover on top
      </Button>
      <Popover
        placement="top"
        show={true}
        style="position: absolute; top: 20px; left: 50px;"
      >
        <PopoverHeader>Popover top</PopoverHeader>
        <PopoverBody>
          This is a popover on the top. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus.
        </PopoverBody>
      </Popover>
    </div>
  )
}

const PopoverRight = () => {
  return (
    <div class="position-relative" style="height: 150px; padding-top: 50px;">
      <Button
        variant="secondary"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Right popover content"
      >
        Popover on right
      </Button>
      <Popover
        placement="right"
        show={true}
        style="position: absolute; top: 40px; left: 180px;"
      >
        <PopoverHeader>Popover right</PopoverHeader>
        <PopoverBody>
          This is a popover on the right. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus.
        </PopoverBody>
      </Popover>
    </div>
  )
}

const PopoverBottom = () => {
  return (
    <div class="position-relative" style="height: 200px; padding-top: 20px;">
      <Button
        variant="secondary"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover content"
      >
        Popover on bottom
      </Button>
      <Popover
        placement="bottom"
        show={true}
        style="position: absolute; top: 65px; left: 50px;"
      >
        <PopoverHeader>Popover bottom</PopoverHeader>
        <PopoverBody>
          This is a popover on the bottom. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus.
        </PopoverBody>
      </Popover>
    </div>
  )
}

const PopoverLeft = () => {
  return (
    <div
      class="position-relative"
      style="height: 150px; padding-top: 50px; padding-left: 300px;"
    >
      <Button
        variant="secondary"
        data-bs-toggle="popover"
        data-bs-placement="left"
        data-bs-content="Left popover content"
      >
        Popover on left
      </Button>
      <Popover
        placement="left"
        show={true}
        style="position: absolute; top: 35px; left: 20px;"
      >
        <PopoverHeader>Popover left</PopoverHeader>
        <PopoverBody>
          This is a popover on the left. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus.
        </PopoverBody>
      </Popover>
    </div>
  )
}

const PopoverWithoutHeader = () => {
  return (
    <div class="position-relative" style="height: 150px; padding-top: 50px;">
      <Button
        variant="secondary"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-content="Popover content without header"
      >
        Popover without header
      </Button>
      <Popover
        placement="right"
        show={true}
        style="position: absolute; top: 40px; left: 240px;"
      >
        <PopoverBody>
          This popover doesn't have a header. It only contains body content.
        </PopoverBody>
      </Popover>
    </div>
  )
}

const AllDirections = () => {
  return (
    <div class="d-flex flex-column gap-3">
      <div class="position-relative" style="height: 200px; padding-top: 100px;">
        <Button variant="secondary">Top</Button>
        <Popover
          placement="top"
          show={true}
          style="position: absolute; top: 20px; left: 50px;"
        >
          <PopoverHeader>Popover on top</PopoverHeader>
          <PopoverBody>Top popover content</PopoverBody>
        </Popover>
      </div>

      <div class="position-relative" style="height: 150px; padding-top: 50px;">
        <Button variant="secondary">Right</Button>
        <Popover
          placement="right"
          show={true}
          style="position: absolute; top: 40px; left: 100px;"
        >
          <PopoverHeader>Popover on right</PopoverHeader>
          <PopoverBody>Right popover content</PopoverBody>
        </Popover>
      </div>

      <div class="position-relative" style="height: 200px; padding-top: 20px;">
        <Button variant="secondary">Bottom</Button>
        <Popover
          placement="bottom"
          show={true}
          style="position: absolute; top: 65px; left: 50px;"
        >
          <PopoverHeader>Popover on bottom</PopoverHeader>
          <PopoverBody>Bottom popover content</PopoverBody>
        </Popover>
      </div>

      <div
        class="position-relative"
        style="height: 150px; padding-top: 50px; padding-left: 300px;"
      >
        <Button variant="secondary">Left</Button>
        <Popover
          placement="left"
          show={true}
          style="position: absolute; top: 35px; left: 20px;"
        >
          <PopoverHeader>Popover on left</PopoverHeader>
          <PopoverBody>Left popover content</PopoverBody>
        </Popover>
      </div>
    </div>
  )
}

const DismissiblePopover = () => {
  return (
    <div class="position-relative" style="height: 200px; padding-top: 50px;">
      <Button
        variant="danger"
        data-bs-toggle="popover"
        data-bs-trigger="focus"
        data-bs-placement="right"
        data-bs-content="Click outside or press ESC to dismiss"
      >
        Dismissible popover
      </Button>
      <Popover
        placement="right"
        show={true}
        style="position: absolute; top: 40px; left: 200px;"
      >
        <PopoverHeader>Dismissible popover</PopoverHeader>
        <PopoverBody>
          Click outside this popover or press ESC to dismiss it. This uses the
          focus trigger.
        </PopoverBody>
      </Popover>
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

export const Right: Story = {
  render: () => renderJaxs(PopoverRight()),
  parameters: {
    docs: {
      source: {
        code: `import { Popover, PopoverHeader, PopoverBody } from './components/popover/popover'
import { Button } from './components/button/button'

<Button
  variant="secondary"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-content="Right popover content"
>
  Popover on right
</Button>

<Popover placement="right" show={true}>
  <PopoverHeader>Popover right</PopoverHeader>
  <PopoverBody>
    This is a popover on the right.
  </PopoverBody>
</Popover>`,
      },
    },
  },
}

export const Bottom: Story = {
  render: () => renderJaxs(PopoverBottom()),
  parameters: {
    docs: {
      source: {
        code: `import { Popover, PopoverHeader, PopoverBody } from './components/popover/popover'
import { Button } from './components/button/button'

<Button
  variant="secondary"
  data-bs-toggle="popover"
  data-bs-placement="bottom"
  data-bs-content="Bottom popover content"
>
  Popover on bottom
</Button>

<Popover placement="bottom" show={true}>
  <PopoverHeader>Popover bottom</PopoverHeader>
  <PopoverBody>
    This is a popover on the bottom.
  </PopoverBody>
</Popover>`,
      },
    },
  },
}

export const Left: Story = {
  render: () => renderJaxs(PopoverLeft()),
  parameters: {
    docs: {
      source: {
        code: `import { Popover, PopoverHeader, PopoverBody } from './components/popover/popover'
import { Button } from './components/button/button'

<Button
  variant="secondary"
  data-bs-toggle="popover"
  data-bs-placement="left"
  data-bs-content="Left popover content"
>
  Popover on left
</Button>

<Popover placement="left" show={true}>
  <PopoverHeader>Popover left</PopoverHeader>
  <PopoverBody>
    This is a popover on the left.
  </PopoverBody>
</Popover>`,
      },
    },
  },
}

export const WithoutHeader: Story = {
  render: () => renderJaxs(PopoverWithoutHeader()),
  parameters: {
    docs: {
      source: {
        code: `import { Popover, PopoverBody } from './components/popover/popover'
import { Button } from './components/button/button'

<Button
  variant="secondary"
  data-bs-toggle="popover"
  data-bs-placement="right"
  data-bs-content="Popover content without header"
>
  Popover without header
</Button>

<Popover placement="right" show={true}>
  <PopoverBody>
    This popover doesn't have a header.
  </PopoverBody>
</Popover>`,
      },
    },
  },
}

export const FourDirections: Story = {
  render: () => renderJaxs(AllDirections()),
  parameters: {
    docs: {
      source: {
        code: `import { Popover, PopoverHeader, PopoverBody } from './components/popover/popover'
import { Button } from './components/button/button'

// Top
<Popover placement="top" show={true}>
  <PopoverHeader>Popover on top</PopoverHeader>
  <PopoverBody>Top popover content</PopoverBody>
</Popover>

// Right
<Popover placement="right" show={true}>
  <PopoverHeader>Popover on right</PopoverHeader>
  <PopoverBody>Right popover content</PopoverBody>
</Popover>

// Bottom
<Popover placement="bottom" show={true}>
  <PopoverHeader>Popover on bottom</PopoverHeader>
  <PopoverBody>Bottom popover content</PopoverBody>
</Popover>

// Left
<Popover placement="left" show={true}>
  <PopoverHeader>Popover on left</PopoverHeader>
  <PopoverBody>Left popover content</PopoverBody>
</Popover>`,
      },
    },
  },
}

export const Dismissible: Story = {
  render: () => renderJaxs(DismissiblePopover()),
  parameters: {
    docs: {
      source: {
        code: `import { Popover, PopoverHeader, PopoverBody } from './components/popover/popover'
import { Button } from './components/button/button'

<Button
  variant="danger"
  data-bs-toggle="popover"
  data-bs-trigger="focus"
  data-bs-placement="right"
  data-bs-content="Click outside or press ESC to dismiss"
>
  Dismissible popover
</Button>

<Popover placement="right" show={true}>
  <PopoverHeader>Dismissible popover</PopoverHeader>
  <PopoverBody>
    Click outside this popover or press ESC to dismiss it.
  </PopoverBody>
</Popover>`,
      },
    },
  },
}
