/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'

export type BadgeProps = JaxsTypes.Props<{
  label: string
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  pill?: boolean
}>

const badgeClass = (variant: string, pill: boolean) => {
  const pillClass = pill ? ' rounded-pill' : ''

  return `badge bg-${variant}${pillClass}`
}

export const Badge = ({ label, variant = 'primary', pill = false }: BadgeProps) => {
  const className = badgeClass(variant, pill)
  
  return <span class={className}>{label}</span>
}
