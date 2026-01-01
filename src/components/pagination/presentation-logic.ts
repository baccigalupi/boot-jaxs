import { addClassesToBase } from '@components/presentation-logic'

type PaginationClassProps = {
  size?: 'sm' | 'lg'
  propClasses?: string
}

export const paginationClass = ({
  size,
  propClasses,
}: PaginationClassProps): string => {
  const sizeClass = size ? `pagination-${size}` : ''
  return addClassesToBase('pagination', [sizeClass, propClasses])
}

type PaginationItemClassProps = {
  active?: boolean
  disabled?: boolean
  propClasses?: string
}

export const paginationItemClass = ({
  active,
  disabled,
  propClasses,
}: PaginationItemClassProps): string => {
  const activeClass = active ? 'active' : ''
  const disabledClass = disabled ? 'disabled' : ''
  return addClassesToBase('page-item', [activeClass, disabledClass, propClasses])
}
