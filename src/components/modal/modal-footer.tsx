/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type ModalFooterProps = JaxsTypes.Props<HTMLAttributes>

export const ModalFooter = ({
  children,
  class: className,
  ...props
}: ModalFooterProps) => {
  const classes = addClassesToBase('modal-footer', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
