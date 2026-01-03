/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { CloseButton } from '@components/close-button/close-button'
import { addClassesToBase } from '@components/presentation-logic'

export type OffcanvasHeaderProps = JaxsTypes.Props<
  {
    dismissible?: boolean
  } & HTMLAttributes
>

export const OffcanvasHeader = ({
  dismissible = true,
  children,
  class: className,
  ...props
}: OffcanvasHeaderProps) => {
  const classes = addClassesToBase('offcanvas-header', className)
  const onClick = 'something-to-dismiss-offcanvas'

  return (
    <div class={classes} {...props}>
      {children}
      <CloseButton dismissible={dismissible} onClick={onClick} />
    </div>
  )
}
