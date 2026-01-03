import { addClassesToBase } from '@components/presentation-logic'
import { StyleVariant } from '../types'

type ProgressBarClassProps = {
  striped?: boolean
  animated?: boolean
  variant?: StyleVariant
  propClasses?: string
}

export const progressBarClass = ({
  striped,
  animated,
  variant,
  propClasses,
}: ProgressBarClassProps): string => {
  const variantClass = variant ? `bg-${variant}` : ''
  const stripedClass = striped || animated ? 'progress-bar-striped' : ''
  const animatedClass = animated ? 'progress-bar-animated' : ''

  return addClassesToBase('progress-bar', [
    variantClass,
    stripedClass,
    animatedClass,
    propClasses,
  ])
}
