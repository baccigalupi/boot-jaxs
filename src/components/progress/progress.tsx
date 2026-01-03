/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type ProgressProps = JaxsTypes.Props<
  HTMLAttributes & {
    height?: string | number
  }
>

export const Progress = ({
  children,
  height,
  class: propClasses,
  style,
  ...props
}: ProgressProps) => {
  const classes = addClassesToBase('progress', propClasses)

  const heightStyle = height
    ? typeof height === 'number'
      ? `height: ${height}px`
      : `height: ${height}`
    : undefined

  const combinedStyle = [style, heightStyle].filter(Boolean).join('; ')

  return (
    <div
      class={classes}
      {...(combinedStyle && { style: combinedStyle })}
      {...props}
    >
      {children}
    </div>
  )
}

export { ProgressBar } from './progress-bar'
