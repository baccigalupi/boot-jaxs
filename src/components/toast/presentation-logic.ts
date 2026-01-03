import { addClassesToBase } from '@components/presentation-logic'

export const toastClass = ({propClasses, show}: {propClasses?: string, show?: boolean}): string => {
  const showClass = show ? 'show' : ''
  return addClassesToBase('toast', [showClass, propClasses])
}

export const toastHeaderClass = (propClasses?: string): string => {
  return addClassesToBase('toast-header', [propClasses])
}

export const toastBodyClass = (propClasses?: string): string => {
  return addClassesToBase('toast-body', [propClasses])
}
