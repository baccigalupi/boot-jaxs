/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, Placement } from '../types'
import { tooltipClass } from './presentation-logic'

export type TooltipProps = JaxsTypes.Props<
  {
    placement?: Placement
    class?: string
  } & HTMLAttributes
>

export const Tooltip = ({
  placement = 'top',
  class: propClasses,
  children,
  ...props
}: TooltipProps) => {
  const className = tooltipClass(placement, propClasses)

  return (
    <div class={className} role="tooltip" {...props}>
      <div class="tooltip-inner">{children}</div>
    </div>
  )
}
