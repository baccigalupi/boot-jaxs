import { addClassesToBase } from '@components/presentation-logic'
import { OffcanvasPlacement } from '@components/types'

type OffcanvasClassNameProps = {
  placement?: OffcanvasPlacement
  show?: boolean
  propClasses?: string
}

export const offcanvasClassName = ({
  placement = 'start',
  show = false,
  propClasses,
}: OffcanvasClassNameProps): string => {
  const placementClass = `offcanvas-${placement}`
  const visibilityClass = show ? 'show' : ''

  return addClassesToBase('offcanvas', [
    placementClass,
    visibilityClass,
    propClasses,
  ])
}

export const labelId = (id: string) => `${id}-label`
