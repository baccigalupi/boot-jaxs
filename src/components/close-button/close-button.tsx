/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes, withViewModel } from 'jaxs'
import { HTMLAttributes } from '../types'
import { viewModel } from './view-model'

type VisibleCloseButtonProps = JaxsTypes.Props<
  {
    disabled?: boolean
    white?: boolean
    onClick: string
    show?: true
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

export type CloseButtonTemplateProps = {
  class: string
  show?: boolean
  disabled?: boolean
  onClick?: string
}

export const CloseButtonTemplate = ({
  class: className,
  show = true,
  disabled = false,
  onClick,
  ...props
}: JaxsTypes.Props<CloseButtonTemplateProps & HTMLAttributes>) => {
  if (!show) return

  return (
    <button
      type="button"
      class={className}
      aria-label="Close"
      disabled={disabled}
      onClick={onClick}
      {...props}
    />
  )
}

export const CloseButton = withViewModel({
  Template: CloseButtonTemplate,
  viewModel,
})
