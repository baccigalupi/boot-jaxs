/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { navLinkClass } from './presentation-logic'

export type NavLinkProps = JaxsTypes.Props<
  HTMLAttributes & {
    active?: boolean
    disabled?: boolean
    href?: string
    target?: string
  }
>

export const NavLink = ({
  children,
  active = false,
  disabled = false,
  href = '#',
  target,
  class: className,
  ...props
}: NavLinkProps) => {
  const classes = navLinkClass({ active, disabled })
  const finalClasses = className ? `${classes} ${className}` : classes

  return (
    <a
      class={finalClasses}
      href={disabled ? undefined : href}
      target={target}
      data-bs-toggle="tab"
      role="tab"
      aria-selected={active ? 'true' : 'false'}
      {...(disabled && { 'aria-disabled': 'true', tabindex: '-1' })}
      {...props}
    >
      {children}
    </a>
  )
}
