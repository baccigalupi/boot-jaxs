/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import { Breadcrumb } from '../components/breadcrumb/breadcrumb'
import { BreadcrumbItem } from '../components/breadcrumb/breadcrumb-item'
import { Badge } from '@components/badge/badge'

const meta = {
  title: 'Bootstrap/Breadcrumb',
  tags: ['autodocs'],
  render: (args) => renderJaxs(
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Library</BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Breadcrumb } from './components/breadcrumb/breadcrumb'
import { BreadcrumbItem } from './components/breadcrumb/breadcrumb-item'

<Breadcrumb>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#library">Library</BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => renderJaxs(
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Library</BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#library">Library</BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
}

export const SingleItem: Story = {
  render: () => renderJaxs(
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb>
  <BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
}

export const CustomChildren: Story = {
  render: () => renderJaxs(
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#library" active><Badge label='Library'/></BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb>
  <BreadcrumbItem href="#">Home</BreadcrumbItem>
  <BreadcrumbItem href="#library" active><Badge label='Library'/></BreadcrumbItem>
</Breadcrumb>`,
      },
    },
  },
}
