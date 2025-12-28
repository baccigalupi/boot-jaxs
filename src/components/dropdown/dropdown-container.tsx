/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, ContentDirection } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type DropdownProps = JaxsTypes.Props<
  {
    id: string
    direction?: ContentDirection
    align?: 'start' | 'center'
  } & HTMLAttributes
>

export const Dropdown = ({
  id,
  children,
  class: className,
  ...props
}: DropdownProps) => {
  const classes = addClassesToBase('dropdown', className)

  return (
    <div id={id} class={classes} {...props}>
      {children}
    </div>
  )
}
