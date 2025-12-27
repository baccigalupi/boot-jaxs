import { describe, it, expect } from 'vitest'
import { closeButtonClasses } from '@components/close-button/presentation-logic'

describe('closeButtonClasses', () => {
  it('returns base class when no options are provided', () => {
    const className = closeButtonClasses({})

    expect(className).toBe('btn-close')
  })

  it('adds btn-close-white class when white is true', () => {
    const className = closeButtonClasses({ white: true })

    expect(className).toBe('btn-close btn-close-white')
  })

  it('appends custom className when provided', () => {
    const className = closeButtonClasses({ propClasses: 'my-custom-class' })

    expect(className).toBe('btn-close my-custom-class')
  })
})
