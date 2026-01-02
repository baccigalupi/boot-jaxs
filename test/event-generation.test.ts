import { describe, it, expect } from 'vitest'
import {
  generateEvent,
  eventGeneratorFor,
  generateMatcher,
  createEventManagers,
} from '@components/event-generation'

describe('event generation', () => {
  describe('generateEvent', () => {
    it('creates event name without id', () => {
      const result = generateEvent('modal', 'show')

      expect(result).toBe('boot-jaxs:modal:show')
    })

    it('creates event name with id', () => {
      const result = generateEvent('accordion', 'toggle', 'item-1')

      expect(result).toBe('boot-jaxs:accordion:toggle:item-1')
    })
  })

  it('eventGeneratorFor return a function that can generate events for components with an id', () => {
    const generateModalEvent = eventGeneratorFor({
      component: 'dropdown',
      action: 'toggle',
    })

    const showEvent = generateModalEvent('user-settings')

    expect(showEvent).toBe('boot-jaxs:dropdown:toggle:user-settings')
  })

  it('generateMatcher returns a regex that can match paired events', () => {
    const componentAction = { component: 'dropdown', action: 'toggle' }
    const generateModalEvent = eventGeneratorFor(componentAction)
    const matcher = generateMatcher(componentAction)

    const event = generateModalEvent('my-dropdown')

    expect(matcher.test(event)).toBe(true)
    expect(event.match(matcher)?.[1]).toBe('my-dropdown')
  })

  it('createEventManagers returns event generator, a regex matcher and a function that provide the matched id', () => {
    const componentAction = { component: 'dropdown', action: 'close' }
    const close = createEventManagers(componentAction)

    const event = close.eventGenerator('settings-menu')

    expect(close.matcher.test(event)).toBe(true)
    expect(close.match(event)).toBe('settings-menu')
  })
})
