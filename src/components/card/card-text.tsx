/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

type CardTextProps = JaxsTypes.Props<HTMLAttributes>

export const CardText = ({
  children,
  class: className,
  ...props
}: CardTextProps) => {
  const classes = addClassesToBase('card-text', className)

  return (
    <p class={classes} {...props}>
      {children}
    </p>
  )
}
