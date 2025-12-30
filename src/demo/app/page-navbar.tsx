/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'

import { Badge } from '@components/badge/badge'
import { Navbar } from '@components/navbar/navbar'
import { NavItem } from '@components/navbar/nav-item'
import { NavLink } from '@components/navbar/nav-link'
import { NavbarBrandLink } from '@components/navbar/navbar-brand'
import { NavbarNav } from '@components/navbar/navbar-nav'
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@components/dropdown/dropdown'

export const PageNavbar = () => {
  return (
    <Navbar class="navbar-expand-lg bg-body-tertiary">
      <NavbarBrandLink href="/">
        Boot-Jaxs <Badge variant="secondary" label="v0.1.0" />
      </NavbarBrandLink>
      <NavbarNav>
        <NavItem>
          <NavLink href="/" active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/features">Features</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/pricing">Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/disabled" disabled={true}>
            Disabled
          </NavLink>
        </NavItem>
      </NavbarNav>

      <NavbarNav class="flex-row flex-wrap ms-md-auto">
        <NavItem>
          <Dropdown id="user-settings">
            <DropdownButton
              dropdownId="user-settings"
              variant="none"
              class="nav-link bg-secondary-subtle"
            >
              User Settings
            </DropdownButton>
            <DropdownMenu dropdownId="user-settings">
              <DropdownItem>
                <NavLink href="/logout">Logout</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </NavbarNav>
    </Navbar>
  )
}
