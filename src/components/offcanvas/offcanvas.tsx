/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { offcanvasClassName } from './presentation-logic'
import { booleanToString } from '@components/presentation-logic'

export type OffcanvasProps = JaxsTypes.Props<
  {
    id: string
    placement?: 'start' | 'end' | 'top' | 'bottom'
    show?: boolean
  } & HTMLAttributes
>

export const Offcanvas = ({
  id,
  children,
  placement = 'start',
  show = false,
  class: propClasses,
  ...props
}: OffcanvasProps) => {
  const offcanvasClasses = offcanvasClassName({
    placement,
    show,
    propClasses,
  })
  const ariaHidden = booleanToString(!show)

  return (
    <div
      id={id}
      class={offcanvasClasses}
      tabindex="-1"
      aria-hidden={ariaHidden}
      aria-labelledby={`${id}-label`}
      {...props}
    >
      {children}
    </div>
  )
}

export { OffcanvasHeader } from './offcanvas-header'
export { OffcanvasBody } from './offcanvas-body'
export { OffcanvasTitle } from './offcanvas-title'
