/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { badgeClass } from './presentation-logic'

export type BadgeProps = JaxsTypes.Props<{
  label: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  pill?: boolean
}>

export const Badge = ({ label, variant = 'primary', pill = false }: BadgeProps) => {
  const className = badgeClass(variant, pill)
  
  return <span class={className}>{label}</span>
}
