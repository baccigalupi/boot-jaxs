import { describe, it, expect } from 'vitest'
import {
  labelId,
  offcanvasClassName,
} from '@components/offcanvas/presentation-logic'

describe('offcanvas presentation logic', () => {
  it('labelId appends -label suffix to the provided id', () => {
    expect(labelId('my-offcanvas')).toBe('my-offcanvas-label')
  })

  describe('offcanvasClassName', () => {
    it('returns base offcanvas class with default placement and not shown', () => {
      expect(offcanvasClassName({})).toBe('offcanvas offcanvas-start')
    })

    it('includes show class when show is true', () => {
      expect(offcanvasClassName({ show: true })).toBe(
        'offcanvas offcanvas-start show',
      )
    })

    it('applies different placement classes', () => {
      expect(offcanvasClassName({ placement: 'end' })).toBe(
        'offcanvas offcanvas-end',
      )
      expect(offcanvasClassName({ placement: 'top' })).toBe(
        'offcanvas offcanvas-top',
      )
      expect(offcanvasClassName({ placement: 'bottom' })).toBe(
        'offcanvas offcanvas-bottom',
      )
    })
  })
})
