import { addClassesToBase } from '@components/presentation-logic'
import { Size } from '@components/types'

type PaginationClassProps = {
  size?: Size
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
  return addClassesToBase('page-item', [
    activeClass,
    disabledClass,
    propClasses,
  ])
}

export const ariaCurrent = (active: boolean): string | undefined => {
  return active ? 'page' : 'false'
}
