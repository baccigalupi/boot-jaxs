/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import {
  addClassesToBase,
  booleanToString,
} from '@components/presentation-logic'
import { HTMLAttributes } from '../types'

export type ListGroupActionItemProps = JaxsTypes.Props<
  {
    active?: boolean
    onClick: string
    href?: string
  } & HTMLAttributes
>

export const ListGroupActionItem = ({
  children,
  active = false,
  disabled = false,
  class: propClass,
  ...rest
}: ListGroupActionItemProps) => {
  const activeClass = active ? 'active' : ''
  const disabledClass = disabled ? 'disabled' : ''
  const ariaCurrent = booleanToString(active)
  const ariaDisabled = booleanToString(disabled)
  const className = addClassesToBase('list-group-item list-group-item-action', [
    activeClass,
    disabledClass,
    propClass,
  ])

  return (
    <a
      class={className}
      aria-current={ariaCurrent}
      aria-disabled={ariaDisabled}
      {...rest}
    >
      {children}
    </a>
  )
}
