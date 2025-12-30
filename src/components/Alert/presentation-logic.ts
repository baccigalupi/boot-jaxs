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

export const buildOnClickEvent = (id: string, componentName: string) =>
  `${componentName}:close:${id}`
