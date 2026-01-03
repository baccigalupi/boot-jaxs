/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { closeButtonClasses } from './presentation-logic'

export type CloseButtonProps = JaxsTypes.Props<
  {
    dismissible?: boolean
    disabled?: boolean
    white?: boolean
    onClick: string
  } & HTMLAttributes
>

export const CloseButton = ({
  dismissible = true,
  disabled = false,
  white = false,
  class: className,
  onClick,
  ...props
}: CloseButtonProps) => {
  if (!dismissible) return

  const classes = closeButtonClasses({ white, propClasses: className })

  return (
    <button
      type="button"
      class={classes}
      aria-label="Close"
      disabled={disabled}
      onClick={onClick}
      {...props}
    />
  )
}
