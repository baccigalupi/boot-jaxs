import { StyleVariant } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

type BadgeClassProps = {
  variant?: StyleVariant
  pill?: boolean
  propClass?: string
}
export const badgeClass = ({variant = 'primary', pill = false, propClass}: BadgeClassProps) => {
  const pillClass = pill ? 'rounded-pill' : ''
  const baseClass = addClassesToBase(`badge bg-${variant}`, pillClass)

  return addClassesToBase(baseClass, propClass)
}