/** @jsx jsx */
/** @jsxFrag jsx.fragment */
import { jsx, JaxsTypes } from 'jaxs'
import { HTMLAttributes } from '../types'
import { addClassesToBase } from '../presentation-logic'

export type NavbarTogglerProps = JaxsTypes.Props<
  HTMLAttributes & {
    onClick: string
    ariaControls?: string
    ariaExpanded?: boolean
    ariaLabel?: string
  }
>

export const NavbarToggler = ({
  children,
  class: className,
  onClick,
  ariaControls,
  ariaExpanded = false,
  ariaLabel = 'Toggle navigation',
  ...props
}: NavbarTogglerProps) => {
  // data-bs-toggle="collapse" - Bootstrap's data attribute for toggling collapse behavior
  // data-bs-target="#targetId" - Bootstrap's data attribute specifying which collapse element to toggle

  const classes = addClassesToBase('navbar-toggler', className)

  return (
    <button
      class={classes}
      type="button"
      onClick={onClick}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded ? 'true' : 'false'}
      aria-label={ariaLabel}
      {...props}
    >
      <span class="navbar-toggler-icon" />
    </button>
  )
}
