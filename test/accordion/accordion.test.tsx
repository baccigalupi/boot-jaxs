import { /** @jsx jsx */ jsx } from 'jaxs'
import { describe, it, expect } from 'vitest'
import { Accordion, AccordionItem } from '@components/accordion/accordion'
import { registerAccordions } from '@components/accordion/interactions'
import {
  buildAppForRendering,
  renderWithApp,
  renderWithRegistrations,
} from '../support/render-to-string'

describe('Accordion', () => {
  it('renders a flush accordion with items using the right classes', () => {
    const MyAccordion = () => (
      <Accordion flush={true} id="accordion-1" class="gerbils">
        <AccordionItem id="item-1" accordionId="accordion-1" title="Item 1">
          Content for item 1
        </AccordionItem>
        <AccordionItem id="item-2" accordionId="accordion-1" title="Item 2">
          Content for item 2
        </AccordionItem>
      </Accordion>
    )

    const output = renderWithRegistrations(<MyAccordion />, [
      registerAccordions,
    ])

    expect(output).toContain('class="accordion accordion-flush gerbils"')
  })

  it('renders as open the item in state', () => {
    const app = buildAppForRendering([registerAccordions])
    app.publish('boot-jaxs:accordion:toggle:accordion-1:item-2', null)

    const MyAccordion = () => (
      <Accordion flush={true} id="accordion-1" class="gerbils">
        <AccordionItem id="item-1" accordionId="accordion-1" title="Item 1">
          Content for item 1
        </AccordionItem>
        <AccordionItem id="item-2" accordionId="accordion-1" title="Item 2">
          Content for item 2
        </AccordionItem>
      </Accordion>
    )

    const output = renderWithApp(<MyAccordion />, app)

    expect(output).toContain(
      '<div id="item-2" class="accordion-collapse collapse show">',
    )
  })
})
