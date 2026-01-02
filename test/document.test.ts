import { describe, it, expect, vi } from 'vitest'
import { onDocumentClick } from '@components/document'

describe('onDocumentClick', () => {
  it('calls the publish function when document is clicked', () => {
    const publish = vi.fn()

    onDocumentClick(publish)
    document.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(publish).toHaveBeenCalledOnce()
  })

  it('only calls publish once and removes the listener', () => {
    const publish = vi.fn()

    onDocumentClick(publish)
    document.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(publish).toHaveBeenCalledOnce()
  })
})
