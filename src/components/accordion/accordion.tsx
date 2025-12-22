/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { componentName } from './component'

export type AccordionItemProps = {
  id: string
  title: string
  content: string
  expanded?: boolean
}

export type AccordionProps = JaxsTypes.Props<{
  id: string
  items: AccordionItemProps[]
  alwaysOpen?: boolean
  flush?: boolean
}>

type AccordionItemComponentProps = JaxsTypes.Props<{
  item: AccordionItemProps
  accordionId: string
  alwaysOpen: boolean
}>

const buildToggleEvent = (accordionId: string, itemId: string) => 
  `${componentName}:toggle:${accordionId}:${itemId}`

const AccordionItem = ({ item, accordionId, alwaysOpen }: AccordionItemComponentProps) => {
  const { id, title, content, expanded = false } = item
  const headerId = `heading-${accordionId}-${id}`
  const collapseId = `collapse-${accordionId}-${id}`
  const onClick = buildToggleEvent(accordionId, id)
  
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={headerId}>
        <button
          class={`accordion-button${expanded ? '' : ' collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={expanded ? 'true' : 'false'}
          aria-controls={collapseId}
          onClick={onClick}
        >
          {title}
        </button>
      </h2>
      <div
        id={collapseId}
        class={`accordion-collapse collapse${expanded ? ' show' : ''}`}
        aria-labelledby={headerId}
        data-bs-parent={alwaysOpen ? undefined : `#${accordionId}`}
      >
        <div class="accordion-body">
          {content}
        </div>
      </div>
    </div>
  )
}

export const Accordion = ({ id, items, alwaysOpen = false, flush = false }: AccordionProps) => {
  const className = `accordion${flush ? ' accordion-flush' : ''}`
  
  return (
    <div class={className} id={id}>
      {items.map((item) => (
        <AccordionItem item={item} accordionId={id} alwaysOpen={alwaysOpen} />
      ))}
    </div>
  )
}
