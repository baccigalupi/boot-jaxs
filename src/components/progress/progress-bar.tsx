/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, StyleVariant } from '../types'
import { progressBarClass, widthStyle } from './presentation-logic'

export type ProgressBarProps = JaxsTypes.Props<
  HTMLAttributes & {
    value: number
    max?: number
    min?: number
    variant?: StyleVariant
    striped?: boolean
    animated?: boolean
    label?: string
  }
>

export const ProgressBar = ({
  value,
  max = 100,
  min = 0,
  variant,
  striped = false,
  animated = false,
  label,
  class: propClasses,
  ...props
}: ProgressBarProps) => {
  const classes = progressBarClass({ striped, animated, variant, propClasses })
  const style = widthStyle({ value, min, max })

  return (
    <div
      class={classes}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      style={style}
      {...props}
    >
      {label || ''}
    </div>
  )
}
