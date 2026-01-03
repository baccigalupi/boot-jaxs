/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { popoverClass } from './presentation-logic'

export type PopoverProps = JaxsTypes.Props<
  HTMLAttributes & {
    show?: boolean
  }
>

export const Popover = ({
  children,
  show = false,
  class: propClasses,
  ...props
}: PopoverProps) => {
  const classes = popoverClass({ show, propClasses })

  return (
    <div class={classes} role="tooltip" {...props}>
      <div class="popover-arrow"></div>
      {children}
    </div>
  )
}
