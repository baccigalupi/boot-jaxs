import { describe, it, expect } from 'vitest'
import { badgeClass } from '@components/badge/presentation-logic'

describe('badgeClass', () => {
  it('when there is no pill-styling and no variant, it defaults to default', () => {
    const className = badgeClass()

    expect(className).toBe('badge bg-primary')
  })

  it('when there is no pill-styling but the variant is passed in, it uses that styling', () => {
    const className = badgeClass('success')

    expect(className).toBe('badge bg-success')
  })

  it('when there is pill-styling, it adds that to the styling too', () => {
    const className = badgeClass('danger', true)
    
    expect(className).toBe('badge bg-danger rounded-pill')
  })
})