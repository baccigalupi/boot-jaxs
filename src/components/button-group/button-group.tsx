/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import type { HTMLAttributes, Size } from '../types'
import { buildGroupClass } from './presentation-logic'

export type ButtonGroupProps = JaxsTypes.Props<{
  size?: Size
  ariaLabel?: string
} & HTMLAttributes>

export const ButtonGroup = ({
  size,
  ariaLabel,
  class: propClasses,
  children,
  ...rest
}: ButtonGroupProps) => {
  const classes = buildGroupClass('btn-group', size, propClasses)

  return (
    <div 
      class={classes} 
      role='group' 
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </div>
  )
}
