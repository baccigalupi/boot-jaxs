/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type CardBodyProps = JaxsTypes.Props<HTMLAttributes>

export const CardBody = ({
  children,
  class: className,
  ...props
}: CardBodyProps) => {
  const classes = addClassesToBase('card-body', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
