/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownHeader,
  DropdownButton,
  DropdownButtonSplit,
} from '../components/dropdown/dropdown'

const meta = {
  title: 'Bootstrap/Dropdown',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <Dropdown id="example-dropdown">
        <DropdownButton variant="primary" dropdownId="example-dropdown">
          Dropdown button
        </DropdownButton>
        <DropdownMenu dropdownId="example-dropdown">
          <DropdownItem href="#" onClick="action-1">
            Action
          </DropdownItem>
          <DropdownItem href="#" onClick="action-2">
            Another action
          </DropdownItem>
          <DropdownItem href="#" onClick="action-3">
            Something else here
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from './components/dropdown/dropdown'

<Dropdown id="example-dropdown">
  <DropdownButton variant="primary" dropdownId="example-dropdown">
    Dropdown button
  </DropdownButton>
  <DropdownMenu dropdownId="example-dropdown">
    <DropdownItem href="#" onClick="action-1">Action</DropdownItem>
    <DropdownItem href="#" onClick="action-2">Another action</DropdownItem>
    <DropdownItem href="#" onClick="action-3">Something else here</DropdownItem>
  </DropdownMenu>
</Dropdown>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="default-dropdown">
        <DropdownButton variant="primary" dropdownId="default-dropdown">
          Dropdown button
        </DropdownButton>
        <DropdownMenu dropdownId="default-dropdown">
          <DropdownItem href="#" onClick="action-1">
            Action
          </DropdownItem>
          <DropdownItem href="#" onClick="action-2">
            Another action
          </DropdownItem>
          <DropdownItem href="#" onClick="action-3">
            Something else here
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    ),
}

export const DropdownButtonWithSplit: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="split-button-dropdown">
        <DropdownButtonSplit
          variant="success"
          onClick="main-action"
          dropdownId="split-button-dropdown"
        >
          Main Action
        </DropdownButtonSplit>
        <DropdownMenu dropdownId="split-button-dropdown">
          <DropdownItem href="#" onClick="action-1">
            Action
          </DropdownItem>
          <DropdownItem href="#" onClick="action-2">
            Another action
          </DropdownItem>
          <DropdownItem href="#" onClick="action-3">
            Something else here
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      source: {
        code: `<Dropdown id="split-button-dropdown">
  <DropdownButtonSplit
    variant="success"
    onClick="main-action"
    dropdownId="split-button-dropdown"
  >
    Main Action
  </DropdownButtonSplit>
  <DropdownMenu show={true} dropdownId="split-button-dropdown">
    <DropdownItem href="#" onClick="action-1">
      Action
    </DropdownItem>
    <DropdownItem href="#" onClick="action-2">
      Another action
    </DropdownItem>
    <DropdownItem href="#" onClick="action-3">
      Something else here
    </DropdownItem>
  </DropdownMenu>
</Dropdown>`,
      },
    },
  },
}

export const WithDividers: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="dropdown-with-dividers">
        <DropdownButton variant="secondary" dropdownId="dropdown-with-dividers">
          Dropdown with dividers
        </DropdownButton>
        <DropdownMenu dropdownId="dropdown-with-dividers">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
          <DropdownDivider />
          <DropdownItem href="#">Separated link</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      source: {
        code: `<Dropdown id="dropdown-with-dividers">
  <DropdownButton variant="secondary" dropdownId="dropdown-with-dividers">
    Dropdown with dividers
  </DropdownButton>
  <DropdownMenu show={true} dropdownId="dropdown-with-dividers">
    <DropdownItem href="#">Action</DropdownItem>
    <DropdownItem href="#">Another action</DropdownItem>
    <DropdownItem href="#">Something else here</DropdownItem>
    <DropdownDivider />
    <DropdownItem href="#">Separated link</DropdownItem>
  </DropdownMenu>
</Dropdown>`,
      },
    },
  },
}

export const WithHeaders: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="dropdown-with-headers">
        <DropdownButton variant="primary" dropdownId="dropdown-with-headers">
          Dropdown with headers
        </DropdownButton>
        <DropdownMenu dropdownId="dropdown-with-headers">
          <DropdownHeader>Dropdown header</DropdownHeader>
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownDivider />
          <DropdownHeader>Another header</DropdownHeader>
          <DropdownItem href="#">Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      source: {
        code: `<Dropdown id="dropdown-with-headers">
  <DropdownButton variant="primary" dropdownId="dropdown-with-headers">
    Dropdown with headers
  </DropdownButton>
  <DropdownMenu dropdownId="dropdown-with-headers">
    <DropdownHeader>Dropdown header</DropdownHeader>
    <DropdownItem href="#">Action</DropdownItem>
    <DropdownItem href="#">Another action</DropdownItem>
    <DropdownDivider />
    <DropdownHeader>Another header</DropdownHeader>
    <DropdownItem href="#">Something else here</DropdownItem>
  </DropdownMenu>
</Dropdown>`,
      },
    },
  },
}

export const ActiveAndDisabled: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="dropdown-with-states">
        <DropdownButton variant="primary" dropdownId="dropdown-with-states">
          Dropdown with states
        </DropdownButton>
        <DropdownMenu dropdownId="dropdown-with-states">
          <DropdownItem href="#active" active={true}>
            Active item
          </DropdownItem>
          <DropdownItem href="#regular">Regular item</DropdownItem>
          <DropdownItem href="#disabled" disabled={true}>
            Disabled item
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      source: {
        code: `<Dropdown id="dropdown-with-states">
  <DropdownButton variant="primary" dropdownId="dropdown-with-states">
    Dropdown with states
  </DropdownButton>
  <DropdownMenu dropdownId="dropdown-with-states">
    <DropdownItem href="#active" active={true}>Active item</DropdownItem>
    <DropdownItem href="#regular">Regular item</DropdownItem>
    <DropdownItem href="#disabled" disabled={true}>Disabled item</DropdownItem>
  </DropdownMenu>
</Dropdown>`,
      },
    },
  },
}

export const Dropup: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="dropup" class="dropup">
        <DropdownMenu dropDirection="up" dropdownId="dropup">
          <DropdownItem href="#item-1">Item 1</DropdownItem>
          <DropdownItem href="#item-2">Item 2</DropdownItem>
          <DropdownItem href="#item-3">Item 3</DropdownItem>
        </DropdownMenu>
        <DropdownButton dropdownId="dropup">Drop-up</DropdownButton>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      description: {
        story:
          'Dropdowns are kind of misnamed and can drop in any direction. This one drops upwards, maybe because it is at the bottom of the page?',
      },
      source: {
        code: `<Dropdown id="dropup" class='dropup'>
  <DropdownMenu dropDirection="up" dropdownId="dropup">
    <DropdownItem href="#item-1">Item 1</DropdownItem>
    <DropdownItem href="#item-2">Item 2</DropdownItem>
    <DropdownItem href="#item-3">Item 3</DropdownItem>
  </DropdownMenu>
  <DropdownButton dropdownId="dropup">Drop-up</DropdownButton>
</Dropdown>`,
      },
    },
  },
}

export const DropEnd: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="dropend" class="dropend">
        <DropdownButton dropdownId="dropend">Drop-end</DropdownButton>
        <DropdownMenu dropDirection="end" dropdownId="dropend">
          <DropdownItem href="#item-1">Item 1</DropdownItem>
          <DropdownItem href="#item-2">Item 2</DropdownItem>
          <DropdownItem href="#item-3">Item 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      description: {
        story:
          'Dropdowns are kind of misnamed and can drop in any direction. This one drops to the end (right in LTR languages).',
      },
      source: {
        code: `<Dropdown id="dropend" class='dropend'>
  <DropdownButton dropdownId="dropend">Drop-end</DropdownButton>
  <DropdownMenu dropDirection="end" dropdownId="dropend">
    <DropdownItem href="#item-1">Item 1</DropdownItem>
    <DropdownItem href="#item-2">Item 2</DropdownItem>
    <DropdownItem href="#item-3">Item 3</DropdownItem>
  </DropdownMenu>
</Dropdown>`,
      },
    },
  },
}

export const DropStart: Story = {
  render: () =>
    renderJaxs(
      <div class="d-flex justify-content-center">
        <Dropdown id="dropstart" class="dropstart">
          <DropdownButton dropdownId="dropstart">Drop-start</DropdownButton>
          <DropdownMenu
            dropDirection="start"
            dropdownId="dropstart"
          >
            <DropdownItem href="#item-1">Item 1</DropdownItem>
            <DropdownItem href="#item-2">Item 2</DropdownItem>
            <DropdownItem href="#item-3">Item 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>,
    ),
  parameters: {
    docs: {
      description: {
        story:
          'Dropdowns are kind of misnamed and can drop in any direction. This one drops to the start (left in LTR languages).',
      },
      source: {
        code: `<div class="d-flex justify-content-center">
  <Dropdown id="dropstart" class="dropstart">
    <DropdownButton dropdownId="dropstart">Drop-start</DropdownButton>
    <DropdownMenu dropDirection="start" dropdownId="dropstart">
      <DropdownItem href="#item-1">Item 1</DropdownItem>
      <DropdownItem href="#item-2">Item 2</DropdownItem>
      <DropdownItem href="#item-3">Item 3</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>`,
      },
    },
  },
}
