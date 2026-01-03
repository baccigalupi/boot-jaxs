/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, StyleVariant } from '../types'
import { spinnerClass } from './presentation-logic'

export type SpinnerProps = JaxsTypes.Props<
  HTMLAttributes & {
    type?: 'border' | 'grow'
    size?: 'sm'
    variant?: StyleVariant
    label?: string
  }
>

const SpinnerLabel = ({ label }: { label?: string }) => {
  if (!label) return

  return <span class="visually-hidden">{label}</span>
}

export const Spinner = ({
  type = 'border',
  size,
  variant,
  label,
  class: propClasses,
  ...props
}: SpinnerProps) => {
  const classes = spinnerClass({ type, size, variant, propClasses })

  return (
    <div class={classes} role="status" {...props}>
      <SpinnerLabel label={label} />
    </div>
  )
}
