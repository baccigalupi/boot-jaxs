import { describe, it, expect } from 'vitest'
import {
  accordionClass,
  accordionItemId,
  idsFromString,
  itemIsOpen,
} from '@components/accordion/presentation-logic'

describe('presentation logic for accordion', () => {
  describe('accordionClass', () => {
    it('returns base accordion class when flush is undefined', () => {
      const className = accordionClass({})

      expect(className).toBe('accordion')
    })

    it('returns base accordion class when flush is false', () => {
      const className = accordionClass({ flush: false })

      expect(className).toBe('accordion')
    })

    it('adds accordion-flush class when flush is true', () => {
      const className = accordionClass({ flush: true })

      expect(className).toBe('accordion accordion-flush')
    })
  })

  it('accordionItemId builds string that idsFromString can unpackage', () => {
    const accordionId = 'my-accordion'
    const itemId = 'item-123'

    const idString = accordionItemId(accordionId, itemId)
    const result = idsFromString(idString)

    expect(idString).toBe('my-accordion:item-123')
    expect(result).toEqual({ accordionId, itemId })
  })

  describe('itemIsOpen', () => {
    it('is false when the accordions state does not include the accordion id', () => {
      const accordions = {}

      const result = itemIsOpen({
        accordions,
        accordionId: 'accordion-1',
        id: 'item-1',
      })

      expect(result).toBe(false)
    })

    it('is true when the accordions state include the accordion and the item id', () => {
      const accordions = {
        'accordion-1': ['item-1', 'item-2'],
      }

      const result = itemIsOpen({
        accordions,
        accordionId: 'accordion-1',
        id: 'item-1',
      })

      expect(result).toBe(true)
    })

    it('is false when the accordions state includes the accordion but not the item id', () => {
      const accordions = {
        'accordion-1': ['item-2', 'item-3'],
      }

      const result = itemIsOpen({
        accordions,
        accordionId: 'accordion-1',
        id: 'item-1',
      })

      expect(result).toBe(false)
    })
  })
})
