import { type SubscriptionMap, storeName } from './interactions'
import type {
  AccordionItemProps,
  AccordionItemTemplateProps,
} from './accordion-item'
import { itemToggleInfo } from './item-toggle-info'
import { toggle } from './interactions'
import { itemIsOpen, accordionItemId } from './presentation-logic'

export const viewModel = (
  subscriptions: SubscriptionMap,
  { id, accordionId }: AccordionItemProps,
): Partial<AccordionItemTemplateProps> => {
  const isOpen = itemIsOpen({
    accordions: subscriptions[storeName],
    id,
    accordionId,
  })
  const toggleInfo = itemToggleInfo(isOpen)
  const itemId = accordionItemId(accordionId, id)

  return {
    triggerClass: toggleInfo.accordionButtonClass(),
    bodyClass: toggleInfo.accordionCollapseClass(),
    ariaExpanded: toggleInfo.ariaExpanded(),
    onClick: toggle.eventGenerator(itemId),
  }
}
