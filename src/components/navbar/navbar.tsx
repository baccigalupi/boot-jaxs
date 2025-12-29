/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type NavbarProps = JaxsTypes.Props<HTMLAttributes>

export const Navbar = ({
  children,
  class: className,
  ...props
}: NavbarProps) => {
  const classes = addClassesToBase('navbar', className)

  return (
    <nav class={classes} {...props}>
      <div class="container-fluid">{children}</div>
    </nav>
  )
}
