/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type PopoverBodyProps = JaxsTypes.Props<HTMLAttributes>

export const PopoverBody = ({
  children,
  class: className,
  ...props
}: PopoverBodyProps) => {
  const classes = addClassesToBase('popover-body', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
