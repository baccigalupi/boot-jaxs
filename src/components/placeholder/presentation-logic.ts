import { addClassesToBase } from '@components/presentation-logic'
import {
  PlaceholderAnimations,
  PlaceholderSizes,
  StyleVariant,
} from '@components/types'

type PlaceholderClassProps = {
  size?: PlaceholderSizes
  variant?: StyleVariant
  animation?: PlaceholderAnimations
  propClasses?: string
}

export const widthToStyle = (width?: string | number): string | undefined => {
  if (width === undefined) return undefined
  return typeof width === 'number' ? `width: ${width}%` : `width: ${width}`
}

export const placeholderClass = ({
  size,
  variant,
  animation,
  propClasses,
}: PlaceholderClassProps): string => {
  const sizeClass = size ? `placeholder-${size}` : ''
  const variantClass = variant ? `bg-${variant}` : ''
  const animationClass = animation ? `placeholder-${animation}` : ''

  return addClassesToBase('placeholder', [
    sizeClass,
    variantClass,
    animationClass,
    propClasses,
  ])
}
