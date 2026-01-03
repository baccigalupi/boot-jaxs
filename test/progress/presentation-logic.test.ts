import { describe, it, expect } from 'vitest'
import {
  progressBarClass,
  heightStyle,
  widthStyle,
} from '@components/progress/presentation-logic'

describe('progress presentation logic', () => {
  describe('progressBarClass', () => {
    it('returns base class when no options provided', () => {
      expect(progressBarClass({})).toBe('progress-bar')
    })

    it('adds variant class when variant is provided', () => {
      expect(progressBarClass({ variant: 'success' })).toBe(
        'progress-bar bg-success',
      )
    })

    it('adds striped class when striped is true', () => {
      expect(progressBarClass({ striped: true })).toBe(
        'progress-bar progress-bar-striped',
      )
    })

    it('adds animated class when animated is true', () => {
      expect(progressBarClass({ animated: true })).toBe(
        'progress-bar progress-bar-striped progress-bar-animated',
      )
    })

    it('appends custom classes', () => {
      expect(progressBarClass({ propClasses: 'custom-class' })).toBe(
        'progress-bar custom-class',
      )
    })
  })

  describe('heightStyle', () => {
    it('returns empty string when height is undefined', () => {
      expect(heightStyle(undefined)).toBe('')
    })

    it('converts numeric height to px string', () => {
      expect(heightStyle(20)).toBe('height: 20px')
    })

    it('passes through string height unchanged', () => {
      expect(heightStyle('2rem')).toBe('height: 2rem')
    })
  })

  describe('widthStyle', () => {
    it('calculates percentage width from value between min and max', () => {
      expect(widthStyle({ value: 50, min: 0, max: 100 })).toBe('width: 50%')
    })

    it('calculates percentage when min is not zero', () => {
      expect(widthStyle({ value: 75, min: 50, max: 100 })).toBe('width: 50%')
    })

    it('handles value at minimum', () => {
      expect(widthStyle({ value: 0, min: 0, max: 100 })).toBe('width: 0%')
    })

    it('handles value at maximum', () => {
      expect(widthStyle({ value: 100, min: 0, max: 100 })).toBe('width: 100%')
    })

    it('returns 0% when max equals min to avoid divide by zero', () => {
      expect(widthStyle({ value: 50, min: 50, max: 50 })).toBe('width: 0%')
    })

    it('returns 0% when range is zero with different values', () => {
      expect(widthStyle({ value: 100, min: 100, max: 100 })).toBe('width: 0%')
    })
  })
})
