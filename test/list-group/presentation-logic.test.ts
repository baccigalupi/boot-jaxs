import { describe, it, expect } from 'vitest'
import {
  horizontalListGroupClasses,
  listGroupClasses,
  listGroupItemInfo,
} from '@components/list-group/presentation-logic'

describe('list-group presentation logic', () => {
  describe('horizontalListGroupClasses', () => {
    it('returns empty when horizontal is false', () => {
      expect(horizontalListGroupClasses(false)).toBe('')
    })

    it('when horizontal is true returns the base class', () => {
      expect(horizontalListGroupClasses(true)).toBe('list-group-horizontal')
    })

    it('when horizontal is a breakpoint returns the correct class', () => {
      expect(horizontalListGroupClasses('md')).toBe('list-group-horizontal-md')
    })

    it('when horizontal is an array of breakpoints returns the correct classes', () => {
      expect(horizontalListGroupClasses(['sm', 'lg'])).toBe(
        'list-group-horizontal-sm list-group-horizontal-lg',
      )
    })
  })

  describe('listGroupClasses', () => {
    it('returns base class when no customizations happen', () => {
      expect(listGroupClasses({})).toBe('list-group')
    })

    it('returns horizontal class when horizontal is true', () => {
      expect(listGroupClasses({ horizontal: true })).toBe(
        'list-group list-group-horizontal',
      )
    })

    it('returns numbered class when numbered is true', () => {
      expect(listGroupClasses({ numbered: true })).toBe(
        'list-group list-group-numbered',
      )
    })

    it('returns flush class when flush is true', () => {
      expect(listGroupClasses({ flush: true })).toBe(
        'list-group list-group-flush',
      )
    })
  })

  describe('listGroupItemInfo', () => {
    describe('ariaCurrent', () => {
      it('returns "true" when active is true', () => {
        const info = listGroupItemInfo({ active: true })
        expect(info.ariaCurrent()).toBe('true')
      })

      it('returns "false" when active is false', () => {
        const info = listGroupItemInfo({ active: false })
        expect(info.ariaCurrent()).toEqual('false')
      })
    })

    describe('activeClass', () => {
      it('returns "active" when active is true', () => {
        const info = listGroupItemInfo({ active: true })
        expect(info.activeClass()).toBe('active')
      })

      it('returns empty string when active is false', () => {
        const info = listGroupItemInfo({ active: false })
        expect(info.activeClass()).toBe('')
      })
    })

    describe('classes', () => {
      it('returns base class when active is false and no propClass', () => {
        const info = listGroupItemInfo({ active: false })
        expect(info.classes()).toBe('list-group-item')
      })

      it('returns base class with active when active is true', () => {
        const info = listGroupItemInfo({ active: true })
        expect(info.classes()).toBe('list-group-item active')
      })

      it('returns base class with propClass when provided', () => {
        const info = listGroupItemInfo({
          active: false,
          propClass: 'custom-class',
        })
        expect(info.classes()).toBe('list-group-item custom-class')
      })

      it('returns base class with variant when provided', () => {
        const info = listGroupItemInfo({ active: false, variant: 'primary' })
        expect(info.classes()).toBe('list-group-item list-group-item-primary')
      })
    })
  })
})
