/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import type { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type ButtonToolbarProps = JaxsTypes.Props<
  {
    ariaLabel?: string
  } & HTMLAttributes
>

export const ButtonToolbar = ({
  ariaLabel,
  class: propClasses,
  children,
  ...rest
}: ButtonToolbarProps) => {
  const classes = addClassesToBase('btn-toolbar', propClasses)

  return (
    <div class={classes} role="toolbar" aria-label={ariaLabel} {...rest}>
      {children}
    </div>
  )
}
