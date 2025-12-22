import { describe, it, expect } from 'vitest'
import { itemToggleInfo } from '@components/accordion/item-toggle-info'

describe('itemToggleInfo', () => {
  describe('ariaExpanded', () => {
    it('returns "true" when open is true', () => {
      const info = itemToggleInfo(true)
      expect(info.ariaExpanded()).toBe('true')
    })

    it('returns "false" when open is false', () => {
      const info = itemToggleInfo(false)
      expect(info.ariaExpanded()).toBe('false')
    })
  })

  describe('visibilityClass', () => {
    it('returns "show" when open is true', () => {
      const info = itemToggleInfo(true)
      expect(info.visibilityClass()).toBe('show')
    })

    it('returns empty string when open is false', () => {
      const info = itemToggleInfo(false)
      expect(info.visibilityClass()).toBe('')
    })
  })

  describe('accordionCollapseClass', () => {
    it('returns collapse classes with show when open is true', () => {
      const info = itemToggleInfo(true)
      expect(info.accordionCollapseClass()).toBe(
        'accordion-collapse collapse show',
      )
    })

    it('returns collapse classes without show when open is false', () => {
      const info = itemToggleInfo(false)
      expect(info.accordionCollapseClass()).toBe('accordion-collapse collapse')
    })
  })

  describe('accordionButtonClass', () => {
    it('returns button class without collapsed when open is true', () => {
      const info = itemToggleInfo(true)
      expect(info.accordionButtonClass()).toBe('accordion-button')
    })

    it('returns button class with collapsed when open is false', () => {
      const info = itemToggleInfo(false)
      expect(info.accordionButtonClass()).toBe('accordion-button collapsed')
    })
  })
})
