/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { tabPaneClass } from './presentation-logic'

export type TabPaneProps = JaxsTypes.Props<
  HTMLAttributes & {
    id: string
    active?: boolean
    fade?: boolean
  }
>

export const TabPane = ({
  children,
  id,
  active = false,
  fade = true,
  class: className,
  ...props
}: TabPaneProps) => {
  const show = active && fade
  const classes = tabPaneClass({ active, fade, show })
  const finalClasses = className ? `${classes} ${className}` : classes

  return (
    <div
      class={finalClasses}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      {...props}
    >
      {children}
    </div>
  )
}
