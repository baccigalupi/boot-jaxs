import { describe, it, expect } from 'vitest'
import { popoverClass } from '@components/popover/presentation-logic'

describe('popover presentation logic', () => {
  describe('popoverClass', () => {
    it('returns base class when no options provided', () => {
      expect(popoverClass({})).toBe('popover')
    })

    it('adds show class when show is true', () => {
      expect(popoverClass({ show: true })).toBe('popover show')
    })

    it('appends custom classes', () => {
      expect(popoverClass({ propClasses: 'custom-class' })).toBe(
        'popover custom-class',
      )
    })
  })
})
