/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, StyleVariant } from '../types'
import { listGroupItemInfo } from './presentation-logic'

export type ListGroupItemProps = JaxsTypes.Props<
  { active?: boolean; variant?: StyleVariant } & HTMLAttributes
>

export const ListGroupItem = ({
  children,
  active = false,
  variant,
  class: propClass,
  ...rest
}: ListGroupItemProps) => {
  const info = listGroupItemInfo({ active, propClass, variant })

  return (
    <li class={info.classes()} aria-current={info.ariaCurrent()} {...rest}>
      {children}
    </li>
  )
}
