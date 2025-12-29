/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type NavbarNavProps = JaxsTypes.Props<HTMLAttributes>

export const NavbarNav = ({
  children,
  class: className,
  ...props
}: NavbarNavProps) => {
  const classes = addClassesToBase('navbar-nav', className)

  return (
    <ul class={classes} {...props}>
      {children}
    </ul>
  )
}
