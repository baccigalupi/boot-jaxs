/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { Button, ButtonProps } from '@components/button/button'
import { addClassesToBase } from '@components/presentation-logic'
import { generateToggleEvent } from './interactions'

export type DropdownButtonProps = JaxsTypes.Props<
  {
    dropdownId: string
  } & Omit<ButtonProps, 'onClick'>
>
export const DropdownButton = ({
  class: propsClass,
  dropdownId,
  children,
  ...props
}: DropdownButtonProps) => {
  const classes = addClassesToBase('dropdown-toggle', propsClass)
  const onClick = generateToggleEvent(dropdownId)

  return (
    <Button class={classes} onClick={onClick} {...props}>
      {children}
    </Button>
  )
}
