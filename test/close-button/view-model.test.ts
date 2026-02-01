import { describe, it, expect } from 'vitest'
import { viewModel } from '@components/close-button/view-model'

describe('close-button viewModel', () => {
  describe('class', () => {
    it('returns base class when no options are provided', () => {
      const props = viewModel({ onClick: 'handle-close' })

      expect(props.class).toBe('btn-close')
    })

    it('includes white class when white is true', () => {
      const props = viewModel({ onClick: 'handle-close', white: true })

      expect(props.class).toBe('btn-close btn-close-white')
    })

    it('appends custom class when provided', () => {
      const props = viewModel({
        onClick: 'handle-close',
        class: 'my-custom-class',
      })

      expect(props.class).toBe('btn-close my-custom-class')
    })
  })
})
