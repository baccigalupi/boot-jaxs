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

export const heightStyle = (height?: string | number): string => {
  if (height === undefined) return ''
  if (typeof height === 'number') return `height: ${height}px`
  return `height: ${height}`
}

export const widthStyle = ({
  value,
  min,
  max,
}: {
  value: number
  min: number
  max: number
}): string => {
  const range = max - min
  if (range === 0) return 'width: 0%'

  const percentage = ((value - min) / range) * 100
  return `width: ${percentage}%`
}
