/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { paginationClass } from './presentation-logic'

export type PaginationProps = JaxsTypes.Props<
  HTMLAttributes & {
    size?: 'sm' | 'lg'
  }
>

export const Pagination = ({
  children,
  size,
  class: propClasses,
  ...props
}: PaginationProps) => {
  const classes = paginationClass({ size, propClasses })

  return (
    <nav aria-label="Page navigation" {...props}>
      <ul class={classes}>{children}</ul>
    </nav>
  )
}

export { PaginationItem } from './pagination-item'
export { PaginationLink } from './pagination-link'
