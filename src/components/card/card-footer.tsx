/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type CardFooterProps = JaxsTypes.Props<HTMLAttributes>

export const CardFooter = ({
  children,
  class: className,
  ...props
}: CardFooterProps) => {
  const classes = addClassesToBase('card-footer', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
