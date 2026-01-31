import { describe, it, expect } from 'vitest'
import { viewModel } from '@components/accordion/view-model'
import {
  type AccordionState,
  storeName,
} from '@components/accordion/interactions'

describe('accordion view model', () => {
  it('when the accordion store is completely empty, sets the attributes to not-open', () => {
    const subscriptions = {
      [storeName]: {} as AccordionState,
    }
    const boundProps = {
      id: 'item-1',
      accordionId: 'accordion-1',
      title: 'Title 1',
    }

    const { ariaExpanded, bodyClass, triggerClass } = viewModel(
      subscriptions,
      boundProps,
    )

    expect(ariaExpanded).toBe('false')
    expect(bodyClass).toBe('accordion-collapse collapse')
    expect(triggerClass).toBe('accordion-button collapsed')
  })

  it('when the accordion store has a collection for the accordion id, but not the item, sets the attributes to not-open', () => {
    const subscriptions = {
      [storeName]: { 'accordion-1': [] } as AccordionState,
    }
    const boundProps = {
      id: 'item-1',
      accordionId: 'accordion-1',
      title: 'Title 1',
    }

    const { ariaExpanded, bodyClass, triggerClass } = viewModel(
      subscriptions,
      boundProps,
    )

    expect(ariaExpanded).toBe('false')
    expect(bodyClass).toBe('accordion-collapse collapse')
    expect(triggerClass).toBe('accordion-button collapsed')
  })

  it('when the accordion store has the accordion id and in it the item id, sets the attributes to open', () => {
    const subscriptions = {
      [storeName]: { 'accordion-1': ['item-1', 'item-3'] } as AccordionState,
    }
    const boundProps = {
      id: 'item-1',
      accordionId: 'accordion-1',
      title: 'Title 1',
    }

    const { ariaExpanded, bodyClass, triggerClass } = viewModel(
      subscriptions,
      boundProps,
    )

    expect(ariaExpanded).toBe('true')
    expect(bodyClass).toBe('accordion-collapse collapse show')
    expect(triggerClass).toBe('accordion-button')
  })

  it('onClick is set with the correct accordion and item ids', () => {
    const subscriptions = {
      [storeName]: {} as AccordionState,
    }
    const boundProps = {
      id: 'item-1',
      accordionId: 'accordion-1',
      title: 'Title 1',
    }

    const { onClick } = viewModel(subscriptions, boundProps)

    expect(onClick).toBe('boot-jaxs:accordion:toggle:accordion-1:item-1')
  })
})
