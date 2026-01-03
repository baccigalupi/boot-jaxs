import { describe, it, expect } from 'vitest'
import {
  paginationClass,
  paginationItemClass,
  ariaCurrent,
} from '@components/pagination/presentation-logic'

describe('pagination presentation logic', () => {
  describe('paginationClass', () => {
    it('returns base class when no options provided', () => {
      expect(paginationClass({})).toBe('pagination')
    })

    it('adds size class when size is provided', () => {
      expect(paginationClass({ size: 'sm' })).toBe('pagination pagination-sm')
      expect(paginationClass({ size: 'lg' })).toBe('pagination pagination-lg')
    })

    it('concatenates custom classes', () => {
      expect(paginationClass({ size: 'lg', propClasses: 'custom-class' })).toBe(
        'pagination pagination-lg custom-class',
      )
    })
  })

  describe('paginationItemClass', () => {
    it('returns base class when no options provided', () => {
      expect(paginationItemClass({})).toBe('page-item')
    })

    it('adds active class when active is true', () => {
      expect(paginationItemClass({ active: true })).toBe('page-item active')
    })

    it('adds disabled class when disabled is true', () => {
      expect(paginationItemClass({ disabled: true })).toBe('page-item disabled')
    })
  })

  describe('ariaCurrent', () => {
    it('returns "page" when active is true', () => {
      expect(ariaCurrent(true)).toBe('page')
    })

    it("returns 'false' when active is false", () => {
      expect(ariaCurrent(false)).toEqual('false')
    })
  })
})
