/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type CardGroupProps = JaxsTypes.Props<HTMLAttributes>

export const CardGroup = ({
  children,
  class: className,
  ...props
}: CardGroupProps) => {
  const combinedClasses = addClassesToBase('card-group', className)
  return <div {...props} class={combinedClasses}>{children}</div>
}
