import { describe, it, expect } from 'vitest'
import { createApp } from 'jaxs'
import {
  registerAccordions,
  storeName,
} from '@components/accordion/interactions'

describe('accordion interactions', () => {
  it('store starts out as an empty record', () => {
    const app = createApp()
    registerAccordions(app)
    const store = app.state.store<Record<string, string[]>>(storeName)

    expect(store.value).toEqual({})
  })

  it('toggle adds then removes an item for the accordion', () => {
    const app = createApp()
    registerAccordions(app)
    const store = app.state.store<Record<string, string[]>>(storeName)

    app.publish('boot-jaxs:accordion:toggle:accordion-1:item-1', null)
    expect(store.value).toEqual({ 'accordion-1': ['item-1'] })

    app.publish('boot-jaxs:accordion:toggle:accordion-1:item-1', null)
    expect(store.value).toEqual({ 'accordion-1': [] })
  })

  it('open adds an item without duplication', () => {
    const app = createApp()
    registerAccordions(app)
    const store = app.state.store<Record<string, string[]>>(storeName)

    app.publish('boot-jaxs:accordion:open:accordion-1:item-1', null)
    app.publish('boot-jaxs:accordion:open:accordion-1:item-1', null)

    expect(store.value).toEqual({ 'accordion-1': ['item-1'] })
  })

  it('close removes only the targeted item', () => {
    const app = createApp()
    registerAccordions(app)
    const store = app.state.store<Record<string, string[]>>(storeName)

    app.publish('boot-jaxs:accordion:open:accordion-1:item-1', null)
    app.publish('boot-jaxs:accordion:open:accordion-1:item-2', null)

    app.publish('boot-jaxs:accordion:close:accordion-1:item-2', null)
    expect(store.value).toEqual({ 'accordion-1': ['item-1'] })
  })
})
