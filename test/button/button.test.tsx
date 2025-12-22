import { /** @jsx jsx */ jsx } from 'jaxs'
import { describe, it, expect } from 'vitest'
import { Button } from '@components/button/button'
import { renderToString } from '../support/render-to-string'

describe('Button', () => {
  it('combines added classe with the ones defined from props', () => {
    const button = (
      <Button class="custom-class" onClick="on-click">
        BUTTON
      </Button>
    )
    const html = renderToString(button)

    expect(html).toContain('class="btn btn-primary custom-class"')
  })

  it('renders and passes through values for global attributes', () => {
    const button = (
      <Button id="test-id" lang="en" title="Test Button" onClick="on-click">
        BUTTON
      </Button>
    )
    const html = renderToString(button)

    expect(html).toContain('id="test-id"')
    expect(html).toContain('lang="en"')
    expect(html).toContain('title="Test Button"')
  })

  it('disables the button with that attribute', () => {
    const button = (
      <Button disabled={true} onClick="on-click">
        BUTTON
      </Button>
    )
    const html = renderToString(button)

    expect(html).toContain('disabled')
  })

  it('sets the button type attribute and defaults to "button"', () => {
    const button = <Button onClick="on-click">BUTTON</Button>
    const html = renderToString(button)

    expect(html).toContain('type="button"')
  })

  it('sets the button type to other types', () => {
    const button = (
      <Button type="submit" onClick="on-click">
        BUTTON
      </Button>
    )
    const html = renderToString(button)

    expect(html).toContain('type="submit"')
  })
})
