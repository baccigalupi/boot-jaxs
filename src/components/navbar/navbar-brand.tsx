/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type NavbarBrandLinkProps = JaxsTypes.Props<
  HTMLAttributes & {
    href: string
  }
>

export const NavbarBrandLink = ({
  children,
  class: className,
  href,
  ...props
}: NavbarBrandLinkProps) => {
  const classes = addClassesToBase('navbar-brand', className)

  return (
    <a class={classes} href={href} onClick="go-to-href" {...props}>
      {children}
    </a>
  )
}
