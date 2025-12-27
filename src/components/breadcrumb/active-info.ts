import { addClassesToBase } from '@components/presentation-logic'

export class ActiveInfo {
  active: boolean

  constructor(active: boolean) {
    this.active = active
  }

  activeClass() {
    if (!this.active) return ''

    return 'active'
  }

  itemClass() {
    return addClassesToBase('breadcrumb-item', this.activeClass())
  }

  ariaCurrent() {
    if (!this.active) return undefined

    return 'page'
  }

  useLink(href?: string) {
    return href && !this.active
  }
}

export const getActiveInfo = (active: boolean | undefined) => {
  return new ActiveInfo(!!active)
}
