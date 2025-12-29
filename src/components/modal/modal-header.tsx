/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { CloseButton } from '@components/close-button/close-button'
import { addClassesToBase } from '@components/presentation-logic'

type ModalHeaderCloseButtonProps = {
  show: boolean
}

const ModalHeaderCloseButton = ({
  show,
}: ModalHeaderCloseButtonProps) => {
  if (!show) return

  return <CloseButton aria-label="Close" />
}

export type ModalHeaderProps = JaxsTypes.Props<
  {
    closeButton?: boolean
  } & HTMLAttributes
>

export const ModalHeader = ({
  closeButton = true,
  children,
  class: className,
  ...props
}: ModalHeaderProps) => {
  const classes = addClassesToBase('modal-header', className)

  return (
    <div class={classes} {...props}>
      {children}
      <ModalHeaderCloseButton show={closeButton} />
    </div>
  )
}
