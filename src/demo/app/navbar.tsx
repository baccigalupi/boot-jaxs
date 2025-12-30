/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'

import { Badge } from '@components/badge/badge'
import { Navbar } from '@components/navbar/navbar'
import { Collapse } from '@components/collapse/collapse'
import { NavItem } from '@components/navbar/nav-item'
import { NavLink } from '@components/navbar/nav-link'
import { NavbarBrandLink } from '@components/navbar/navbar-brand'
import { NavbarNav } from '@components/navbar/navbar-nav'
import { NavbarToggler } from '@components/navbar/navbar-toggler'
import { Dropdown, DropdownButton } from '@components/dropdown/dropdown'

export const PageNavbar = () => {
  return (
    <Navbar class="navbar-expand-lg bg-body-tertiary">
      <NavbarBrandLink href="/">
        Boot-Jaxs <Badge variant="secondary" label="v0.1.0" />
      </NavbarBrandLink>
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
        <NavbarNav class="flex-row flex-wrap ms-md-auto">
          <NavItem>
            <Dropdown id="user-settings">
              <DropdownButton
                dropdownId="user-settings"
                variant="none"
                class="nav-link"
              >
                User Settings
              </DropdownButton>
            </Dropdown>
          </NavItem>
        </NavbarNav>
      </Collapse>
    </Navbar>
  )
}
