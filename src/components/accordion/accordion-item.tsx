/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, bind, Props } from 'jaxs'
import { subscriptions } from './interactions'
import { viewModel } from './item-view-model'

export type AccordionItemProps = {
  id: string
  accordionId: string
  title: string
}

export type AccordionItemViewModelProps = {
  triggerClass: string
  bodyClass: string
  ariaExpanded: 'true' | 'false'
  onClick: string
}

export type AccordionItemTemplateProps = AccordionItemViewModelProps &
  AccordionItemProps

export const AccordionItemTemplate = ({
  id,
  title,
  children,
  triggerClass,
  bodyClass,
  ariaExpanded,
  onClick,
}: Props<AccordionItemTemplateProps>) => {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class={triggerClass}
          type="button"
          aria-expanded={ariaExpanded}
          aria-controls={id}
          onClick={onClick}
        >
          {title}
        </button>
      </h2>
      <div id={id} class={bodyClass}>
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
