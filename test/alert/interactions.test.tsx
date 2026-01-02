import { describe, it, expect } from 'vitest'
import { createApp } from 'jaxs'
import { registerComponent } from '@components/alert/interactions'

describe('Alert component', () => {
  it('event add and remove events from the store', () => {
    const app = createApp()
    registerComponent(app)
    const store = app.state.store<string[]>('boot-jaxs:alert')

    app.publish('boot-jaxs:alert:add:test-alert', null)
    expect(store.value).toEqual(['test-alert'])

    app.publish('boot-jaxs:alert:remove:test-alert', null)
    expect(store.value).toEqual([])
  })

  it('event does not add duplicate alerts to the store', () => {
    const app = createApp()
    registerComponent(app)
    const store = app.state.store<string[]>('boot-jaxs:alert')

    app.publish('boot-jaxs:alert:add:test-alert', null)
    app.publish('boot-jaxs:alert:add:test-alert', null)

    expect(store.value).toEqual(['test-alert'])
  })
})
