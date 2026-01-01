/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type OffcanvasBodyProps = JaxsTypes.Props<HTMLAttributes>

export const OffcanvasBody = ({
  children,
  class: className,
  ...props
}: OffcanvasBodyProps) => {
  const classes = addClassesToBase('offcanvas-body', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
