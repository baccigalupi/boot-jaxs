import { addClassesToBase } from '@components/presentation-logic'
import { StyleVariant } from '@components/types'

const dismissibleClass = (dismissible: boolean) =>
  dismissible ? 'alert-dismissible fade show' : ''

export const alertClassName = (
  variant: StyleVariant,
  dismissible: boolean,
  propClasses?: string,
) => {
  return addClassesToBase(`alert alert-${variant}`, [
    dismissibleClass(dismissible),
    propClasses,
  ])
}

export const hideAlert = (
  alerts: string[],
  id: string,
  dismissible: boolean,
) => {
  return dismissible && !alerts.includes(id)
}
