/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import {
  HTMLAttributes,
  PlaceholderAnimations,
  PlaceholderSizes,
  StyleVariant,
} from '../types'
import { placeholderClass, widthToStyle } from './presentation-logic'

export type PlaceholderProps = JaxsTypes.Props<
  HTMLAttributes & {
    size?: PlaceholderSizes
    variant?: StyleVariant
    animation?: PlaceholderAnimations
    width?: string | number
  }
>

export const Placeholder = ({
  children,
  size,
  variant,
  animation,
  width,
  class: propClasses,
  ...props
}: PlaceholderProps) => {
  const classes = placeholderClass({ size, variant, animation, propClasses })
  const widthStyle = widthToStyle(width)

  return (
    <span class={classes} style={widthStyle} {...props}>
      {children}
    </span>
  )
}

export const PlaceholderBlock = ({
  children,
  size,
  variant,
  animation,
  width,
  class: propClasses,
  ...props
}: PlaceholderProps) => {
  const classes = placeholderClass({ size, variant, animation, propClasses })
  const widthStyle = widthToStyle(width)

  return (
    <div class={classes} style={widthStyle} {...props}>
      {children}
    </div>
  )
}
