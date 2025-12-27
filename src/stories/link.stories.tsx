/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { renderJaxs } from '../../.storybook/render-jaxs'
import type { LinkProps } from '../components/link/link'
import { Link } from '../components/link/link'

const meta = {
  title: 'Bootstrap/Link',
  tags: ['autodocs'],
  render: (args) => {
    const { children, ...rest } = args
    return renderJaxs(<Link {...rest}>{children}</Link>)
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Link } from './components/link/link'

<Link href="#">Default Link</Link>`,
      },
    },
  },
  argTypes: {
    href: { control: 'text' },
    class: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    href: '#',
    children: <>Default Link</>,
  },
} satisfies Meta<LinkProps>

export default meta
type Story = StoryObj<LinkProps>

export const Default: Story = {
  args: {
    href: '#',
    children: <>Default Link</>,
  },
}

export const Secondary: Story = {
  args: {
    href: '#',
    class: 'link-secondary',
    children: <>Secondary Link</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link href="#" class="link-secondary">Secondary Link</Link>`,
      },
    },
  },
}

export const Success: Story = {
  args: {
    href: '#',
    class: 'link-success',
    children: <>Success Link</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link href="#" class="link-success">Success Link</Link>`,
      },
    },
  },
}

export const Danger: Story = {
  args: {
    href: '#',
    class: 'link-danger',
    children: <>Danger Link</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link href="#" class="link-danger">Danger Link</Link>`,
      },
    },
  },
}

export const Warning: Story = {
  args: {
    href: '#',
    class: 'link-warning',
    children: <>Warning Link</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link href="#" class="link-warning">Warning Link</Link>`,
      },
    },
  },
}

export const WithOpacity: Story = {
  args: {
    href: '#',
    class: 'link-opacity-50',
    children: <>Link with 50% Opacity</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link href="#" class="link-opacity-50">Link with 50% Opacity</Link>`,
      },
    },
  },
}

export const WithUnderlineColor: Story = {
  args: {
    href: '#',
    class: 'link-underline-danger',
    children: <>Link with Danger Underline</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link href="#" class="link-underline-danger">Link with Danger Underline</Link>`,
      },
    },
  },
}

export const WithOffset: Story = {
  args: {
    href: '#',
    class: 'link-offset-3',
    children: <>Link with Offset</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link href="#" class="link-offset-3">Link with Offset</Link>`,
      },
    },
  },
}

export const ColoredWithHover: Story = {
  args: {
    href: '#',
    class:
      'link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover',
    children: <>Styled Link with Hover Effect</>,
  },
  parameters: {
    docs: {
      source: {
        code: `<Link 
  href="#" 
  class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
>
  Styled Link with Hover Effect
</Link>`,
      },
    },
  },
}
