/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { navClass } from './presentation-logic'

export type NavProps = JaxsTypes.Props<HTMLAttributes & {
  tabs?: boolean
  pills?: boolean
  underline?: boolean
  fill?: boolean
  justified?: boolean
  vertical?: boolean
}>

export const Nav = ({
  children,
  tabs = false,
  pills = false,
  underline = false,
  fill = false,
  justified = false,
  vertical = false,
  class: className,
  ...props
}: NavProps) => {
  const classes = navClass({ tabs, pills, underline, fill, justified, vertical })
  const finalClasses = className ? `${classes} ${className}` : classes

  return (
    <ul class={finalClasses} role="tablist" {...props}>
      {children}
    </ul>
  )
}
