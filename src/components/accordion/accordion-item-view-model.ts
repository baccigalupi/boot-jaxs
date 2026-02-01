import { type SubscriptionMap, storeName } from './interactions'
import type {
  AccordionItemProps,
  AccordionItemTemplateProps,
  AccordionItemViewModelProps,
} from './accordion-item'
import { toggle } from './interactions'
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
    const accordions = this.subscriptions[storeName]
    return (accordions[this.accordionId] || []).includes(this.id)
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
    return toggle.eventGenerator(
      this.accordionItemId(this.accordionId, this.id),
    )
  }

  toProps() {
    return {
      triggerClass: this.accordionButtonClass(),
      bodyClass: this.accordionCollapseClass(),
      ariaExpanded: this.ariaExpanded(),
      onClick: this.onClick(),
    }
  }

  private accordionItemId(accordionId: string, itemId: string): string {
    return `${accordionId}:${itemId}`
  }
}

export const viewModel = (
  subscriptions: SubscriptionMap,
  props: AccordionItemProps,
): AccordionItemViewModelProps => {
  return new AccordionViewModel(subscriptions, props).toProps()
}
