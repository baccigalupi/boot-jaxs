import { Breakpoint, StyleVariant } from '@components/types'
import type { ListGroupCustomizations } from './list-group'
import {
  addClassesToBase,
  booleanToString,
} from '@components/presentation-logic'

type ListGroupClassesArguments = ListGroupCustomizations & {
  propClass?: string
}
export const listGroupClasses = ({
  horizontal,
  numbered,
  flush,
  propClass,
}: ListGroupClassesArguments) => {
  const horizontalClasses = horizontalListGroupClasses(horizontal)
  const numberedClass = numbered ? 'list-group-numbered' : ''
  const flushClass = flush ? 'list-group-flush' : ''

  return addClassesToBase('list-group', [
    flushClass,
    numberedClass,
    horizontalClasses,
    propClass,
  ])
}

export const horizontalListGroupClasses = (
  horizontal: boolean | Breakpoint | Breakpoint[] | undefined,
) => {
  if (!horizontal) {
    return ''
  }
  if (horizontal === true) {
    return 'list-group-horizontal'
  } else if (Array.isArray(horizontal)) {
    return horizontal
      .map((breakpoint) => `list-group-horizontal-${breakpoint}`)
      .join(' ')
  } else {
    return `list-group-horizontal-${horizontal}`
  }
}

export type ListGroupItemInfoArgs = {
  active: boolean
  propClass?: string
  variant?: StyleVariant
}
export class ListGroupItemInfo {
  active: boolean
  propClass?: string
  variant?: StyleVariant

  constructor({ active, propClass, variant }: ListGroupItemInfoArgs) {
    this.active = active
    this.propClass = propClass
    this.variant = variant
  }

  ariaCurrent() {
    return booleanToString(this.active)
  }

  activeClass() {
    return this.active ? 'active' : ''
  }

  variantClass() {
    return this.variant ? `list-group-item-${this.variant}` : ''
  }

  classes() {
    return addClassesToBase('list-group-item', [
      this.activeClass(),
      this.variantClass(),
      this.propClass,
    ])
  }
}

export const listGroupItemInfo = (args: ListGroupItemInfoArgs) => {
  return new ListGroupItemInfo(args)
}
