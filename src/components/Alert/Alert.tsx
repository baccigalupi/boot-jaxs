/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { componentName } from './interactions'
import { HTMLAttributes, StyleVariant } from '../types'
import { alertClassName, buildOnClickEvent } from './presentation-logic'
import { CloseButton } from '@components/close-button/close-button'

export type AlertProps = JaxsTypes.Props<
  {
    id: string
    variant?: StyleVariant
    dismissible?: boolean
  } & HTMLAttributes
>

type ButtonProps = JaxsTypes.Props<
  {
    dismissible: boolean
    onClick: string
  } & HTMLAttributes
>

const DismissibleButton = ({ dismissible, onClick }: ButtonProps) => {
  if (!dismissible) return

  return <CloseButton onClick={onClick} />
}

export const Alert = ({
  id,
  variant = 'primary',
  dismissible = false,
  class: propClasses,
  children,
}: AlertProps) => {
  const className = alertClassName(variant, dismissible, propClasses)
  const onClick = buildOnClickEvent(id, componentName)

  return (
    <div id={id} class={className} role="alert">
      {children}
      <DismissibleButton dismissible={dismissible} onClick={onClick} />
    </div>
  )
}
