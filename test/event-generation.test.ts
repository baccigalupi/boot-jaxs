import { describe, it, expect } from 'vitest'
import { createEventName } from '@components/event-generation'

describe('createEventName', () => {
  it('creates event name without id', () => {
    const result = createEventName('modal', 'show')

    expect(result).toBe('boot-jaxs:modal:show')
  })

  it('creates event name with id', () => {
    const result = createEventName('accordion', 'toggle', 'item-1')

    expect(result).toBe('boot-jaxs:accordion:toggle:item-1')
  })
})
