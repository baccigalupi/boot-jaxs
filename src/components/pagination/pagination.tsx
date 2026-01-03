/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { paginationClass } from './presentation-logic'

export type PaginationProps = JaxsTypes.Props<
  HTMLAttributes & {
    size?: 'sm' | 'lg'
    ariaLabel?: string
  }
>

export const Pagination = ({
  children,
  size,
  ariaLabel = 'Pagination',
  class: propClasses,
  ...props
}: PaginationProps) => {
  const classes = paginationClass({ size, propClasses })

  return (
    <nav aria-label={ariaLabel} {...props}>
      <ul class={classes}>{children}</ul>
    </nav>
  )
}

export { PaginationItem } from './pagination-item'
export { PaginationLink } from './pagination-link'
