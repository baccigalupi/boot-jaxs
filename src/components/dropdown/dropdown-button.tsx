/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import { Button, ButtonProps } from '@components/button/button'
import { addClassesToBase } from '@components/presentation-logic'

export type DropdownButtonProps = ButtonProps & {
  onClick?: string
  dropdownId: string
}

export const DropdownButton = ({
  class: propsClass,
  dropdownId,
  children,
  ...props
}: DropdownButtonProps) => {
  const classes = addClassesToBase('dropdown-toggle', propsClass)
  const onClick = ``

  return (
    <Button class={classes} onClick={onClick} {...props}>
      {children}
    </Button>
  )
}
