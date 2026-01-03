/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { toastClass } from './presentation-logic'
export { ToastHeader, type ToastHeaderProps } from './toast-header'
export { ToastBody, type ToastBodyProps } from './toast-body'

export type ToastProps = JaxsTypes.Props<
  {
    class?: string
    show?: boolean
  } & HTMLAttributes
>

export const Toast = ({
  class: propClasses,
  children,
  show = true,
  ...rest 
}: ToastProps) => {
  const className = toastClass({propClasses, show})

  return (
    <div class={className} role="alert" {...rest}>
      {children}
    </div>
  )
}
