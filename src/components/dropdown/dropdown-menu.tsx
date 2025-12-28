/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'

export type DropdownMenuProps = JaxsTypes.Props<
  { show?: boolean } & HTMLAttributes
>

export const DropdownMenu = ({
  show = false,
  children,
  class: className,
  ...props
}: DropdownMenuProps) => {
  const baseClass =
    'dropdown-menu dropdown-menu-base dropdown-menu-direction-down'
  const showClass = show ? 'show' : ''
  const classes = addClassesToBase(baseClass, [showClass, className])

  return (
    <ul class={classes} {...props}>
      {children}
    </ul>
  )
}

export const DropUpMenu = ({
  show,
  class: className,
  children,
  ...props
}: DropdownMenuProps) => {
  const baseClass =
    'dropdown-menu dropdown-menu-base dropdown-menu-direction-up'
  const showClass = show ? 'show' : ''
  const classes = addClassesToBase(baseClass, [showClass, className])

  return (
    <ul class={classes} {...props}>
      {children}
    </ul>
  )
}

export const DropEndMenu = ({
  show,
  class: className,
  children,
  ...props
}: DropdownMenuProps) => {
  const baseClass =
    'dropdown-menu dropdown-menu-base dropdown-menu-direction-end'
  const showClass = show ? 'show' : ''
  const classes = addClassesToBase(baseClass, [showClass, className])

  return (
    <ul class={classes} {...props}>
      {children}
    </ul>
  )
}

export const DropStartMenu = ({
  show,
  class: className,
  children,
  ...props
}: DropdownMenuProps) => {
  const baseClass =
    'dropdown-menu dropdown-menu-base dropdown-menu-direction-start'
  const showClass = show ? 'show' : ''
  const classes = addClassesToBase(baseClass, [showClass, className])

  return (
    <ul class={classes} {...props}>
      {children}
    </ul>
  )
}
