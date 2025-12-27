/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { collapseClasses } from './presentation-logic'

export type CollapseProps = JaxsTypes.Props<
  {
    id: string
    show?: boolean
    horizontal?: boolean
  } & HTMLAttributes
>

export const Collapse = ({
  id,
  show = false,
  horizontal = false,
  children,
  class: className,
  ...props
}: CollapseProps) => {
  const classes = collapseClasses({ show, horizontal, propClasses: className })

  return (
    <div id={id} class={classes} {...props}>
      {children}
    </div>
  )
}
