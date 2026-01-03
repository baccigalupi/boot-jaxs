import { describe, it, expect } from 'vitest'
import {
  placeholderClass,
  widthToStyle,
} from '@components/placeholder/presentation-logic'

describe('placeholder presentation logic', () => {
  describe('widthToStyle', () => {
    it('returns undefined when width is not provided', () => {
      expect(widthToStyle(undefined)).toBeUndefined()
    })

    it('converts numeric width to percentage string', () => {
      expect(widthToStyle(50)).toBe('width: 50%')
    })

    it('passes through string width unchanged', () => {
      expect(widthToStyle('10rem')).toBe('width: 10rem')
    })
  })

  describe('placeholderClass', () => {
    it('returns base class when nothing is provided', () => {
      expect(placeholderClass({})).toBe('placeholder')
    })

    it('adds size class when provided', () => {
      expect(placeholderClass({ size: 'lg' })).toBe(
        'placeholder placeholder-lg',
      )
    })

    it('adds variant class when provided', () => {
      expect(placeholderClass({ variant: 'primary' })).toBe(
        'placeholder bg-primary',
      )
    })

    it('adds animation class when provided', () => {
      expect(placeholderClass({ animation: 'glow' })).toBe(
        'placeholder placeholder-glow',
      )
    })
  })
})
