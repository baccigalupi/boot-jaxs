/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type TabContentProps = JaxsTypes.Props<HTMLAttributes>

export const TabContent = ({ children, class: className, ...props }: TabContentProps) => {
  const classes = addClassesToBase('tab-content', className)

  return (
    <div class={classes} {...props}>
      {children}
    </div>
  )
}
