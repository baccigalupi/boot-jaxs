/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type ModalBodyProps = JaxsTypes.Props<HTMLAttributes>

export const ModalBody = ({
  children,
  class: className,
  ...props
}: ModalBodyProps) => {
  const classes = addClassesToBase('modal-body', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
