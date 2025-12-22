import { describe, it, expect } from 'vitest'
import { createApp } from 'jaxs'
import { registerComponent } from '@components/alert/component'

describe('Alert component', () => {
  it('event add and remove events from the store', () => {
    const app = createApp()
    const store = registerComponent(app)

    app.publish('boot-jaxs:alert:add:test-alert', null)
    expect(store.value).toEqual(['test-alert'])

    app.publish('boot-jaxs:alert:remove:test-alert', null)
    expect(store.value).toEqual([])
  })

  it('event does not add duplicate alerts to the store', () => {
    const app = createApp()
    const store = registerComponent(app)

    app.publish('boot-jaxs:alert:add:test-alert', null)
    app.publish('boot-jaxs:alert:add:test-alert', null)

    expect(store.value).toEqual(['test-alert'])
  })
})