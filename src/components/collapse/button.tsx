/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { HTMLAttributes } from '@components/types'
import { jsx, JaxsTypes } from 'jaxs'
import { toggle } from './interactions'
import { Button } from '@components/button/button'

export type CollapseButtonProps = JaxsTypes.Props<
  {
    collapseId: string
  } & HTMLAttributes
>

export const CollapseButton = ({
  children,
  class: propClasses,
  collapseId,
  ...props
}: CollapseButtonProps) => {
  const onClick = toggle.eventGenerator(collapseId)
  const ariaControls = collapseId
  const ariaExpanded = false // TODO: derive from state

  return (
    <Button
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      class={propClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  )
}
