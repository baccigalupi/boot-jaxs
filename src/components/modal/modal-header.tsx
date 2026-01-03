/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { CloseButton } from '@components/close-button/close-button'
import { addClassesToBase } from '@components/presentation-logic'

export type ModalHeaderProps = JaxsTypes.Props<
  {
    dismissible?: boolean
    onCloseClick?: string
  } & HTMLAttributes
>

export const ModalHeader = ({
  dismissible = true,
  onCloseClick = 'dismiss-modal',
  children,
  class: className,
  ...props
}: ModalHeaderProps) => {
  const classes = addClassesToBase('modal-header', className)

  return (
    <div class={classes} {...props}>
      {children}
      <CloseButton show={dismissible} onClick={onCloseClick} />
    </div>
  )
}
