/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'

export type AlertProps = JaxsTypes.Props<{  
  message: string
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  dismissible?: boolean
}>

type ButtonProps = JaxsTypes.Props<{
  dismissible: boolean,
  onClickEvent: string,
}>;

const DismissibleButton = ({dismissible, onClickEvent}: ButtonProps) => {
  if (!dismissible) return;

  return (
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClickEvent}></button>
  )
}

const dismissibleClass = (dismissible: boolean) => dismissible ? 'alert-dismissible fade show' : ''
const alertClassName = (type: string, dismissible: boolean) => `alert alert-${type} ${dismissibleClass(dismissible)}`

export const Alert = ({ message, type = 'primary', dismissible = false }: AlertProps) => {
  const className = alertClassName(type, dismissible)
  
  return (
    <div class={className} role="alert">
      {message}
      <DismissibleButton dismissible={dismissible} onClickEvent="foo" />
    </div>
  )
}
