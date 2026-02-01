import { addClassesToBase } from '@components/presentation-logic'

type AccordionClassProps = {
  flush?: boolean
}

export const accordionClass = ({ flush }: AccordionClassProps) => {
  const flushClass = flush ? 'accordion-flush' : ''
  return addClassesToBase('accordion', flushClass)
}
