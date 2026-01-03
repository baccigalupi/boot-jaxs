/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'
import { heightStyle } from './presentation-logic'

export type ProgressProps = JaxsTypes.Props<
  HTMLAttributes & {
    height?: string | number
  }
>

export const Progress = ({
  children,
  height,
  class: propClasses,
  ...props
}: ProgressProps) => {
  const classes = addClassesToBase('progress', propClasses)
  const style = heightStyle(height)

  return (
    <div
      class={classes}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

export { ProgressBar } from './progress-bar'
