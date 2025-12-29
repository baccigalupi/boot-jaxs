/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type NavItemProps = JaxsTypes.Props<HTMLAttributes>

export const NavItem = ({
  children,
  class: className,
  ...props
}: NavItemProps) => {
  const classes = addClassesToBase('nav-item', className)

  return (
    <li class={classes} {...props}>
      {children}
    </li>
  )
}
