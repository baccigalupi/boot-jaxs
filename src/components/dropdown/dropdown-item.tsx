/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, bind } from 'jaxs'
import { HTMLAttributes } from '../types'
import { dropdownItemClasses } from './presentation-logic'
import { booleanToString } from '@components/presentation-logic'

export type DropdownItemProps = JaxsTypes.Props<
  {
    href: string
    disabled?: boolean
    currentPath?: string
  } & HTMLAttributes
>

export const DropdownItemTemplate = ({
  href,
  disabled = false,
  children,
  class: className,
  currentPath = '',
  ...props
}: DropdownItemProps) => {
  const active = href === currentPath
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
        onClick="go-to-href"
        aria-current={booleanToString(active)}
        aria-disabled={booleanToString(disabled)}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}

const viewModel = ({ route }: { route: JaxsTypes.RouteState }) => {
  return { currentPath: route.path }
}

export const DropdownItem = bind({
  viewModel,
  Template: DropdownItemTemplate,
  subscriptions: ['route'],
})
