/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { componentName } from './component'
import { StyleVariant } from '../types'
import { alertClassName, buildOnClickEvent } from './presentation-logic'

export type AlertProps = JaxsTypes.Props<{
  message: string
  id: string
  type?: StyleVariant
  dismissible?: boolean
}>

type ButtonProps = JaxsTypes.Props<{
  dismissible: boolean
  onClick: string
}>

const DismissibleButton = ({ dismissible, onClick }: ButtonProps) => {
  if (!dismissible) return

  return (
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={onClick}
    ></button>
  )
}

export const Alert = ({
  id,
  type = 'primary',
  dismissible = false,
  children
}: AlertProps) => {
  const className = alertClassName(type, dismissible)
  const onClick = buildOnClickEvent(id, componentName)

  return (
    <div id={id} class={className} role="alert">
      {children}
      <DismissibleButton dismissible={dismissible} onClick={onClick} />
    </div>
  )
}
