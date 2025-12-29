/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { modalDialogClassName } from './presentation-logic'

export type ModalContentProps = JaxsTypes.Props<
  {
    scrollable?: boolean
  } & HTMLAttributes
>

export const ModalContent = ({
  children,
  class: className,
  scrollable = false,
  ...props
}: ModalContentProps) => {
  const dialogClasses = modalDialogClassName({ scrollable, propClasses: className })

  return (
    <div class={dialogClasses} {...props}>
      <div class='modal-content'>{children}</div>
    </div>
  )
}
