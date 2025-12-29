/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { addClassesToBase } from '@components/presentation-logic'
import { Breakpoint, HTMLAttributes } from '../types'
import { horizontalListGroupClasses } from './presentation-logic'
export { ListGroupActionItem } from './list-group-action-item'
export { ListGroupItem } from './list-group-item'

export type ListGroupCustomizations = {
  flush?: boolean
  numbered?: boolean
  horizontal?: boolean | Breakpoint | Breakpoint[]
}
export type ListGroupProps = JaxsTypes.Props<
  ListGroupCustomizations & HTMLAttributes
>

export const ListGroup = ({
  children,
  class: propClass,
  numbered = false,
  flush = false,
  horizontal = false,
  ...rest
}: ListGroupProps) => {
  const horizontalClasses = horizontalListGroupClasses(horizontal)
  const numberedClass = numbered ? 'list-group-numbered' : ''
  const flushClass = flush ? 'list-group-flush' : ''
  const className = addClassesToBase('list-group', [
    flushClass,
    numberedClass,
    horizontalClasses,
    propClass,
  ])

  return (
    <ul class={className} {...rest}>
      {children}
    </ul>
  )
}
