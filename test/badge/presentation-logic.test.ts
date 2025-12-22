import { describe, it, expect } from 'vitest'
import { badgeClass } from '@components/badge/presentation-logic'

describe('badgeClass', () => {
  it('when there is no pill-styling and no variant, it defaults to default', () => {
    const className = badgeClass({})

    expect(className).toBe('badge bg-primary')
  })

  it('when there is no pill-styling but the variant is passed in, it uses that styling', () => {
    const className = badgeClass({variant: 'success'})

    expect(className).toBe('badge bg-success')
  })

  it('when there is pill-styling, it adds that to the styling too', () => {
    const className = badgeClass({variant: 'danger', pill: true})
    
    expect(className).toBe('badge bg-danger rounded-pill')
  })

  it('concatenates other classes passed along', () => {
    const className = badgeClass({variant: 'info', pill: true, propClass: 'my-custom-class'})

    expect(className).toBe('badge bg-info rounded-pill my-custom-class')
  })
})