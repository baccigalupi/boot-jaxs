/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes, BooleanString } from '../types'
import { createIndicatorsInfo } from './indicators-info'
import { addClassesToBase } from '@components/presentation-logic'
import { Map } from '@components/map'

export type CarouselIndicatorsProps = JaxsTypes.Props<
  {
    numberOfSlides: number
    currentSlide?: number
  } & HTMLAttributes
>

export const CarouselIndicators = ({
  numberOfSlides,
  currentSlide = 0,
  class: propClasses,
  ...props
}: CarouselIndicatorsProps) => {
  const indicators = createIndicatorsInfo({ numberOfSlides, currentSlide })
  const classes = addClassesToBase('carousel-indicators', propClasses)

  return (
    <div class={classes} {...props}>
      <Map items={indicators} component={IndicatorButton} />
    </div>
  )
}

type IndicatorButtonProps = JaxsTypes.Props<{
  class: string
  ariaCurrent: BooleanString
  ariaLabel: string
}>
const IndicatorButton = ({
  class: propsClasses,
  ariaCurrent,
  ariaLabel,
}: IndicatorButtonProps) => {
  // Note attribute 'data-bs-target' this is required by Bootstrap for styling,
  // but Jaxs stores the data in other ways.
  return (
    <button
      type="button"
      class={propsClasses}
      aria-current={ariaCurrent}
      aria-label={ariaLabel}
      data-bs-target="allow-carousel-styling"
    />
  )
}
