import { addClassesToBase } from '@components/presentation-logic'

export class ItemToggleInfo {
  open: boolean

  constructor(open: boolean) {
    this.open = open
  }

  ariaExpanded(): string {
    return this.open ? 'true' : 'false'
  }

  visibilityClass(): string {
    return this.open ? 'show' : ''
  }

  accordionCollapseClass(): string {
    return addClassesToBase(
      'accordion-collapse collapse',
      this.visibilityClass(),
    )
  }

  accordionButtonClass(): string {
    const collapsedClass = this.open ? '' : 'collapsed'
    return addClassesToBase('accordion-button', collapsedClass)
  }
}

export const itemToggleInfo = (open: boolean): ItemToggleInfo => {
  return new ItemToggleInfo(open)
}
