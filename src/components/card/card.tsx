/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type CardProps = JaxsTypes.Props<HTMLAttributes>

export const Card = ({ children, class: className, ...props }: CardProps) => {
  const classes = addClassesToBase('card', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
