/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'

export type AlertProps = JaxsTypes.Props<{
  message: string
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  dismissible?: boolean
}>

export const Alert = ({ message, type = 'primary', dismissible = false }: AlertProps) => {
  const className = `alert alert-${type}${dismissible ? ' alert-dismissible fade show' : ''}`
  
  return (
    <div class={className} role="alert">
      {message}
      {dismissible && (
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      )}
    </div>
  )
}
