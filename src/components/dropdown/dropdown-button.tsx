/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx } from 'jaxs'
import { Button, ButtonProps } from '@components/button/button'
import { addClassesToBase } from '@components/presentation-logic'

export const DropdownButton = ({
  class: propsClass,
  onClick,
  ...props
}: ButtonProps) => {
  const classes = addClassesToBase('dropdown-toggle', propsClass)
  return <Button {...props} class={classes} onClick={onClick} />
}
