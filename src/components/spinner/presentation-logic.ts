import { addClassesToBase } from '@components/presentation-logic'
import { StyleVariant } from '../types'

type SpinnerClassProps = {
  type?: 'border' | 'grow'
  size?: 'sm'
  variant?: StyleVariant
  propClasses?: string
}

export const spinnerClass = ({
  type = 'border',
  size,
  variant,
  propClasses,
}: SpinnerClassProps): string => {
  const typeClass = `spinner-${type}`
  const sizeClass = size ? `spinner-${type}-${size}` : ''
  const variantClass = variant ? `text-${variant}` : ''

  return addClassesToBase('spinner', [
    typeClass,
    sizeClass,
    variantClass,
    propClasses,
  ])
}
