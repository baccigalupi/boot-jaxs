import { describe, it, expect } from 'vitest'
import {
  alertClassName,
  buildOnClickEvent,
} from '@components/alert/presentation-logic'

describe('alertClassName', () => {
  it('returns base alert classes with type when dismissible is false', () => {
    const className = alertClassName('primary', false)

    expect(className).toBe('alert alert-primary')
  })

  it('returns alert classes with dismissible classes when dismissible is true', () => {
    const className = alertClassName('danger', true)

    expect(className).toBe('alert alert-danger alert-dismissible fade show')
  })
})

it('buildOnClickEvent builds an event name with component name, close action, and id', () => {
  const eventName = buildOnClickEvent('test-alert', 'boot-jaxs:alert')

  expect(eventName).toBe('boot-jaxs:alert:close:test-alert')
})
