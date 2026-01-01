/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { CloseButton } from '@components/close-button/close-button'
import { addClassesToBase } from '@components/presentation-logic'

type OffcanvasHeaderCloseButtonProps = {
  show: boolean
}

const OffcanvasHeaderCloseButton = ({ show }: OffcanvasHeaderCloseButtonProps) => {
  if (!show) return

  return <CloseButton data-bs-dismiss="offcanvas" aria-label="Close" />
}

export type OffcanvasHeaderProps = JaxsTypes.Props<
  {
    closeButton?: boolean
  } & HTMLAttributes
>

export const OffcanvasHeader = ({
  closeButton = true,
  children,
  class: className,
  ...props
}: OffcanvasHeaderProps) => {
  const classes = addClassesToBase('offcanvas-header', className)

  return (
    <div class={classes} {...props}>
      {children}
      <OffcanvasHeaderCloseButton show={closeButton} />
    </div>
  )
}
