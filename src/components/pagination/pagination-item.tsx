/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { paginationItemClass, ariaCurrent } from './presentation-logic'

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
  const ariaCurrentValue = ariaCurrent(active)

  return (
    <li class={classes} aria-current={ariaCurrentValue} {...props}>
      {children}
    </li>
  )
}
