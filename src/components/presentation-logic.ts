import { HTMLAttributes } from "./types"

export const addClassesToBase = (baseClasses: string, newClasses: string | undefined): string => {
  if (!newClasses) return baseClasses

  return `${baseClasses} ${newClasses}`.trim()
}
