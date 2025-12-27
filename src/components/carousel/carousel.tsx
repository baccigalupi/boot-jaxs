/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, CaroselRide } from '../types'
import { caroselClasses } from './presentation-logic'

export { CarouselCaption } from './carousel-caption'
export { CarouselInner } from './carousel-inner'
export { CarouselItem } from './carousel-item'
export { CarouselIndicators } from './carousel-indicators'
export {
  CarouselControls,
  CarouselControlNext,
  CarouselControlPrevious,
} from './carousel-control'

export type CarouselProps = JaxsTypes.Props<
  {
    id: string
    ride?: CaroselRide
    fade?: boolean
    dark?: boolean
  } & HTMLAttributes
>

export const Carousel = ({
  children,
  id,
  ride,
  class: propClasses,
  fade = false,
  dark = false,
  ...rest
}: CarouselProps) => {
  const classes = caroselClasses({ fade, dark, propClasses })

  return (
    <div {...rest} id={id} class={classes}>
      {children}
    </div>
  )
}
