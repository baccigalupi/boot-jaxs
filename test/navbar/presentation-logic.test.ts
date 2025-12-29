import { describe, it, expect } from 'vitest'
import { navLinkClasses } from '@components/navbar/presentation-logic'

describe('navLinkClasses', () => {
  it('returns the base class when no options are provided', () => {
    const className = navLinkClasses({})

    expect(className).toBe('nav-link')
  })

  it('includes active class when active is true', () => {
    const className = navLinkClasses({ active: true })

    expect(className).toBe('nav-link active')
  })

  it('includes disabled class when disabled is true', () => {
    const className = navLinkClasses({ disabled: true })

    expect(className).toBe('nav-link disabled')
  })

  it('concatenates custom classes passed along', () => {
    const className = navLinkClasses({ propClasses: 'my-custom-class' })

    expect(className).toBe('nav-link my-custom-class')
  })
})
