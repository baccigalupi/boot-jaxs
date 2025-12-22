/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { buttonClass } from './presentation-logic'
import { ButtonVariant, ButtonType, ButtonSize, HTMLAttributes } from '../types'

export type ButtonProps = JaxsTypes.Props<{
  label?: string
  variant?: ButtonVariant
  size?: ButtonSize
  outline?: boolean
  disabled?: boolean
  type?: ButtonType
  onClick?: string
} & HTMLAttributes>

export const Button = (props: ButtonProps) => {
  const{ 
    variant = 'primary', 
    size, 
    outline = false, 
    disabled = false,
    type = 'button',
    onClick,
    children,
    class: propClass,
    ...rest
  } = props

  const className = buttonClass({variant, outline, size, propClass})
  
  return (
    <button 
      {...rest}
      type={type} 
      class={className} 
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
