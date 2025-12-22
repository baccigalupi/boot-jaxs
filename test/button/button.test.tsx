import /** @jsx jsx */ { jsx } from 'jaxs'
import { describe, it, expect } from 'vitest'
import { Button } from '@components/button/button'
import { renderToString } from '../support/render-to-string'

describe('Button', () => {
  it('combines added classe with the ones defined from props', () => {
    const button = <Button class="custom-class" />
    const html = renderToString(button)

    expect(html).toContain('class="btn btn-primary custom-class"')
  })

  it('renders and passes through values for global variables', () => {
    const button = <Button id="test-id" lang="en" title="Test Button" />
    const html = renderToString(button)

    expect(html).toContain('id="test-id"')
    expect(html).toContain('lang="en"')
    expect(html).toContain('title="Test Button"')
  })
})