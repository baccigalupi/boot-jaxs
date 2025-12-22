import { StyleVariant } from '../types'

export const badgeClass = (variant: StyleVariant = 'primary', pill: boolean = false) => {
  const pillClass = pill ? ' rounded-pill' : ''

  return `badge bg-${variant}${pillClass}`
}