import { describe, it, expect } from 'vitest'
import { alertClassName, hideAlert } from '@components/alert/presentation-logic'

describe('alert presentation logic', () => {
  describe('alertClassName', () => {
    it('returns base alert classes with type when dismissible is false', () => {
      const className = alertClassName('primary', false)

      expect(className).toBe('alert alert-primary')
    })

    it('returns alert classes with dismissible classes when dismissible is true', () => {
      const className = alertClassName('danger', true)

      expect(className).toBe('alert alert-danger alert-dismissible fade show')
    })
  })

  describe('hideAlert', () => {
    it('is true when the alert is dismissible and not in the alerts list', () => {
      const result = hideAlert(['alert-1'], 'alert-2', true)

      expect(result).toBe(true)
    })

    it('is false when the alert is not dismissible', () => {
      const result = hideAlert(['alert-1'], 'alert-2', false)

      expect(result).toBe(false)
    })

    it('is false when the alert is in the alerts list', () => {
      const result = hideAlert(['alert-1'], 'alert-1', true)

      expect(result).toBe(false)
    })
  })
})
