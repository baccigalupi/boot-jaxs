/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { Nav } from '../components/tabs/nav'
import { NavItem } from '../components/navbar/nav-item'
import { NavLink } from '../components/tabs/nav-link'
import { TabContent } from '../components/tabs/tab-content'
import { TabPane } from '../components/tabs/tab-pane'
import { renderJaxs } from '../../.storybook/render-jaxs'

const BasicTabs = () => {
  return (
    <>
      <Nav tabs={true}>
        <NavItem>
          <NavLink href="#home" active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#disabled" disabled={true}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane id="home" active={true}>
          <p class="mt-3">
            <strong>Home tab content.</strong> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </TabPane>
        <TabPane id="profile">
          <p class="mt-3">
            <strong>Profile tab content.</strong> Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </TabPane>
        <TabPane id="contact">
          <p class="mt-3">
            <strong>Contact tab content.</strong> Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
          </p>
        </TabPane>
      </TabContent>
    </>
  )
}

const PillsTabs = () => {
  return (
    <>
      <Nav pills={true}>
        <NavItem>
          <NavLink href="#pills-home" active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#pills-profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#pills-contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#pills-disabled" disabled={true}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane id="pills-home" active={true}>
          <p class="mt-3">
            <strong>Home pills content.</strong> This is some placeholder
            content the home tab's associated content. Clicking another tab will
            toggle the visibility of this one for the next. The tab JavaScript
            swaps classes to control the content visibility and styling.
          </p>
        </TabPane>
        <TabPane id="pills-profile">
          <p class="mt-3">
            <strong>Profile pills content.</strong> This is some placeholder
            content the profile tab's associated content. Clicking another tab
            will toggle the visibility of this one for the next.
          </p>
        </TabPane>
        <TabPane id="pills-contact">
          <p class="mt-3">
            <strong>Contact pills content.</strong> This is some placeholder
            content the contact tab's associated content. Clicking another tab
            will toggle the visibility of this one for the next.
          </p>
        </TabPane>
      </TabContent>
    </>
  )
}

const UnderlineTabs = () => {
  return (
    <>
      <Nav underline={true}>
        <NavItem>
          <NavLink href="#underline-home" active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#underline-profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#underline-contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#underline-disabled" disabled={true}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane id="underline-home" active={true}>
          <p class="mt-3">
            <strong>Home underline content.</strong> This is some placeholder
            content the home tab's associated content with underline style.
          </p>
        </TabPane>
        <TabPane id="underline-profile">
          <p class="mt-3">
            <strong>Profile underline content.</strong> This is some placeholder
            content the profile tab's associated content with underline style.
          </p>
        </TabPane>
        <TabPane id="underline-contact">
          <p class="mt-3">
            <strong>Contact underline content.</strong> This is some placeholder
            content the contact tab's associated content with underline style.
          </p>
        </TabPane>
      </TabContent>
    </>
  )
}

const VerticalTabs = () => {
  return (
    <div class="d-flex align-items-start">
      <Nav pills={true} vertical={true} style="margin-right: 1rem;">
        <NavItem>
          <NavLink href="#v-pills-home" active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#v-pills-profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#v-pills-messages">Messages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#v-pills-settings">Settings</NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane id="v-pills-home" active={true}>
          <strong>Home vertical content.</strong> This is some placeholder
          content the home tab's associated content. Clicking another tab will
          toggle the visibility of this one for the next.
        </TabPane>
        <TabPane id="v-pills-profile">
          <strong>Profile vertical content.</strong> This is some placeholder
          content the profile tab's associated content.
        </TabPane>
        <TabPane id="v-pills-messages">
          <strong>Messages vertical content.</strong> This is some placeholder
          content the messages tab's associated content.
        </TabPane>
        <TabPane id="v-pills-settings">
          <strong>Settings vertical content.</strong> This is some placeholder
          content the settings tab's associated content.
        </TabPane>
      </TabContent>
    </div>
  )
}

const FillJustifiedTabs = () => {
  return (
    <>
      <Nav tabs={true} fill={true}>
        <NavItem>
          <NavLink href="#fill-home" active={true}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#fill-longer">Much longer nav link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#fill-link">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#fill-disabled" disabled={true}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane id="fill-home" active={true}>
          <p class="mt-3">
            <strong>Fill tabs content.</strong> Equal width tabs that fill the
            entire available space.
          </p>
        </TabPane>
        <TabPane id="fill-longer">
          <p class="mt-3">
            <strong>Longer tab content.</strong> This tab has a longer name but
            still maintains equal width.
          </p>
        </TabPane>
        <TabPane id="fill-link">
          <p class="mt-3">
            <strong>Link content.</strong> Simple link tab content.
          </p>
        </TabPane>
      </TabContent>
    </>
  )
}

const meta: Meta = {
  title: 'Bootstrap/Tabs',
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

export const Tabs: Story = {
  render: () => renderJaxs(BasicTabs()),
  parameters: {
    docs: {
      source: {
        code: `import { Nav, NavItem, NavLink, TabContent, TabPane } from './components/tabs'

<Nav tabs={true}>
  <NavItem>
    <NavLink href="#home" active={true}>Home</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#profile">Profile</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#contact">Contact</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#disabled" disabled={true}>Disabled</NavLink>
  </NavItem>
</Nav>
<TabContent>
  <TabPane id="home" active={true}>
    Home tab content...
  </TabPane>
  <TabPane id="profile">
    Profile tab content...
  </TabPane>
  <TabPane id="contact">
    Contact tab content...
  </TabPane>
</TabContent>`,
      },
    },
  },
}

export const Pills: Story = {
  render: () => renderJaxs(PillsTabs()),
  parameters: {
    docs: {
      source: {
        code: `import { Nav, NavItem, NavLink, TabContent, TabPane } from './components/tabs'

<Nav pills={true}>
  <NavItem>
    <NavLink href="#pills-home" active={true}>Home</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#pills-profile">Profile</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#pills-contact">Contact</NavLink>
  </NavItem>
</Nav>
<TabContent>
  <TabPane id="pills-home" active={true}>
    Pills home content...
  </TabPane>
  <TabPane id="pills-profile">
    Pills profile content...
  </TabPane>
  <TabPane id="pills-contact">
    Pills contact content...
  </TabPane>
</TabContent>`,
      },
    },
  },
}

export const Underline: Story = {
  render: () => renderJaxs(UnderlineTabs()),
  parameters: {
    docs: {
      source: {
        code: `import { Nav, NavItem, NavLink, TabContent, TabPane } from './components/tabs'

<Nav underline={true}>
  <NavItem>
    <NavLink href="#underline-home" active={true}>Home</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#underline-profile">Profile</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#underline-contact">Contact</NavLink>
  </NavItem>
</Nav>
<TabContent>
  <TabPane id="underline-home" active={true}>
    Underline home content...
  </TabPane>
  <TabPane id="underline-profile">
    Underline profile content...
  </TabPane>
  <TabPane id="underline-contact">
    Underline contact content...
  </TabPane>
</TabContent>`,
      },
    },
  },
}

export const Vertical: Story = {
  render: () => renderJaxs(VerticalTabs()),
  parameters: {
    docs: {
      source: {
        code: `import { Nav, NavItem, NavLink, TabContent, TabPane } from './components/tabs'

<div class="d-flex align-items-start">
  <Nav pills={true} vertical={true}>
    <NavItem>
      <NavLink href="#v-pills-home" active={true}>Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#v-pills-profile">Profile</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#v-pills-messages">Messages</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#v-pills-settings">Settings</NavLink>
    </NavItem>
  </Nav>
  <TabContent>
    <TabPane id="v-pills-home" active={true}>
      Home vertical content...
    </TabPane>
    <TabPane id="v-pills-profile">
      Profile vertical content...
    </TabPane>
    <TabPane id="v-pills-messages">
      Messages vertical content...
    </TabPane>
    <TabPane id="v-pills-settings">
      Settings vertical content...
    </TabPane>
  </TabContent>
</div>`,
      },
    },
  },
}

export const Fill: Story = {
  render: () => renderJaxs(FillJustifiedTabs()),
  parameters: {
    docs: {
      source: {
        code: `import { Nav, NavItem, NavLink, TabContent, TabPane } from './components/tabs'

<Nav tabs={true} fill={true}>
  <NavItem>
    <NavLink href="#fill-home" active={true}>Home</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#fill-longer">Much longer nav link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#fill-link">Link</NavLink>
  </NavItem>
</Nav>
<TabContent>
  <TabPane id="fill-home" active={true}>
    Fill tabs content...
  </TabPane>
  <TabPane id="fill-longer">
    Longer tab content...
  </TabPane>
  <TabPane id="fill-link">
    Link content...
  </TabPane>
</TabContent>`,
      },
    },
  },
}
