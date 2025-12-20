/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'

export type BadgeProps = JaxsTypes.Props<{
  label: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  pill?: boolean
}>

export const Badge = ({ label, variant = 'primary', pill = false }: BadgeProps) => {
  const className = `badge bg-${variant}${pill ? ' rounded-pill' : ''}`
  
  return <span class={className}>{label}</span>
}
