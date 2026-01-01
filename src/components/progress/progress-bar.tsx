/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, StyleVariant } from '../types'
import { progressBarClass } from './presentation-logic'

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
  style,
  ...props
}: ProgressBarProps) => {
  const classes = progressBarClass({ striped, animated, variant, propClasses })
  
  const percentage = ((value - min) / (max - min)) * 100
  const widthStyle = `width: ${percentage}%`
  const combinedStyle = [style, widthStyle].filter(Boolean).join('; ')

  return (
    <div
      class={classes}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      style={combinedStyle}
      {...props}
    >
      {label || ''}
    </div>
  )
}
