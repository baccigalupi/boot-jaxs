/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type CarouselCaptionProps = JaxsTypes.Props<HTMLAttributes>

export const CarouselCaption = ({
  children,
  class: className,
  ...props
}: CarouselCaptionProps) => {
  const classes = addClassesToBase(
    'carousel-caption d-none d-md-block',
    className,
  )

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
