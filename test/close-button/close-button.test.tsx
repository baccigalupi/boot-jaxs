import { /** @jsx jsx */ jsx } from 'jaxs'
import { describe, it, expect } from 'vitest'
import { CloseButton } from '@components/close-button/close-button'
import { renderToString } from '../support/render-to-string'

describe('CloseButton', () => {
  it('renders with base class and button type', () => {
    const html = renderToString(<CloseButton onClick="handle-close" />)

    expect(html).toContain('class="btn-close"')
    expect(html).toContain('type="button"')
  })

  it('renders white variant when requested', () => {
    const html = renderToString(
      <CloseButton white={true} onClick="handle-close" />,
    )

    expect(html).toContain('btn-close-white')
  })

  it('disables the button with disabled attribute', () => {
    const html = renderToString(
      <CloseButton disabled={true} onClick="handle-close" />,
    )

    expect(html).toContain('disabled')
  })
})
