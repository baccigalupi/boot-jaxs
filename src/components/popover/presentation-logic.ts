import { addClassesToBase } from '@components/presentation-logic'

type PopoverClassProps = {
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'auto'
  show?: boolean
  propClasses?: string
}

export const popoverClass = ({
  placement = 'top',
  show = false,
  propClasses,
}: PopoverClassProps): string => {
  const placementClass = placement !== 'auto' ? `bs-popover-${placement}` : ''
  const showClass = show ? 'show' : ''

  return addClassesToBase('popover', [placementClass, showClass, propClasses])
}
