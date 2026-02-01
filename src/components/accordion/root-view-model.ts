import { addClassesToBase } from '@components/presentation-logic'

export type AccordionViewModelProps = {
  flush?: boolean
  class?: string
}
export const viewModel = ({
  flush = false,
  class: propsClass,
}: AccordionViewModelProps) => {
  const flushClass = flush ? 'accordion-flush' : ''
  const accordionClass = addClassesToBase('accordion', [flushClass, propsClass])

  return {
    class: accordionClass,
  }
}
