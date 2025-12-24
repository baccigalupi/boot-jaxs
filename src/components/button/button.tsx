/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { buttonClass } from './presentation-logic'
import { ButtonVariant, ButtonType, Size, HTMLAttributes } from '../types'

export type ButtonProps = JaxsTypes.Props<
  {
    variant?: ButtonVariant
    size?: Size
    outline?: boolean
    disabled?: boolean
    type?: ButtonType
    onClick: string
  } & HTMLAttributes
>

export const Button = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size,
    class: propClass,
    onClick,
    children,
    outline = false,
    disabled = false,
    type = 'button',
    ...rest
  } = props

  const className = buttonClass({ variant, outline, size, propClass })
  const buttonProps = { type, disabled, ...rest }
  return (
    <button {...buttonProps} class={className}>
      {children}
    </button>
  )
}
