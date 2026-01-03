/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { toastBodyClass } from './presentation-logic'

export type ToastBodyProps = JaxsTypes.Props<HTMLAttributes>

export const ToastBody = ({ class: propClasses, children, ...rest }: ToastBodyProps) => {
  const className = toastBodyClass(propClasses)

  return (
    <div class={className} {...rest}>
      {children}
    </div>
  )
}
