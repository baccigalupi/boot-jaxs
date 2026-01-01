import { addClassesToBase } from '@components/presentation-logic'

type OffcanvasClassNameProps = {
  placement?: 'start' | 'end' | 'top' | 'bottom'
  visible?: boolean
  propClasses?: string
}

export const offcanvasClassName = ({
  placement = 'start',
  visible = false,
  propClasses,
}: OffcanvasClassNameProps): string => {
  const placementClass = `offcanvas-${placement}`
  const visibilityClass = visible ? 'show' : ''

  return addClassesToBase('offcanvas', [placementClass, visibilityClass, propClasses])
}
