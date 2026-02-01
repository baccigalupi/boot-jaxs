/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, bind } from 'jaxs'
import { HTMLAttributes, StyleVariant } from '../types'
import { subscriptions } from './interactions'
import { viewModel } from './view-model'
import { CloseButton } from '@components/close-button/close-button'

export type AlertProps = {
  id: string
  variant?: StyleVariant
  dismissible?: boolean
} & HTMLAttributes

export type AlertTemplateProps = {
  id: string
  class: string
  show: boolean
  dismissible: boolean
  onClick: string
}

export const AlertTemplate = ({
  id,
  class: className,
  show,
  dismissible,
  onClick,
  children,
}: JaxsTypes.Props<AlertTemplateProps>) => {
  if (!show) return

  return (
    <div id={id} class={className} role="alert">
      {children}
      <CloseButton show={dismissible} onClick={onClick} />
    </div>
  )
}

export const Alert = bind({
  Template: AlertTemplate,
  viewModel,
  subscriptions,
})
