import { describe, it, expect } from 'vitest'
import { addClassesToBase } from '@components/presentation-logic'

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
})
