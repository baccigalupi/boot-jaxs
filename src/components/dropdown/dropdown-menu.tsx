/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, bind } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '@components/presentation-logic'
import { dropdownStoreName, type DropdownsState } from './interactions'

export type DropDirection = 'down' | 'up' | 'end' | 'start'

export type DropdownMenuProps = JaxsTypes.Props<
  {
    dropDirection?: DropDirection
    dropdownId: string
    dropdowns: DropdownsState
  } & HTMLAttributes
>

export const DropdownMenuTemplate = ({
  dropDirection = 'down',
  dropdownId,
  dropdowns,
  children,
  class: className,
  ...props
}: DropdownMenuProps) => {
  const baseClass = `dropdown-menu dropdown-menu-base dropdown-menu-direction-${dropDirection}`
  const show = dropdowns.includes(dropdownId)
  const showClass = show ? 'show' : ''
  const classes = addClassesToBase(baseClass, [showClass, className])

  return (
    <ul class={classes} {...props}>
      {children}
    </ul>
  )
}

export const menuViewModel = (subscriptions: {[dropdownStoreName]: DropdownsState}) => {
  const dropdowns = subscriptions[dropdownStoreName]
  return { dropdowns }
}

// TODO: subscriptions etc are rough in Jaxs.
// - subscriptions should be passed to the view model in an easier way.
//   using the store as a key is cumbersome as a type.
// - alternatively the if the template props were avaibale in the view model less
//   logic would need to be extracted out of there.
export const DropdownMenu = bind({
  Template: DropdownMenuTemplate,
  viewModel: menuViewModel,
  subscriptions: [dropdownStoreName],
})
