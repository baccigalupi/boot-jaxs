/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { badgeClass } from './presentation-logic'
import { HTMLAttributes, StyleVariant } from '../types'

// NOTE: Thoughts on the label vs children. In this case I think the badge
// is just supposed to take a string, and using children would invite mischeif.

export type BadgeProps = JaxsTypes.Props<{
  label: string
  variant?: StyleVariant
  pill?: boolean
} & HTMLAttributes>

export const Badge = ({ label, variant = 'primary', pill = false, class: propClass, ...rest }: BadgeProps) => {
  const className = badgeClass({variant, pill, propClass})
  
  return <span class={className}>{label}</span>
}
