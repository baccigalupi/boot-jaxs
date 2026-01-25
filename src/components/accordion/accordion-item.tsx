/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, bind } from 'jaxs'
import { subscriptions } from './interactions'
import { viewModel } from './view-model'

export type AccordionItemProps = {
  id: string
  accordionId: string
  title: string
}

export type AccordionItemTemplateProps = JaxsTypes.Props<{
  id: string
  title: string
  triggerClass: string
  bodyClass: string
  ariaExpanded: 'true' | 'false'
  onClick: string
}>

export const AccordionItemTemplate = ({
  id,
  title,
  children,
  triggerClass,
  bodyClass,
  ariaExpanded,
  onClick,
}: AccordionItemTemplateProps) => {
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
