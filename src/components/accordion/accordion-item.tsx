/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { itemToggleInfo } from './item-toggle-info'

export type AccordionItemProps = JaxsTypes.Props<{
  open: boolean
  id: string
  title: string
}>

export const AccordionItem = ({
  open,
  id,
  title,
  children,
}: AccordionItemProps) => {
  const toggleInfo = itemToggleInfo(open)

  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class={toggleInfo.accordionButtonClass()}
          type="button"
          aria-expanded={toggleInfo.ariaExpanded()}
          aria-controls={id}
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
