/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type DropdownDividerProps = JaxsTypes.Props<HTMLAttributes>

export const DropdownDivider = ({
  class: className,
  ...props
}: DropdownDividerProps) => {
  const classes = addClassesToBase('dropdown-divider', className)

  return (
    <li>
      <hr class={classes} {...props} />
    </li>
  )
}
