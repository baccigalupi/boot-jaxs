import { addClassesToBase } from '@components/presentation-logic'
import { ButtonVariant, ButtonSize } from '../types'

type ButtonClassProps = {
  variant?: ButtonVariant
  propClass?: string
  outline?: boolean
  size?: ButtonSize
}

export const buttonClass = ({
  variant = 'primary',
  propClass,
  outline = false,
  size,
}: ButtonClassProps): string => {
  const variantClass = outline ? `btn btn-outline-${variant}` : `btn btn-${variant}`
  const sizeClass = size ? `btn-${size}` : ''
  const baseClass = addClassesToBase(variantClass, sizeClass)

  return addClassesToBase(baseClass, propClass)
}
