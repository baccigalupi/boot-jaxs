import { describe, it, expect } from 'vitest'
import { createApp } from 'jaxs'
import {
  registerDropdown,
  dropdownStoreName,
} from '@components/dropdown/interactions'

describe('dropdown interactions', () => {
  it('store starts out as an empty array', () => {
    const app = createApp()
    registerDropdown(app)
    const store = app.state.store<string[]>(dropdownStoreName)

    expect(store.value).toEqual([])
  })

  it('triggering a toggle adds then removes the id from the store', () => {
    const app = createApp()
    registerDropdown(app)
    const store = app.state.store<string[]>(dropdownStoreName)

    app.publish('boot-jaxs:dropdown:toggle:my-dropdown', new MouseEvent('click'))
    expect(store.value).toEqual(['my-dropdown'])

    app.publish('boot-jaxs:dropdown:toggle:my-dropdown', new MouseEvent('click'))
    expect(store.value).toEqual([])
  })
})
