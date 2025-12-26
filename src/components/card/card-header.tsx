/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type CardHeaderProps = JaxsTypes.Props<HTMLAttributes>

export const CardHeader = ({
  children,
  class: className,
  ...props
}: CardHeaderProps) => {
  const classes = addClassesToBase('card-header', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
