/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { accordionClass } from './presentation-logic'

export type AccordionProps = JaxsTypes.Props<{
  id: string
  flush?: boolean
}>

export const Accordion = ({ id, children, flush = false }: AccordionProps) => {
  const className = accordionClass({flush})
  
  return (
    <div class={className} id={id}>
      {children}
    </div>
  )
}