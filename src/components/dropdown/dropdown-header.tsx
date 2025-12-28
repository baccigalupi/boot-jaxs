/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type DropdownHeaderProps = JaxsTypes.Props<HTMLAttributes>

export const DropdownHeader = ({
  children,
  class: className,
  ...props
}: DropdownHeaderProps) => {
  const classes = addClassesToBase('dropdown-header', className)

  return (
    <li>
      <h6 class={classes} {...props}>
        {children}
      </h6>
    </li>
  )
}
