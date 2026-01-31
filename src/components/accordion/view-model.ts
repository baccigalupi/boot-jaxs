import { type SubscriptionMap, storeName } from './interactions'
import type {
  AccordionItemProps,
  AccordionItemTemplateProps,
} from './accordion-item'
import { toggle } from './interactions'
import { itemIsOpen, accordionItemId } from './presentation-logic'
import { addClassesToBase } from '@components/presentation-logic'

export class AccordionViewModel {
  subscriptions: SubscriptionMap
  id: string
  accordionId: string

  constructor(
    subscriptions: SubscriptionMap,
    { id, accordionId }: AccordionItemProps,
  ) {
    this.subscriptions = subscriptions
    this.id = id
    this.accordionId = accordionId
  }

  isOpen(): boolean {
    return itemIsOpen({
      accordions: this.subscriptions[storeName],
      id: this.id,
      accordionId: this.accordionId,
    })
  }

  ariaExpanded(): 'true' | 'false' {
    return this.isOpen() ? 'true' : 'false'
  }

  visibilityClass(): string {
    return this.isOpen() ? 'show' : ''
  }

  accordionCollapseClass(): string {
    return addClassesToBase(
      'accordion-collapse collapse',
      this.visibilityClass(),
    )
  }

  accordionButtonClass(): string {
    const collapsedClass = this.isOpen() ? '' : 'collapsed'
    return addClassesToBase('accordion-button', collapsedClass)
  }

  onClick(): string {
    return toggle.eventGenerator(accordionItemId(this.accordionId, this.id))
  }

  toProps() {
    return {
      triggerClass: this.accordionButtonClass(),
      bodyClass: this.accordionCollapseClass(),
      ariaExpanded: this.ariaExpanded(),
      onClick: this.onClick(),
    }
  }
}

export const viewModel = (
  subscriptions: SubscriptionMap,
  props: AccordionItemProps,
): Partial<AccordionItemTemplateProps> => {
  return new AccordionViewModel(subscriptions, props).toProps()
}
