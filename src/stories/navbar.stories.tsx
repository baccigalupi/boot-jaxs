/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Navbar } from '@components/navbar/navbar'
import { NavbarBrandLink } from '@components/navbar/navbar-brand'
import { NavbarToggler } from '@components/navbar/navbar-toggler'
import { NavbarNav } from '@components/navbar/navbar-nav'
import { NavItem } from '@components/navbar/nav-item'
import { NavLink } from '@components/navbar/nav-link'
import { Collapse } from '@components/collapse/collapse'

const meta = {
  title: 'Bootstrap/Navbar',
  tags: ['autodocs'],
  render: () =>
    renderJaxs(
      <Navbar class="bg-body-tertiary">
        <NavbarBrandLink href="#">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />{' '}
          Bootstrap
        </NavbarBrandLink>
      </Navbar>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Navbar } from './components/navbar/navbar'
import { NavbarBrandLink } from './components/navbar/navbar-brand'

<Navbar class="bg-body-tertiary">
  <NavbarBrandLink href="#">
    <img
      src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
      alt="Logo"
      width="30"
      height="24"
      class="d-inline-block align-text-top"
    />
    Bootstrap
  </NavbarBrandLink>
</Navbar>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Basic: Story = {}

export const WithNav: Story = {
  render: () =>
    renderJaxs(
      <Navbar class="navbar-expand-lg bg-body-tertiary">
        <NavbarBrandLink href="#">Navbar</NavbarBrandLink>
        <NavbarToggler
          onClick="toggle-navbar"
          ariaControls="navbarNav"
          ariaExpanded={false}
        />
        <Collapse id="navbarNav" show={false} class="navbar-collapse">
          <NavbarNav>
            <NavItem>
              <NavLink href="#" active={true}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled={true}>Disabled</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Navbar } from './components/navbar/navbar'
import { NavbarBrandLink } from './components/navbar/navbar-brand'
import { NavbarToggler } from './components/navbar/navbar-toggler'
import { NavbarNav } from './components/navbar/navbar-nav'
import { NavItem } from './components/navbar/nav-item'
import { NavLink } from './components/navbar/nav-link'
import { Collapse } from './components/collapse/collapse'

<Navbar class="navbar-expand-lg bg-body-tertiary">
  <NavbarBrandLink href="#">Navbar</NavbarBrandLink>
  <NavbarToggler
    onClick="toggle-navbar"
    ariaControls="navbarNav"
    ariaExpanded={false}
  />
  <Collapse id="navbarNav" show={false} class="navbar-collapse">
    <NavbarNav>
      <NavItem>
        <NavLink href="#" active={true}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Features</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Pricing</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled={true}>Disabled</NavLink>
      </NavItem>
    </NavbarNav>
  </Collapse>
</Navbar>`,
      },
    },
  },
}

export const WithSearchForm: Story = {
  render: () =>
    renderJaxs(
      <Navbar class="bg-body-tertiary">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </Navbar>,
    ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Navbar } from './components/navbar/navbar'

<Navbar class="bg-body-tertiary">
  <form class="d-flex" role="search">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit">
      Search
    </button>
  </form>
</Navbar>`,
      },
    },
  },
}
