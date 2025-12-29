/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import {
  ListGroup,
  ListGroupItem,
  ListGroupActionItem,
} from '@components/list-group/list-group'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/ListGroup',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <ListGroup>
        <ListGroupItem active={true}>An active item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
        <ListGroupItem>A fourth item</ListGroupItem>
        <ListGroupItem>And a fifth one</ListGroupItem>
      </ListGroup>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { ListGroup } from './components/list-group/list-group'
import { ListGroupItem } from './components/list-group/list-group-item'

<ListGroup>
  <ListGroupItem>An item</ListGroupItem>
  <ListGroupItem>A second item</ListGroupItem>
  <ListGroupItem>A third item</ListGroupItem>
  <ListGroupItem>A fourth item</ListGroupItem>
  <ListGroupItem>And a fifth one</ListGroupItem>
</ListGroup>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {}

export const ListGroupActionItems: Story = {
  render: () =>
    renderJaxs(
      <ListGroup>
        <ListGroupActionItem href="#one" onClick="go-to-href" active={true}>
          An active item
        </ListGroupActionItem>
        <ListGroupActionItem href="#two" onClick="go-to-href" disabled={true}>
          A disabled link item
        </ListGroupActionItem>
        <ListGroupActionItem href="#three" onClick="go-to-href">
          A third item
        </ListGroupActionItem>
        <ListGroupActionItem href="#four" onClick="go-to-href">
          A fourth item
        </ListGroupActionItem>
        <ListGroupActionItem href="#five" onClick="go-to-href">
          And a fifth one
        </ListGroupActionItem>
      </ListGroup>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { ListGroup, ListGroupActionItem } from './components/list-group/list-group'
<ListGroup>
  <ListGroupActionItem href="#one" onClick="go-to-href" active={true}>
    An active item
  </ListGroupActionItem>
  <ListGroupActionItem href="#two" onClick="go-to-href" disabled={true}>
    A disabled link item
  </ListGroupActionItem>
  <ListGroupActionItem href="#three" onClick="go-to-href">
    A third item
  </ListGroupActionItem>
  <ListGroupActionItem href="#four" onClick="go-to-href">
    A fourth item
  </ListGroupActionItem>
  <ListGroupActionItem href="#five" onClick="go-to-href">
    And a fifth one
  </ListGroupActionItem>
</ListGroup>`,
      },
      description: {
        story:
          'List groups can be links too. The onClick props are required and optionally the href, if using jaxs navigation',
      },
    },
  },
}

export const Flush: Story = {
  render: () =>
    renderJaxs(
      <ListGroup flush={true}>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
        <ListGroupItem>A fourth item</ListGroupItem>
        <ListGroupItem>And a fifth one</ListGroupItem>
      </ListGroup>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { ListGroup, ListGroupItem } from './components/list-group/list-group'

<ListGroup flush={true}>
  <ListGroupItem>An item</ListGroupItem>
  <ListGroupItem>A second item</ListGroupItem>
  <ListGroupItem>A third item</ListGroupItem>
  <ListGroupItem>A fourth item</ListGroupItem>
  <ListGroupItem>And a fifth one</ListGroupItem>
</ListGroup>`,
      },
    },
  },
}

export const Numbered: Story = {
  render: () =>
    renderJaxs(
      <ListGroup numbered={true}>
        <ListGroupItem>A list item</ListGroupItem>
        <ListGroupItem>A list item</ListGroupItem>
        <ListGroupItem>A list item</ListGroupItem>
      </ListGroup>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { ListGroup, ListGroupItem } from './components/list-group/list-group'

<ListGroup numbered={true}>
  <ListGroupItem>A list item</ListGroupItem>
  <ListGroupItem>A list item</ListGroupItem>
  <ListGroupItem>A list item</ListGroupItem>
</ListGroup>`,
      },
    },
  },
}

export const Horizontal: Story = {
  render: () =>
    renderJaxs(
      <>
        <ListGroup horizontal={true}>
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
        <ListGroup horizontal={['sm', 'md']}>
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
      </>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { ListGroup, ListGroupItem } from './components/list-group/list-group'
<>
  <ListGroup horizontal={true}>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>A third item</ListGroupItem>
  </ListGroup>
  <ListGroup horizontal={['sm', 'md']}>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>A third item</ListGroupItem>
  </ListGroup>
</>
`,
      },
    },
  },
}

export const Variants: Story = {
  render: () =>
    renderJaxs(
      <ListGroup>
        <ListGroupItem>A simple default list group item</ListGroupItem>
        <ListGroupItem variant="primary">
          A simple primary list group item
        </ListGroupItem>
        <ListGroupItem variant="secondary">
          A simple secondary list group item
        </ListGroupItem>
        <ListGroupItem variant="success">
          A simple success list group item
        </ListGroupItem>
        <ListGroupItem variant="danger">
          A simple danger list group item
        </ListGroupItem>
        <ListGroupItem variant="warning">
          A simple warning list group item
        </ListGroupItem>
        <ListGroupItem variant="info">
          A simple info list group item
        </ListGroupItem>
        <ListGroupItem variant="light">
          A simple light list group item
        </ListGroupItem>
        <ListGroupItem variant="dark">
          A simple dark list group item
        </ListGroupItem>
      </ListGroup>,
    ),
  parameters: {
    docs: {
      source: {
        code: `import { ListGroup, ListGroupItem } from './components/list-group/list-group'

<ListGroup>
  <ListGroupItem>A simple default list group item</ListGroupItem>
  <ListGroupItem variant="primary">
    A simple primary list group item
  </ListGroupItem>
  <ListGroupItem variant="secondary">
    A simple secondary list group item
  </ListGroupItem>
  <ListGroupItem variant="success">
    A simple success list group item
  </ListGroupItem>
  <ListGroupItem variant="danger">
    A simple danger list group item
  </ListGroupItem>
  <ListGroupItem variant="warning">
    A simple warning list group item
  </ListGroupItem>
  <ListGroupItem variant="info">A simple info list group item</ListGroupItem>
  <ListGroupItem variant="light">
    A simple light list group item
  </ListGroupItem>
  <ListGroupItem variant="dark">A simple dark list group item</ListGroupItem>
</ListGroup>`,
      },
    },
  },
}
