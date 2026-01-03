/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type OffcanvasTitleProps = JaxsTypes.Props<
  HTMLAttributes & {
    id?: string
  }
>

export const OffcanvasTitle = ({
  children,
  id,
  class: className,
  ...props
}: OffcanvasTitleProps) => {
  const classes = addClassesToBase('offcanvas-title', className)

  return (
    <h5 class={classes} id={id} {...props}>
      {children}
    </h5>
  )
}
