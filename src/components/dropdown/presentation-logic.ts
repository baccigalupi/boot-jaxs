import { addClassesToBase } from '@components/presentation-logic'
import { buttonClass } from '@components/button/presentation-logic'
import { ButtonVariant, Size } from '../types'

type DropdownToggleClassArguments = {
  variant?: ButtonVariant
  size?: Size
  split?: boolean
  propClasses?: string
}

export const dropdownToggleClasses = ({
  variant = 'primary',
  size,
  split,
  propClasses,
}: DropdownToggleClassArguments) => {
  const buttonClasses = buttonClass({ variant, size, propClass: undefined })
  const dropdownClass = split ? 'dropdown-toggle-split' : 'dropdown-toggle'

  return addClassesToBase(buttonClasses, [dropdownClass, propClasses])
}

type DropdownItemClassArguments = {
  active?: boolean
  disabled?: boolean
  propClasses?: string
}

export const dropdownItemClasses = ({
  active = false,
  disabled = false,
  propClasses,
}: DropdownItemClassArguments) => {
  const baseClass = 'dropdown-item'
  const activeClass = active ? 'active' : ''
  const disabledClass = disabled ? 'disabled' : ''

  return addClassesToBase(baseClass, [activeClass, disabledClass, propClasses])
}
