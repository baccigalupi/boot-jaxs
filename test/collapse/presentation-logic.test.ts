import { describe, it, expect } from 'vitest'
import { collapseClasses } from '@components/collapse/presentation-logic'

describe('collapseClasses', () => {
  it('returns base collapse class when no options are provided', () => {
    const className = collapseClasses({})

    expect(className).toBe('collapse')
  })

  it('adds show class when show is true', () => {
    const className = collapseClasses({ show: true })

    expect(className).toBe('collapse show')
  })

  it('adds collapse-horizontal class when horizontal is true', () => {
    const className = collapseClasses({ horizontal: true })

    expect(className).toBe('collapse collapse-horizontal')
  })

  it('appends custom className when provided', () => {
    const className = collapseClasses({ propClasses: 'my-custom-class' })

    expect(className).toBe('collapse my-custom-class')
  })
})
