/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { offcanvasClassName } from './presentation-logic'

export type OffcanvasProps = JaxsTypes.Props<
  {
    id: string
    placement?: 'start' | 'end' | 'top' | 'bottom'
    visible?: boolean
    backdrop?: boolean
    scroll?: boolean
  } & HTMLAttributes
>

export const Offcanvas = ({
  id,
  children,
  placement = 'start',
  visible = false,
  backdrop = true,
  scroll = false,
  class: propClasses,
  ...props
}: OffcanvasProps) => {
  const offcanvasClasses = offcanvasClassName({
    placement,
    visible,
    propClasses,
  })
  const ariaHidden = visible ? 'false' : 'true'

  return (
    <div
      id={id}
      class={offcanvasClasses}
      tabindex="-1"
      aria-hidden={ariaHidden}
      aria-labelledby={`${id}-label`}
      data-bs-backdrop={backdrop ? 'true' : 'false'}
      data-bs-scroll={scroll ? 'true' : 'false'}
      {...props}
    >
      {children}
    </div>
  )
}

export { OffcanvasHeader } from './offcanvas-header'
export { OffcanvasBody } from './offcanvas-body'
export { OffcanvasTitle } from './offcanvas-title'
