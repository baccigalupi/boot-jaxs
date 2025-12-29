/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { navLinkClasses } from './presentation-logic'
import { booleanToString } from '../presentation-logic'

// aria-current="page" - Bootstrap uses this to indicate the current/active page
// aria-disabled="true" - Bootstrap uses this to indicate disabled state
export type NavLinkProps = JaxsTypes.Props<
  HTMLAttributes & {
    href?: string
    active?: boolean
    disabled?: boolean
    onClick?: string
  }
>

export const NavLink = ({
  children,
  class: className,
  href,
  active = false,
  disabled = false,
  onClick,
  ...props
}: NavLinkProps) => {
  const classes = navLinkClasses({
    active,
    disabled,
    propClasses: className,
  })
  const ariaCurrent = active ? 'page' : 'false'
  const ariaDisabled = booleanToString(disabled)

  return (
    <a
      class={classes}
      href={href}
      onClick={onClick}
      aria-current={ariaCurrent}
      aria-disabled={ariaDisabled}
      {...props}
    >
      {children}
    </a>
  )
}
