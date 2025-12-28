/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import {
  Dropdown,
  DropdownMenu,
  DropUpMenu,
  DropEndMenu,
  DropStartMenu,
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
        <DropdownButton variant="primary" onClick="toggle-dropdown">
          Dropdown button
        </DropdownButton>
        <DropdownMenu>
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
        code: `import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from './components/dropdown/dropdown'

<Dropdown>
  <DropdownButton variant="primary" onClick="toggle-dropdown">
    Dropdown button
  </DropdownButton>
  <DropdownMenu>
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
        <DropdownButton variant="primary" onClick="toggle-dropdown">
          Dropdown button
        </DropdownButton>
        <DropdownMenu show={true}>
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
          toggleOnClick="toggle-split-dropdown"
        >
          Main Action
        </DropdownButtonSplit>
        <DropdownMenu show={true}>
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
    DropdownButtonSplit
      variant="success"
      onClick="main-action"
      toggleOnClick="toggle-split-dropdown"
    >
      Main Action
    </DropdownButtonSplit>
    <DropdownToggle
      variant="success"
      split={true}
      onClick="toggle-split-dropdown"
    />
    <DropdownMenu show={true}>
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
        <DropdownButton variant="secondary" onClick="toggle-dividers">
          Dropdown with dividers
        </DropdownButton>
        <DropdownMenu show={true}>
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
  <DropdownButton variant="secondary">Dropdown with dividers</DropdownButton>
  <DropdownMenu>
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
        <DropdownButton variant="primary" onClick="toggle-headers">
          Dropdown with headers
        </DropdownButton>
        <DropdownMenu show={true}>
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
  <DropdownButton variant="primary" onClick="toggle-headers">Dropdown with headers</DropdownButton>
  <DropdownMenu show={true}>
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
        <DropdownButton variant="primary" onClick="toggle-states">
          Dropdown with states
        </DropdownButton>
        <DropdownMenu show={true}>
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
        code: `<Dropdown>
  <DropdownButton variant="primary" onClick="toggle-states">Dropdown</DropdownButton>
  <DropdownMenu show={true}>
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
        <DropUpMenu show={true}>
          <DropdownItem href="#item-1">Item 1</DropdownItem>
          <DropdownItem href="#item-2">Item 2</DropdownItem>
          <DropdownItem href="#item-3">Item 3</DropdownItem>
        </DropUpMenu>
        <DropdownButton onClick="toggle-dropdown">Drop-up</DropdownButton>
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
  <DropUpMenu show={true} >
    <DropdownItem href="#item-1">Item 1</DropdownItem>
    <DropdownItem href="#item-2">Item 2</DropdownItem>
    <DropdownItem href="#item-3">Item 3</DropdownItem>
  </DropUpMenu>
  <DropdownButton onClick="toggle-dropdown">Drop-up</DropdownButton>
</Dropdown>`,
      },
    },
  },
}

export const DropEnd: Story = {
  render: () =>
    renderJaxs(
      <Dropdown id="dropend" class="dropend">
        <DropdownButton onClick="toggle-dropdown">Drop-end</DropdownButton>
        <DropEndMenu show={true}>
          <DropdownItem href="#item-1">Item 1</DropdownItem>
          <DropdownItem href="#item-2">Item 2</DropdownItem>
          <DropdownItem href="#item-3">Item 3</DropdownItem>
        </DropEndMenu>
      </Dropdown>,
    ),
  parameters: {
    docs: {
      description: {
        story:
          'Dropdowns are kind of misnamed and can drop in any direction. This one drops upwards, maybe because it is at the bottom of the page?',
      },
      source: {
        code: `<Dropdown id="dropend" class='dropend'>
  <DropUpMenu show={true} >
    <DropdownItem href="#item-1">Item 1</DropdownItem>
    <DropdownItem href="#item-2">Item 2</DropdownItem>
    <DropdownItem href="#item-3">Item 3</DropdownItem>
  </DropUpMenu>
  <DropdownButton onClick="toggle-dropdown">Drop-up</DropdownButton>
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
          <DropdownButton onClick="toggle-dropdown">Drop-start</DropdownButton>
          <DropStartMenu show={true}>
            <DropdownItem href="#item-1">Item 1</DropdownItem>
            <DropdownItem href="#item-2">Item 2</DropdownItem>
            <DropdownItem href="#item-3">Item 3</DropdownItem>
          </DropStartMenu>
        </Dropdown>
      </div>,
    ),
  parameters: {
    docs: {
      description: {
        story:
          'Dropdowns are kind of misnamed and can drop in any direction. This one drops upwards, maybe because it is at the bottom of the page?',
      },
      source: {
        code: `<div class="d-flex justify-content-center">
  <Dropdown id="dropstart" class="dropstart">
    <DropdownButton onClick="toggle-dropdown">Drop-start</DropdownButton>
    <DropStartMenu show={true}>
      <DropdownItem href="#item-1">Item 1</DropdownItem>
      <DropdownItem href="#item-2">Item 2</DropdownItem>
      <DropdownItem href="#item-3">Item 3</DropdownItem>
    </DropStartMenu>
  </Dropdown>
</div>`,
      },
    },
  },
}
