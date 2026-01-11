import { addClassesToBase } from '@components/presentation-logic'
import { AccordionState } from './interactions'

type AccordionClassProps = {
  flush?: boolean
}

export const accordionClass = ({ flush }: AccordionClassProps) => {
  const flushClass = flush ? 'accordion-flush' : ''
  return addClassesToBase('accordion', flushClass)
}

export const accordionItemId = (accordionId: string, itemId: string) => {
  return `${accordionId}:${itemId}`
}

export const idsFromString = (idString: string) => {
  const [accordionId, itemId] = idString.split(':')
  return { accordionId, itemId }
}

type itemIsOpenArguments = {
  accordions: AccordionState
  accordionId: string
  id: string
}
export const itemIsOpen = ({
  accordions,
  accordionId,
  id,
}: itemIsOpenArguments) => (accordions[accordionId] || []).includes(id)
