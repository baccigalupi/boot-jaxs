/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type CarouselControlProps = JaxsTypes.Props<
  {
    target: string
    direction: 'prev' | 'next'
  } & HTMLAttributes
>

export const CarouselControl = ({
  target,
  direction,
  ...props
}: CarouselControlProps) => {
  const label = direction === 'prev' ? 'Previous' : 'Next'

  return (
    <button class={`carousel-control-${direction}`} type="button" {...props}>
      <span class={`carousel-control-${direction}-icon`} aria-hidden="true" />
      <span class="visually-hidden">{label}</span>
    </button>
  )
}

export const CarouselControlPrevious = (
  props: JaxsTypes.Props<HTMLAttributes>,
) => {
  const classes = addClassesToBase('carousel-control-prev', props.class)
  const label = 'Previous'

  return (
    <button class={classes} type="button" {...props}>
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">{label}</span>
    </button>
  )
}
export const CarouselControlNext = (props: JaxsTypes.Props<HTMLAttributes>) => {
  const classes = addClassesToBase('carousel-control-next', props.class)
  const label = 'Next'

  return (
    <button class={classes} type="button" {...props}>
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">{label}</span>
    </button>
  )
}

export const CarouselControls = (props: JaxsTypes.Props<HTMLAttributes>) => {
  return (
    <>
      <CarouselControlPrevious {...props} />
      <CarouselControlNext {...props} />
    </>
  )
}
