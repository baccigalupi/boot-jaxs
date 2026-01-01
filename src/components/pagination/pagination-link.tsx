/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type PaginationLinkProps = JaxsTypes.Props<
  HTMLAttributes & {
    href?: string
    disabled?: boolean
  }
>

export const PaginationLink = ({
  children,
  href = '#',
  disabled = false,
  class: propClasses,
  ...props
}: PaginationLinkProps) => {
  const classes = addClassesToBase('page-link', propClasses)

  if (disabled) {
    return (
      <span class={classes} {...props}>
        {children}
      </span>
    )
  }

  return (
    <a class={classes} href={href} {...props}>
      {children}
    </a>
  )
}
