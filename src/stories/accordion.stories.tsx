/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import type { Meta, StoryObj } from '@storybook/html'
import { Accordion, AccordionItem, type AccordionProps, type AccordionItemProps } from '../components/accordion/accordion'
import { renderJaxs } from '../../.storybook/render-jaxs'

const AccordionItemList = ({items}: {items: AccordionItemProps[]}) => {
  return (
    <>
      {items.map(({ id, title, open, children }: AccordionItemProps) => (
        <AccordionItem open={open} id={id} title={title}>
          {children}
        </AccordionItem>
      ))}
    </>
  )
}

type FullAccordionProps = AccordionProps & { items: AccordionItemProps[] }
const FullAccordion = (args: FullAccordionProps) => {
  const { items, ...accordionProps } = args
  return (
    <Accordion {...accordionProps}>
      <AccordionItemList items={items} />
    </Accordion>
  )
}

const meta = {
  title: 'Bootstrap/Accordion',
  tags: ['autodocs'],
  render: (args) => renderJaxs(FullAccordion(args)),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Accordion, AccordionItem } from './components/accordion/accordion'

<Accordion id="accordionExample">
  <AccordionItem id="item1" title="Accordion Item #1" open={true}>
    <strong>This is the first item's accordion body.</strong>
    It is shown by default, until the collapse plugin adds the appropriate
    classes that we use to style each element. These classes control the
    overall appearance, as well as the showing and hiding via CSS
    transitions. You can modify any of this with custom CSS or overriding
    our default variables. It's also worth noting that just about any HTML
    can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </AccordionItem>
  <AccordionItem id="item2" title="Accordion Item #2" open={false}>
    <strong>This is the second item's accordion body.</strong>
    It is hidden by default, until the collapse plugin adds the 
    appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via
    CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just
    about any HTML can go within the <code>.accordion-body</code>,
    though the transition does limit overflow.
  </AccordionItem>
  <AccordionItem id="item3" title="Accordion Item #3" open={false}>
    <strong>This is the third item's accordion body.</strong>
    It is hidden by default, until the collapse plugin adds the 
    appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via
    CSS transitions. You can modify any of this with custom CSS or 
    overriding our default variables. It's also worth noting that just
    about any HTML can go within the <code>.accordion-body</code>, though
    the transition does limit overflow.
  </AccordionItem>
</Accordion>
`,
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    flush: { control: 'boolean' },
    items: { control: 'object' },
  },
  args: {
    id: 'accordionExample',
    flush: false,
    items: [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        children: (<>
          <strong>This is the first item’s accordion body.</strong>
          It is shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It’s also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </>),
        open: true,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        children: (<>
          <strong>This is the second item’s accordion body.</strong>
          It is hidden by default, until the collapse plugin adds the 
          appropriate classes that we use to style each element. These classes
          control the overall appearance, as well as the showing and hiding via
          CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It’s also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </>),
        open: false,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        children: (<>
          <strong>This is the third item’s accordion body.</strong>
          It is hidden by default, until the collapse plugin adds the 
          appropriate classes that we use to style each element. These classes
          control the overall appearance, as well as the showing and hiding via
          CSS transitions. You can modify any of this with custom CSS or 
          overriding our default variables. It’s also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>, though
          the transition does limit overflow.
        </>),
        open: false,
      },
    ],
  },
} satisfies Meta<FullAccordionProps>

export default meta
type Story = StoryObj<FullAccordionProps>

export const Default: Story = {
  args: {
    id: 'accordionDefault',
    items: [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        children: (<>
          <strong>This is the first item's accordion body.</strong>
          It is shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </>),
        open: true,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        children: (<>
          <strong>This is the second item's accordion body.</strong>
          It is hidden by default, until the collapse plugin adds the 
          appropriate classes that we use to style each element. These classes
          control the overall appearance, as well as the showing and hiding via
          CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </>),
        open: false,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        children: (<>
          <strong>This is the third item's accordion body.</strong>
          It is hidden by default, until the collapse plugin adds the 
          appropriate classes that we use to style each element. These classes
          control the overall appearance, as well as the showing and hiding via
          CSS transitions. You can modify any of this with custom CSS or 
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>, though
          the transition does limit overflow.
        </>),
        open: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Accordion id="accordionDefault">
  <AccordionItem id="item1" title="Accordion Item #1" open={true}>
    <strong>This is the first item's accordion body.</strong>
    It is shown by default, until the collapse plugin adds the appropriate
    classes that we use to style each element. These classes control the
    overall appearance, as well as the showing and hiding via CSS
    transitions. You can modify any of this with custom CSS or overriding
    our default variables. It's also worth noting that just about any HTML
    can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </AccordionItem>
  <AccordionItem id="item2" title="Accordion Item #2" open={false}>
    <strong>This is the second item's accordion body.</strong>
    It is hidden by default, until the collapse plugin adds the 
    appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via
    CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just
    about any HTML can go within the <code>.accordion-body</code>,
    though the transition does limit overflow.
  </AccordionItem>
  <AccordionItem id="item3" title="Accordion Item #3" open={false}>
    <strong>This is the third item's accordion body.</strong>
    It is hidden by default, until the collapse plugin adds the 
    appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via
    CSS transitions. You can modify any of this with custom CSS or 
    overriding our default variables. It's also worth noting that just
    about any HTML can go within the <code>.accordion-body</code>, though
    the transition does limit overflow.
  </AccordionItem>
</Accordion>`,
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
        children: (<>
          <strong>This is the first item's accordion body.</strong>
          It is shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </>),
        open: true,
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        children: (<>
          <strong>This is the second item's accordion body.</strong>
          It is hidden by default, until the collapse plugin adds the 
          appropriate classes that we use to style each element. These classes
          control the overall appearance, as well as the showing and hiding via
          CSS transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </>),
        open: false,
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        children: (<>
          <strong>This is the third item's accordion body.</strong>
          It is hidden by default, until the collapse plugin adds the 
          appropriate classes that we use to style each element. These classes
          control the overall appearance, as well as the showing and hiding via
          CSS transitions. You can modify any of this with custom CSS or 
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>, though
          the transition does limit overflow.
        </>),
        open: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Accordion id="accordionFlush" flush={true}>
  <AccordionItem id="item1" title="Accordion Item #1" open={true}>
    <strong>This is the first item's accordion body.</strong>
    It is shown by default, until the collapse plugin adds the appropriate
    classes that we use to style each element. These classes control the
    overall appearance, as well as the showing and hiding via CSS
    transitions. You can modify any of this with custom CSS or overriding
    our default variables. It's also worth noting that just about any HTML
    can go within the <code>.accordion-body</code>, though the transition
    does limit overflow.
  </AccordionItem>
  <AccordionItem id="item2" title="Accordion Item #2" open={false}>
    <strong>This is the second item's accordion body.</strong>
    It is hidden by default, until the collapse plugin adds the 
    appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via
    CSS transitions. You can modify any of this with custom CSS or
    overriding our default variables. It's also worth noting that just
    about any HTML can go within the <code>.accordion-body</code>,
    though the transition does limit overflow.
  </AccordionItem>
  <AccordionItem id="item3" title="Accordion Item #3" open={false}>
    <strong>This is the third item's accordion body.</strong>
    It is hidden by default, until the collapse plugin adds the 
    appropriate classes that we use to style each element. These classes
    control the overall appearance, as well as the showing and hiding via
    CSS transitions. You can modify any of this with custom CSS or 
    overriding our default variables. It's also worth noting that just
    about any HTML can go within the <code>.accordion-body</code>, though
    the transition does limit overflow.
  </AccordionItem>
</Accordion>`,
      },
    },
  },
}
