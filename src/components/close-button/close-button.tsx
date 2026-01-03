/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { closeButtonClasses } from './presentation-logic'

type VisibleCloseButtonProps = JaxsTypes.Props<
  {
    disabled?: boolean
    white?: boolean
    onClick: string
    show: true
  } & HTMLAttributes
>
type HiddenCloseButtonProps = JaxsTypes.Props<
  {
    show: false
    white?: boolean
    onClick?: string
    disabled?: boolean
  } & HTMLAttributes
>

export type CloseButtonProps = VisibleCloseButtonProps | HiddenCloseButtonProps

export const CloseButton = ({
  show = true,
  disabled = false,
  white = false,
  class: className,
  onClick,
  ...props
}: CloseButtonProps) => {
  if (!show) return

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
