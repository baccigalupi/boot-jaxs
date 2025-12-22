/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { badgeClass } from './presentation-logic'
import { StyleVariant } from '../types'

export type BadgeProps = JaxsTypes.Props<{
  label: string
  variant?: StyleVariant
  pill?: boolean
}>

export const Badge = ({ label, variant = 'primary', pill = false }: BadgeProps) => {
  const className = badgeClass(variant, pill)
  
  return <span class={className}>{label}</span>
}
