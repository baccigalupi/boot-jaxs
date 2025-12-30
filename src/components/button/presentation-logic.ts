import { addClassesToBase } from '@components/presentation-logic'
import { ButtonVariant, Size } from '../types'

type ButtonClassProps = {
  variant?: ButtonVariant
  propClass?: string
  outline?: boolean
  size?: Size
}

export const buttonClass = ({
  variant = 'primary',
  propClass,
  outline = false,
  size,
}: ButtonClassProps): string => {
  const sizeClass = size ? `btn-${size}` : ''
  const variantClass = calculateVariantClass(variant, outline)
  return addClassesToBase('btn', [variantClass, sizeClass, propClass])
}

const calculateVariantClass = (
  variant: ButtonVariant,
  outline: boolean,
): string => {
  if (variant === 'none') {
    return ''
  } else if (outline) {
    return `btn-outline-${variant}`
  } else {
    return `btn-${variant}`
  }
}
