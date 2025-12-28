/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { dropdownItemClasses } from './presentation-logic'
import { booleanToString } from '@components/presentation-logic'

export type DropdownItemProps = JaxsTypes.Props<
  {
    href?: string
    active?: boolean
    disabled?: boolean
    onClick?: string
  } & HTMLAttributes
>

export const DropdownItem = ({
  href,
  active = false,
  disabled = false,
  onClick = 'go-to-href',
  children,
  class: className,
  ...props
}: DropdownItemProps) => {
  const classes = dropdownItemClasses({
    active,
    disabled,
    propClasses: className,
  })

  return (
    <li>
      <a
        class={classes}
        href={href}
        onClick={onClick}
        aria-current={booleanToString(active)}
        aria-disabled={booleanToString(disabled)}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}
