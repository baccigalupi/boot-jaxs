/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { componentName } from './component'
import { StyleVariant } from '../types'

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

const dismissibleClass = (dismissible: boolean) =>
  dismissible ? 'alert-dismissible fade show' : ''
const alertClassName = (type: string, dismissible: boolean) =>
  `alert alert-${type} ${dismissibleClass(dismissible)}`
const buildOnClickEvent = (id: string) => `${componentName}:close:${id}`

export const Alert = ({
  message,
  id,
  type = 'primary',
  dismissible = false,
}: AlertProps) => {
  const className = alertClassName(type, dismissible)
  const onClick = buildOnClickEvent(id)

  return (
    <div id={id} class={className} role="alert">
      {message}
      <DismissibleButton dismissible={dismissible} onClick={onClick} />
    </div>
  )
}
