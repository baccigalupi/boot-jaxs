/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { placeholderClass } from './presentation-logic'

export type PlaceholderProps = JaxsTypes.Props<
  HTMLAttributes & {
    size?: 'xs' | 'sm' | 'lg'
    color?:
      | 'primary'
      | 'secondary'
      | 'success'
      | 'danger'
      | 'warning'
      | 'info'
      | 'light'
      | 'dark'
    animation?: 'glow' | 'wave'
    width?: string | number
    as?: 'span' | 'div'
  }
>

export const Placeholder = ({
  children,
  size,
  color,
  animation,
  width,
  as = 'span',
  class: propClasses,
  style,
  ...props
}: PlaceholderProps) => {
  const classes = placeholderClass({ size, color, animation, propClasses })

  const widthStyle = width
    ? typeof width === 'number'
      ? `width: ${width}%`
      : `width: ${width}`
    : undefined

  const combinedStyle = [style, widthStyle].filter(Boolean).join('; ')

  const Tag = as

  return (
    <Tag
      class={classes}
      {...(combinedStyle && { style: combinedStyle })}
      {...props}
    >
      {children}
    </Tag>
  )
}
