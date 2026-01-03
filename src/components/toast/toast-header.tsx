/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { toastHeaderClass } from './presentation-logic'
import { CloseButton } from '@components/close-button/close-button'

export type ToastHeaderProps = JaxsTypes.Props<
  {
    dismissible?: boolean
    onClick: string
  } & HTMLAttributes
>

export const ToastHeader = ({
  dismissible = true,
  onClick,
  class: propClasses,
  children,
  ...rest
}: ToastHeaderProps) => {
  const className = toastHeaderClass(propClasses)

  return (
    <div class={className} {...rest}>
      {children}
      <CloseButton dismissible={dismissible} onClick={onClick} />
    </div>
  )
}
