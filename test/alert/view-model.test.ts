import { describe, it, expect } from 'vitest'
import { viewModel } from '@components/alert/view-model'
import { storeName } from '@components/alert/interactions'

describe('alert viewModel', () => {
  describe('class', () => {
    it('uses default variant of primary when not specified', () => {
      const subscriptions = { [storeName]: [] }
      const props = viewModel(subscriptions, { id: 'alert-1' })

      expect(props.class).toBe('alert alert-primary')
    })

    it('returns base alert classes with variant when dismissible is false', () => {
      const subscriptions = { [storeName]: [] }
      const props = viewModel(subscriptions, {
        id: 'alert-1',
        variant: 'secondary',
        dismissible: false,
      })

      expect(props.class).toBe('alert alert-secondary')
    })

    it('includes custom classes from props', () => {
      const subscriptions = { [storeName]: [] }
      const props = viewModel(subscriptions, {
        id: 'alert-1',
        class: 'custom-class',
      })

      expect(props.class).toBe('alert alert-primary custom-class')
    })

    it('returns alert classes with dismissible classes when dismissible is true', () => {
      const subscriptions = { [storeName]: ['alert-1'] }
      const props = viewModel(subscriptions, {
        id: 'alert-1',
        variant: 'danger',
        dismissible: true,
      })

      expect(props.class).toBe('alert alert-danger alert-dismissible fade show')
    })
  })

  describe('show', () => {
    it('returns false when alert is dismissible and not in alerts list', () => {
      const subscriptions = { [storeName]: ['alert-1'] }
      const props = viewModel(subscriptions, {
        id: 'alert-2',
        dismissible: true,
      })

      expect(props.show).toBe(false)
    })

    it('returns true when alert is not dismissible', () => {
      const subscriptions = { [storeName]: ['alert-1'] }
      const props = viewModel(subscriptions, {
        id: 'alert-2',
        dismissible: false,
      })

      expect(props.show).toBe(true)
    })

    it('returns true when alert is dismissible and in alerts list', () => {
      const subscriptions = { [storeName]: ['alert-1'] }
      const props = viewModel(subscriptions, {
        id: 'alert-1',
        dismissible: true,
      })

      expect(props.show).toBe(true)
    })

    it('returns true by default when dismissible is not specified', () => {
      const subscriptions = { [storeName]: ['alert-2'] }
      const props = viewModel(subscriptions, { id: 'alert-1' })

      expect(props.show).toBe(true)
    })
  })

  describe('dismissible', () => {
    it('returns false by default when not specified', () => {
      const subscriptions = { [storeName]: [] }
      const props = viewModel(subscriptions, { id: 'alert-1' })

      expect(props.dismissible).toBe(false)
    })

    it('returns false when explicitly set to false', () => {
      const subscriptions = { [storeName]: [] }
      const props = viewModel(subscriptions, {
        id: 'alert-1',
        dismissible: false,
      })

      expect(props.dismissible).toBe(false)
    })

    it('returns true when explicitly set to true', () => {
      const subscriptions = { [storeName]: ['alert-1'] }
      const props = viewModel(subscriptions, {
        id: 'alert-1',
        dismissible: true,
      })

      expect(props.dismissible).toBe(true)
    })
  })

  it('onClick generates remove event for the alert id', () => {
    const subscriptions = { [storeName]: [] }
    const props = viewModel(subscriptions, { id: 'my-alert' })

    expect(props.onClick).toBe('boot-jaxs:alert:remove:my-alert')
  })
})
