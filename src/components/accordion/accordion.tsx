/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, withViewModel } from 'jaxs'
import { viewModel } from './accordion-view-model'
export { AccordionItem, type AccordionItemProps } from './accordion-item'

export type AccordionTemplateProps = {
  id: string
  class: string
}
export type AccordionProps = JaxsTypes.Props<{
  id: string
  flush?: boolean
}>

export const AccordionTemplate = ({
  id,
  class: className,
  children,
}: JaxsTypes.Props<AccordionTemplateProps>) => {
  return (
    <div class={className} id={id}>
      {children}
    </div>
  )
}

export const Accordion = withViewModel({
  Template: AccordionTemplate,
  viewModel,
})
