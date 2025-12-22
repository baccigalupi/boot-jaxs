import { addClassesToBase } from '@components/presentation-logic'

const dismissibleClass = (dismissible: boolean) =>
  dismissible ? 'alert-dismissible fade show' : ''

export const alertClassName = (type: string, dismissible: boolean) =>
  addClassesToBase(`alert alert-${type}`, dismissibleClass(dismissible))

export const buildOnClickEvent = (id: string, componentName: string) =>
  `${componentName}:close:${id}`
