/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type CarouselInnerProps = JaxsTypes.Props<HTMLAttributes>

export const CarouselInner = ({
  children,
  class: propsClass,
  ...props
}: CarouselInnerProps) => {
  const classes = addClassesToBase('carousel-inner', propsClass)
  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
