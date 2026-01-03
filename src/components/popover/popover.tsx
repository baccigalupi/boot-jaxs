/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, PopoverPlacement } from '../types'
import { popoverClass } from './presentation-logic'

export type PopoverProps = JaxsTypes.Props<
  HTMLAttributes & {
    placement?: PopoverPlacement
    show?: boolean
  }
>

export const Popover = ({
  children,
  placement = 'top',
  show = false,
  class: propClasses,
  ...props
}: PopoverProps) => {
  const classes = popoverClass({ placement, show, propClasses })

  return (
    <div class={classes} role="tooltip" {...props}>
      <div class="popover-arrow"></div>
      {children}
    </div>
  )
}

export { PopoverHeader } from './popover-header'
export { PopoverBody } from './popover-body'
