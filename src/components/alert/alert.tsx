/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, bind } from 'jaxs'
import { HTMLAttributes, StyleVariant } from '../types'
import { alertClassName, hideAlert } from './presentation-logic'
import {
  viewModel,
  remove,
  viewModelSubscriptions,
  type AlertsState,
} from './interactions'
import { CloseButton } from '@components/close-button/close-button'

export type AlertProps = JaxsTypes.Props<
  {
    id: string
    variant?: StyleVariant
    dismissible?: boolean
    alerts: AlertsState
  } & HTMLAttributes
>

export const AlertTemplate = ({
  id,
  alerts = [],
  variant = 'primary',
  dismissible = false,
  class: propClasses,
  children,
}: AlertProps) => {
  if (hideAlert(alerts, id, dismissible)) return

  const className = alertClassName(variant, dismissible, propClasses)
  const onClick = remove.eventGenerator(id)

  return (
    <div id={id} class={className} role="alert">
      {children}
      <CloseButton dismissible={dismissible} onClick={onClick} />
    </div>
  )
}

export const Alert = bind({
  Template: AlertTemplate,
  viewModel,
  subscriptions: viewModelSubscriptions,
})
