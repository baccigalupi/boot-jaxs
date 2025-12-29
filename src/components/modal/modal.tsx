/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { modalClassName } from './presentation-logic'

export type ModalProps = JaxsTypes.Props<
  {
    id: string
    visible?: boolean
  } & HTMLAttributes
>

export const Modal = ({
  id,
  children,
  class: propClasses,
  visible = false,
  ...props
}: ModalProps) => {
  const modalClasses = modalClassName({visible, propClasses})
  const ariaHidden = visible ? 'false' : 'true'
  // TODO: aria-labelledby should point to the id of the modal title

  return (
    <div
      id={id}
      class={modalClasses}
      tabindex="-1"
      aria-hidden={ariaHidden}
      aria-modal={visible}
      role="dialog"
      {...props}
    >
      {children}
    </div>
  )
}

export { ModalContent } from './modal-content'
export { ModalHeader } from './modal-header'
export { ModalBody } from './modal-body'
export { ModalFooter } from './modal-footer'
