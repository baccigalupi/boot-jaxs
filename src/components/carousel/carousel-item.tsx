/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { caroselItemClasses } from './presentation-logic'

export type CarouselItemProps = JaxsTypes.Props<
  {
    active?: boolean
    interval?: number
  } & HTMLAttributes
>
export const CarouselItem = ({
  children,
  class: propClasses,
  active = false,
  interval,
  ...props
}: CarouselItemProps) => {
  const classNames = caroselItemClasses({ active, propClasses })

  return (
    <div class={classNames} {...props}>
      {children}
    </div>
  )
}
