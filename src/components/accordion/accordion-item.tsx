/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, bind } from 'jaxs'
import { itemToggleInfo } from './item-toggle-info'
import {
  subscriptions,
  viewModel,
  toggle,
  type AccordionState,
} from './interactions'
import { itemIsOpen, accordionItemId } from './presentation-logic'

export type AccordionItemProps = JaxsTypes.Props<{
  id: string
  accordionId: string
  title: string
}>

type AccordionItemTemplateProps = AccordionItemProps & {
  accordions: AccordionState
}

export const AccordionItemTemplate = ({
  accordions,
  id,
  accordionId,
  title,
  children,
}: AccordionItemTemplateProps) => {
  const open = itemIsOpen({ accordions, accordionId, id })
  const toggleInfo = itemToggleInfo(open)
  const onClick = toggle.eventGenerator(accordionItemId(accordionId, id))

  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class={toggleInfo.accordionButtonClass()}
          type="button"
          aria-expanded={toggleInfo.ariaExpanded()}
          aria-controls={id}
          onClick={onClick}
        >
          {title}
        </button>
      </h2>
      <div id={id} class={toggleInfo.accordionCollapseClass()}>
        <div class="accordion-body">{children}</div>
      </div>
    </div>
  )
}

export const AccordionItem = bind({
  Template: AccordionItemTemplate,
  viewModel,
  subscriptions,
})
