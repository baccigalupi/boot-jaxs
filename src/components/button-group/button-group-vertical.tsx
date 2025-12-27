/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import type { HTMLAttributes, Size } from '../types'
import { buildGroupClass } from './presentation-logic'

export type ButtonGroupVerticalProps = JaxsTypes.Props<
  {
    size?: Size
    ariaLabel?: string
  } & HTMLAttributes
>

export const ButtonGroupVertical = ({
  size,
  ariaLabel,
  class: propClasses,
  children,
  ...rest
}: ButtonGroupVerticalProps) => {
  const classes = buildGroupClass('btn-group-vertical', size, propClasses)

  return (
    <div class={classes} role="group" aria-label={ariaLabel} {...rest}>
      {children}
    </div>
  )
}
