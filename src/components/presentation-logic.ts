import { BooleanString } from './types'

type MaybeStringArray = (string | undefined)[]

export const addClassesToBase = (
  baseClasses: string,
  newClasses: MaybeStringArray | string | undefined,
): string => {
  if (!newClasses) return baseClasses

  if (Array.isArray(newClasses)) {
    const filteredClasses = filterClassList(newClasses)
    return `${baseClasses} ${filteredClasses.join(' ')}`.trim()
  }

  return `${baseClasses} ${newClasses}`.trim()
}

const filterClassList = (classList: MaybeStringArray): string[] => {
  return classList.filter(
    (className): className is string =>
      typeof className === 'string' && className.trim() !== '',
  )
}

export const booleanToString = (value: boolean): BooleanString => {
  return value ? 'true' : 'false'
}
