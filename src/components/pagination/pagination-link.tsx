/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

type PaginationLinkEnabledProps = JaxsTypes.Props<
  HTMLAttributes & {
    href: string
  }
>

const PaginationLinkEnabled = ({
  children,
  href,
  class: propClasses,
  ...props
}: PaginationLinkEnabledProps) => {
  const classes = addClassesToBase('page-link', propClasses)

  return (
    <a class={classes} onClick="go-to-href" href={href} {...props}>
      {children}
    </a>
  )
}

const PaginationLinkDisabled = ({
  children,
  class: propClasses,
  ...props
}: JaxsTypes.Props<HTMLAttributes>) => {
  const classes = addClassesToBase('page-link', propClasses)

  return (
    <span class={classes} {...props}>
      {children}
    </span>
  )
}

export type PaginationLinkProps = JaxsTypes.Props<
  HTMLAttributes & {
    href: string
    disabled?: boolean
  }
>

export const PaginationLink = ({
  disabled = false,
  ...props
}: PaginationLinkProps) => {
  if (disabled) return <PaginationLinkDisabled {...props} />

  return <PaginationLinkEnabled {...props} />
}
