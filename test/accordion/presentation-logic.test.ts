import { describe, it, expect } from 'vitest'
import { accordionClass } from '@components/accordion/presentation-logic'

describe('accordionClass', () => {
  it('returns base accordion class when flush is undefined', () => {
    const className = accordionClass({})

    expect(className).toBe('accordion')
  })

  it('returns base accordion class when flush is false', () => {
    const className = accordionClass({ flush: false })

    expect(className).toBe('accordion')
  })

  it('adds accordion-flush class when flush is true', () => {
    const className = accordionClass({ flush: true })

    expect(className).toBe('accordion accordion-flush')
  })
})
