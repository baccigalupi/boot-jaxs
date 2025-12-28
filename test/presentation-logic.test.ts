import { describe, it, expect } from 'vitest'
import {
  addClassesToBase,
  booleanToString,
} from '@components/presentation-logic'

describe('presentation logic', () => {
  describe('addClassesToBase', () => {
    it('returns base classes when no new classes are provided', () => {
      const result = addClassesToBase('btn btn-primary', undefined)

      expect(result).toBe('btn btn-primary')
    })

    it('returns base classes when new classes is an empty string', () => {
      const result = addClassesToBase('btn btn-primary', '')

      expect(result).toBe('btn btn-primary')
    })

    it('combines base classes with new classes', () => {
      const result = addClassesToBase('btn btn-primary', 'btn-lg')

      expect(result).toBe('btn btn-primary btn-lg')
    })

    it('takes an array of new classes instead of just one', () => {
      const result = addClassesToBase('btn btn-primary', [
        'btn-lg',
        'my-custom-class',
      ])

      expect(result).toBe('btn btn-primary btn-lg my-custom-class')
    })

    it('handles non-string values in the array of new classes', () => {
      const result = addClassesToBase('btn btn-primary', [
        'btn-lg',
        undefined,
        'my-custom-class',
        undefined,
      ])

      expect(result).toBe('btn btn-primary btn-lg my-custom-class')
    })
  })

  describe('booleanToString', () => {
    it('returns "true" when value is true', () => {
      const result = booleanToString(true)

      expect(result).toBe('true')
    })

    it('returns "false" when value is false', () => {
      const result = booleanToString(false)

      expect(result).toBe('false')
    })
  })
})
