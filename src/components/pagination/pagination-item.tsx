/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { paginationItemClass } from './presentation-logic'

export type PaginationItemProps = JaxsTypes.Props<
  HTMLAttributes & {
    active?: boolean
    disabled?: boolean
  }
>

export const PaginationItem = ({
  children,
  active = false,
  disabled = false,
  class: propClasses,
  ...props
}: PaginationItemProps) => {
  const classes = paginationItemClass({ active, disabled, propClasses })

  return (
    <li class={classes} {...(active && { 'aria-current': 'page' })} {...props}>
      {children}
    </li>
  )
}
