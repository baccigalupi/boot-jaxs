/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type PopoverHeaderProps = JaxsTypes.Props<HTMLAttributes>

export const PopoverHeader = ({
  children,
  class: className,
  ...props
}: PopoverHeaderProps) => {
  const classes = addClassesToBase('popover-header', className)

  return (
    <h3 class={classes} {...props}>
      {children}
    </h3>
  )
}
