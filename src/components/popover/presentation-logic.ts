import { addClassesToBase } from '@components/presentation-logic'

type PopoverClassProps = {
  show?: boolean
  propClasses?: string
}

export const popoverClass = ({
  show = false,
  propClasses,
}: PopoverClassProps): string => {
  const showClass = show ? 'show' : ''

  return addClassesToBase('popover', [showClass, propClasses])
}
