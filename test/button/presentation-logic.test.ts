import { describe, it, expect } from 'vitest'
import { buttonClass } from '@components/button/presentation-logic'

describe('buttonClass', () => {
  it('when there are no options, it defaults to primary variant', () => {
    const className = buttonClass({})

    expect(className).toBe('btn btn-primary')
  })

  it('when a variant is passed in, it uses that styling', () => {
    const className = buttonClass({ variant: 'success' })

    expect(className).toBe('btn btn-success')
  })

  it('when outline is true, it uses outline styling', () => {
    const className = buttonClass({ variant: 'danger', outline: true })

    expect(className).toBe('btn btn-outline-danger')
  })

  it('when the variant is "none" it does not create a variant class', () => {
    const className = buttonClass({ variant: 'none' })

    expect(className).toBe('btn')
  })

  it('when the variant is "none" and outline is true, it doesn\'t create an outline class', () => {
    const className = buttonClass({ variant: 'none', outline: true })

    expect(className).toBe('btn')
  })

  it('when a size is passed in, it uses it', () => {
    const className = buttonClass({
      variant: 'primary',
      outline: false,
      size: 'sm',
    })

    expect(className).toBe('btn btn-primary btn-sm')
  })

  it('concatenates other classes passed along', () => {
    const className = buttonClass({
      variant: 'primary',
      outline: false,
      size: 'lg',
      propClass: 'my-custom-class',
    })

    expect(className).toBe('btn btn-primary btn-lg my-custom-class')
  })
})
