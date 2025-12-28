import { describe, it, expect } from 'vitest'
import {
  dropdownToggleClasses,
  dropdownItemClasses,
} from '@components/dropdown/presentation-logic'

describe('dropdown presentation logic', () => {
  describe('dropdownToggleClasses', () => {
    it('returns base button classes with dropdown-toggle when no options provided', () => {
      const className = dropdownToggleClasses({})

      expect(className).toBe('btn btn-primary dropdown-toggle')
    })

    it('uses the specified variant', () => {
      const className = dropdownToggleClasses({ variant: 'success' })

      expect(className).toBe('btn btn-success dropdown-toggle')
    })

    it('adds size class when size is provided', () => {
      const className = dropdownToggleClasses({ size: 'lg' })

      expect(className).toBe('btn btn-primary btn-lg dropdown-toggle')
    })

    it('adds dropdown-toggle-split class when split is true', () => {
      const className = dropdownToggleClasses({ split: true })

      expect(className).toBe('btn btn-primary dropdown-toggle-split')
    })

    it('appends custom className when provided', () => {
      const className = dropdownToggleClasses({
        propClasses: 'my-custom-class',
      })

      expect(className).toBe('btn btn-primary dropdown-toggle my-custom-class')
    })
  })

  describe('dropdownItemClasses', () => {
    it('returns base dropdown-item class when no options provided', () => {
      const className = dropdownItemClasses({})

      expect(className).toBe('dropdown-item')
    })

    it('adds active class when active is true', () => {
      const className = dropdownItemClasses({ active: true })

      expect(className).toBe('dropdown-item active')
    })

    it('does not add active class when active is false', () => {
      const className = dropdownItemClasses({ active: false })

      expect(className).toBe('dropdown-item')
    })

    it('adds disabled class when disabled is true', () => {
      const className = dropdownItemClasses({ disabled: true })

      expect(className).toBe('dropdown-item disabled')
    })

    it('appends custom className when provided', () => {
      const className = dropdownItemClasses({ propClasses: 'my-custom-class' })

      expect(className).toBe('dropdown-item my-custom-class')
    })
  })
})
