import { describe, it, expect } from 'vitest'
import {
  caroselClasses,
  caroselItemClasses,
} from '@components/carousel/presentation-logic'

describe('carousel presentation logic', () => {
  describe('caroselClasses', () => {
    it('returns base classes when no options are provided', () => {
      const className = caroselClasses({})

      expect(className).toBe('carousel slide')
    })

    it('adds carousel-fade class when fade is true', () => {
      const className = caroselClasses({ fade: true })

      expect(className).toBe('carousel slide carousel-fade')
    })

    it('adds carousel-dark class when dark is true', () => {
      const className = caroselClasses({ dark: true })

      expect(className).toBe('carousel slide carousel-dark')
    })

    it('appends custom className when provided', () => {
      const className = caroselClasses({ propClasses: 'my-custom-class' })

      expect(className).toBe('carousel slide my-custom-class')
    })

    it('handles undefined className', () => {
      const className = caroselClasses({ fade: true, propClasses: undefined })

      expect(className).toBe('carousel slide carousel-fade')
    })
  })

  describe('caroselItemClasses', () => {
    it('returns base class when not active and no custom class', () => {
      const className = caroselItemClasses({ active: false })

      expect(className).toBe('carousel-item')
    })

    it('adds active related class when active argument is true', () => {
      const className = caroselItemClasses({ active: true })

      expect(className).toBe('carousel-item active')
    })

    it('appends class names from props when provided', () => {
      const className = caroselItemClasses({ active: false, propClasses: 'my-item-class' })

      expect(className).toBe('carousel-item my-item-class')
    })
  })
})
