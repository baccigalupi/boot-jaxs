import { describe, it, expect } from 'vitest'
import { viewModel } from '@components/accordion/accordion-view-model'

describe('accordion root viewModel', () => {
  describe('class', () => {
    it('returns accordion class when flush is false and no custom class provided', () => {
      const props = viewModel({ flush: false })

      expect(props.class).toBe('accordion')
    })

    it('returns accordion class by default when props are empty', () => {
      const props = viewModel({})

      expect(props.class).toBe('accordion')
    })

    it('includes accordion-flush class when flush is true', () => {
      const props = viewModel({ flush: true })

      expect(props.class).toBe('accordion accordion-flush')
    })

    it('includes custom classes from props', () => {
      const props = viewModel({ class: 'custom-class' })

      expect(props.class).toBe('accordion custom-class')
    })
  })
})
