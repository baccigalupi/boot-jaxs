import type { Meta, StoryObj } from '@storybook/html'
import type { AccordionProps } from '../components/accordion/accordion'
import { Accordion } from '../components/accordion/accordion'
import { renderJaxs } from '../../.storybook/render-jaxs'

const meta = {
  title: 'Bootstrap/Accordion',
  tags: ['autodocs'],
  render: (args) => renderJaxs(Accordion(args)),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Accordion } from './components/accordion/accordion'

<Accordion 
  id="accordionExample"
  items={[
    {
      id: 'item1',
      title: 'Accordion Item #1',
      content: 'This is the first item content',
      expanded: true
    },
    {
      id: 'item2',
      title: 'Accordion Item #2',
      content: 'This is the second item content'
    }
  ]}
  alwaysOpen={false}
  flush={false}
/>`,
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    alwaysOpen: { control: 'boolean' },
    flush: { control: 'boolean' },
    items: { control: 'object' },
  },
  args: {
    id: 'accordionExample',
    alwaysOpen: false,
    flush: false,
    items: [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        content:
          "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
        expanded: true,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        content:
          "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
        expanded: false,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        content:
          "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
        expanded: false,
      },
    ],
  },
} satisfies Meta<AccordionProps>

export default meta
type Story = StoryObj<AccordionProps>

export const Default: Story = {
  args: {
    id: 'accordionDefault',
    items: [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        content:
          "This is the first item's accordion body. It is shown by default.",
        expanded: true,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        content: "This is the second item's accordion body.",
        expanded: false,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        content: "This is the third item's accordion body.",
        expanded: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Accordion 
  id="accordionDefault"
  items={[
    { id: 'item1', title: 'Accordion Item #1', content: '...', expanded: true },
    { id: 'item2', title: 'Accordion Item #2', content: '...' },
    { id: 'item3', title: 'Accordion Item #3', content: '...' }
  ]}
/>`,
      },
    },
  },
}

export const AlwaysOpen: Story = {
  args: {
    id: 'accordionAlwaysOpen',
    alwaysOpen: true,
    items: [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        content:
          "This is the first item's accordion body. Multiple items can be open at once.",
        expanded: true,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        content:
          "This is the second item's accordion body. Multiple items can be open at once.",
        expanded: true,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        content: "This is the third item's accordion body.",
        expanded: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Accordion 
  id="accordionAlwaysOpen"
  alwaysOpen={true}
  items={[
    { id: 'item1', title: 'Accordion Item #1', content: '...', expanded: true },
    { id: 'item2', title: 'Accordion Item #2', content: '...', expanded: true },
    { id: 'item3', title: 'Accordion Item #3', content: '...' }
  ]}
/>`,
      },
    },
  },
}

export const Flush: Story = {
  args: {
    id: 'accordionFlush',
    flush: true,
    items: [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        content: "This is the first item's accordion body with flush styling.",
        expanded: true,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        content: "This is the second item's accordion body with flush styling.",
        expanded: false,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        content: "This is the third item's accordion body with flush styling.",
        expanded: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Accordion 
  id="accordionFlush"
  flush={true}
  items={[
    { id: 'item1', title: 'Accordion Item #1', content: '...', expanded: true },
    { id: 'item2', title: 'Accordion Item #2', content: '...' },
    { id: 'item3', title: 'Accordion Item #3', content: '...' }
  ]}
/>`,
      },
    },
  },
}

export const AllClosed: Story = {
  args: {
    id: 'accordionAllClosed',
    items: [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        content: "This is the first item's accordion body.",
        expanded: false,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        content: "This is the second item's accordion body.",
        expanded: false,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        content: "This is the third item's accordion body.",
        expanded: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Accordion 
  id="accordionAllClosed"
  items={[
    { id: 'item1', title: 'Accordion Item #1', content: '...', expanded: false },
    { id: 'item2', title: 'Accordion Item #2', content: '...', expanded: false },
    { id: 'item3', title: 'Accordion Item #3', content: '...', expanded: false }
  ]}
/>`,
      },
    },
  },
}
