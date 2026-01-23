import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createApp, ListStore } from 'jaxs'
import {
  CollapseState,
  registerCollapses,
  storeName,
  toggle,
  type CollapsesState,
} from '@components/collapse/interactions'

describe('collapse interactions', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it.only('when toggling open, it sets to animating, and then after a timeout to show', () => {
    const now = new Date()
    vi.setSystemTime(now)

    const app = createApp()
    registerCollapses(app)
    const store = app.state.store<CollapsesState>(storeName)

    app.publish(toggle.eventGenerator('collapse-1'), null)
    expect(store.value.length).toBe(1)
    expect(store.value[0]).toEqual({ id: 'collapse-1', openState: 'animating' })

    vi.advanceTimersByTime(0.35 * 1000) // animation duration, but not the buffer
    expect(store.value[0]).toEqual({ id: 'collapse-1', openState: 'animating' })

    vi.advanceTimersByTime(21) // buffer + 1
    expect(store.value[0]).toEqual({ id: 'collapse-1', openState: 'show' })
  })

  it('when toggling closed, it sets to animating, and then after a timeout removes the record from the array', () => {
    const now = new Date()
    vi.setSystemTime(now)

    const app = createApp()
    registerCollapses(app)
    const store = app.state.store<CollapseState[]>(storeName)
    ListStore.push(store, {
      id: 'collapse-1',
      openState: 'show',
    } as CollapseState)

    app.publish(toggle.eventGenerator('collapse-1'), null)

    expect(store.value.length).toBe(1)
    expect(store.value[0]).toEqual({ id: 'collapse-1', openState: 'animating' })

    vi.advanceTimersByTime(0.35 * 1000) // animation duration, but not the buffer
    expect(store.value[0]).toEqual({ id: 'collapse-1', openState: 'animating' })

    vi.advanceTimersByTime(50) // more than buffer!
    expect(store.value.length).toEqual(0)
  })
})
